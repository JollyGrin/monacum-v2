"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// --- Squares transition mask ---

function hash2d(x: number, y: number): number {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
  return n - Math.floor(n)
}

function smoothNoise(x: number, y: number): number {
  const ix = Math.floor(x)
  const iy = Math.floor(y)
  const fx = x - ix
  const fy = y - iy
  const sx = fx * fx * (3 - 2 * fx)
  const sy = fy * fy * (3 - 2 * fy)
  const n00 = hash2d(ix, iy)
  const n10 = hash2d(ix + 1, iy)
  const n01 = hash2d(ix, iy + 1)
  const n11 = hash2d(ix + 1, iy + 1)
  return (n00 + (n10 - n00) * sx) + ((n01 + (n11 - n01) * sx) - (n00 + (n10 - n00) * sx)) * sy
}

function fbm(x: number, y: number, octaves = 3): number {
  let value = 0, amplitude = 0.5, frequency = 1
  for (let i = 0; i < octaves; i++) {
    value += amplitude * smoothNoise(x * frequency, y * frequency)
    amplitude *= 0.5
    frequency *= 2
  }
  return value
}

const GRID_COLS = 80
const GRID_ROWS = 45

function buildNoiseGrid(): Float32Array {
  const grid = new Float32Array(GRID_COLS * GRID_ROWS)
  for (let y = 0; y < GRID_ROWS; y++) {
    for (let x = 0; x < GRID_COLS; x++) {
      const spatial = fbm(x * 0.12, y * 0.12)
      const random = hash2d(x + 3, y + 7)
      grid[y * GRID_COLS + x] = spatial * 0.75 + random * 0.25
    }
  }
  let min = Infinity, max = -Infinity
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] < min) min = grid[i]
    if (grid[i] > max) max = grid[i]
  }
  const range = max - min || 1
  for (let i = 0; i < grid.length; i++) {
    grid[i] = (grid[i] - min) / range
  }
  return grid
}

const CELL_PX = 8
const MASK_W = GRID_COLS * CELL_PX
const MASK_H = GRID_ROWS * CELL_PX

function renderMask(
  data: Uint8ClampedArray,
  grid: Float32Array,
  progress: number,
  threshold: number,
) {
  const r = progress * (1.0 + threshold * 2.0) - threshold

  for (let gy = 0; gy < GRID_ROWS; gy++) {
    for (let gx = 0; gx < GRID_COLS; gx++) {
      const texVal = grid[gy * GRID_COLS + gx]
      const mixf = Math.max(0, Math.min(1, (texVal - r) * (1.0 / threshold)))
      const show = mixf > 0.5

      for (let ly = 0; ly < CELL_PX; ly++) {
        for (let lx = 0; lx < CELL_PX; lx++) {
          const px = ((gy * CELL_PX + ly) * MASK_W + (gx * CELL_PX + lx)) * 4
          if (show) {
            data[px] = 255; data[px + 1] = 255; data[px + 2] = 255; data[px + 3] = 255
          } else {
            data[px] = 0; data[px + 1] = 0; data[px + 2] = 0; data[px + 3] = 0
          }
        }
      }
    }
  }
}

// --- Main Component ---

interface LogoGoldenRevealProps {
  onComplete: () => void
}

export function LogoGoldenReveal({ onComplete }: LogoGoldenRevealProps) {
  const [phase, setPhase] = useState<"hold" | "exit" | "done">("hold")
  const overlayRef = useRef<HTMLDivElement>(null)
  const noiseGridRef = useRef<Float32Array | null>(null)
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const maskCtxRef = useRef<CanvasRenderingContext2D | null>(null)
  const maskImageDataRef = useRef<ImageData | null>(null)

  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Pre-compute noise grid and mask canvas on mount
  useEffect(() => {
    noiseGridRef.current = buildNoiseGrid()
    const c = document.createElement("canvas")
    c.width = MASK_W
    c.height = MASK_H
    maskCanvasRef.current = c
    maskCtxRef.current = c.getContext("2d")!
    maskImageDataRef.current = maskCtxRef.current.createImageData(MASK_W, MASK_H)
  }, [])

  // Brief hold then start squares transition
  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), 400)
    return () => clearTimeout(timer)
  }, [])

  // Squares mask animation
  useEffect(() => {
    if (phase !== "exit") return

    const overlay = overlayRef.current
    const grid = noiseGridRef.current
    const ctx = maskCtxRef.current
    const imageData = maskImageDataRef.current
    const maskCanvas = maskCanvasRef.current
    if (!overlay || !grid || !ctx || !imageData || !maskCanvas) return

    const threshold = 0.1
    const start = performance.now()
    const duration = 2500
    let raf: number

    function animate() {
      const elapsed = performance.now() - start
      const raw = Math.min(elapsed / duration, 1)

      renderMask(imageData!.data, grid!, raw, threshold)
      ctx!.putImageData(imageData!, 0, 0)
      const maskUrl = maskCanvas!.toDataURL()
      overlay!.style.maskImage = `url(${maskUrl})`
      overlay!.style.webkitMaskImage = `url(${maskUrl})`
      overlay!.style.maskSize = "100% 100%"
      overlay!.style.webkitMaskSize = "100% 100%"

      if (raw < 1) {
        raf = requestAnimationFrame(animate)
      } else {
        setPhase("done")
        onCompleteRef.current()
      }
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  if (phase === "done") return null

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[100]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, #2a2318 0%, #1a1612 50%, #0d0b09 100%)"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
