"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import type * as THREE from "three"

// --- Squares transition mask ---

function hash2d(x: number, y: number): number {
  // Classic GLSL hash — no integer overflow issues in JS
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
      const spatial = fbm(x * 0.15, y * 0.15)
      const random = hash2d(x + 3, y + 7)
      grid[y * GRID_COLS + x] = spatial * 0.4 + random * 0.6
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

// --- 3D Components ---

interface LogoGoldenRevealProps {
  onComplete: () => void
}

function LogoModel({ phase }: { phase: "appear" | "spin" | "settle" | "exit" }) {
  const { scene } = useGLTF("/models/monacum-logo.glb")
  const groupRef = useRef<THREE.Group>(null)
  const rotationSpeed = useRef(3)

  useFrame((_, delta) => {
    if (groupRef.current) {
      if (phase === "appear") {
        groupRef.current.rotation.y += delta * rotationSpeed.current
        rotationSpeed.current = Math.max(rotationSpeed.current - delta * 0.5, 0.8)
      } else if (phase === "spin") {
        groupRef.current.rotation.y += delta * 0.8
      } else if (phase === "settle" || phase === "exit") {
        rotationSpeed.current = Math.max(rotationSpeed.current - delta * 2, 0.3)
        groupRef.current.rotation.y += delta * rotationSpeed.current
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        <primitive object={scene} scale={0.08} />
      </group>
    </Float>
  )
}

function GoldenRing({ delay, size, speed }: { delay: number; size: number; speed: number }) {
  const ringRef = useRef<THREE.Mesh>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  useFrame((_, delta) => {
    if (ringRef.current && visible) {
      ringRef.current.rotation.x += delta * speed
      ringRef.current.rotation.z += delta * speed * 0.5
    }
  })

  if (!visible) return null

  return (
    <mesh ref={ringRef} renderOrder={-1} position={[0, 0, -0.5]}>
      <torusGeometry args={[size, 0.01, 16, 100]} />
      <meshStandardMaterial
        color="#D4A96A"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </mesh>
  )
}

// --- Debug Controls ---

function DebugPanel({
  progress,
  threshold,
  onProgressChange,
  onThresholdChange,
  onPlay,
  playing,
}: {
  progress: number
  threshold: number
  onProgressChange: (v: number) => void
  onThresholdChange: (v: number) => void
  onPlay: () => void
  playing: boolean
}) {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[200] bg-black/90 text-white p-4 rounded-lg shadow-2xl"
      style={{ width: 420, fontFamily: "monospace", fontSize: 12 }}
    >
      <div className="font-bold text-sm mb-3">Squares Transition Debug</div>

      <label className="flex items-center gap-2 mb-2">
        <span className="w-20">progress</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.005}
          value={progress}
          onChange={(e) => onProgressChange(parseFloat(e.target.value))}
          className="flex-1"
          disabled={playing}
        />
        <span className="w-12 text-right">{progress.toFixed(2)}</span>
      </label>

      <label className="flex items-center gap-2 mb-3">
        <span className="w-20">threshold</span>
        <input
          type="range"
          min={0.01}
          max={1}
          step={0.01}
          value={threshold}
          onChange={(e) => onThresholdChange(parseFloat(e.target.value))}
          className="flex-1"
        />
        <span className="w-12 text-right">{threshold.toFixed(2)}</span>
      </label>

      <button
        onClick={onPlay}
        className="w-full py-1.5 bg-white/20 hover:bg-white/30 rounded text-xs"
      >
        {playing ? "⏸ Pause" : "▶ Play animation"}
      </button>
    </div>
  )
}

// --- Main Component ---

export function LogoGoldenReveal({ onComplete }: LogoGoldenRevealProps) {
  const [phase, setPhase] = useState<"appear" | "spin" | "settle" | "exit" | "done">("appear")
  const overlayRef = useRef<HTMLDivElement>(null)
  const noiseGridRef = useRef<Float32Array | null>(null)
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const maskCtxRef = useRef<CanvasRenderingContext2D | null>(null)
  const maskImageDataRef = useRef<ImageData | null>(null)

  // Debug state
  const [debugProgress, setDebugProgress] = useState(0)
  const [debugThreshold, setDebugThreshold] = useState(0.1)
  const [playing, setPlaying] = useState(false)

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

  // Phase transitions — skip straight to exit for debugging
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("spin"), 600),
      setTimeout(() => setPhase("settle"), 2200),
      setTimeout(() => setPhase("exit"), 2800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  // Apply mask whenever debug controls change or playing animates
  const applyMask = (progress: number, threshold: number) => {
    const overlay = overlayRef.current
    const grid = noiseGridRef.current
    const ctx = maskCtxRef.current
    const imageData = maskImageDataRef.current
    const maskCanvas = maskCanvasRef.current
    if (!overlay || !grid || !ctx || !imageData || !maskCanvas) return

    renderMask(imageData.data, grid, progress, threshold)
    ctx.putImageData(imageData, 0, 0)
    const maskUrl = maskCanvas.toDataURL()
    overlay.style.maskImage = `url(${maskUrl})`
    overlay.style.webkitMaskImage = `url(${maskUrl})`
    overlay.style.maskSize = "100% 100%"
    overlay.style.webkitMaskSize = "100% 100%"
  }

  // Manual slider: apply mask on every debug state change during exit
  useEffect(() => {
    if (phase === "exit" && !playing) {
      applyMask(debugProgress, debugThreshold)
    }
  }, [phase, debugProgress, debugThreshold, playing])

  // Auto-play animation
  useEffect(() => {
    if (phase !== "exit" || !playing) return

    const start = performance.now()
    const startProgress = debugProgress
    const duration = 2500 * (1 - startProgress) // remaining duration
    let raf: number

    function animate() {
      const elapsed = performance.now() - start
      const raw = Math.min(startProgress + (elapsed / 2500), 1)
      setDebugProgress(raw)
      applyMask(raw, debugThreshold)

      if (raw < 1) {
        raf = requestAnimationFrame(animate)
      } else {
        setPlaying(false)
        setPhase("done")
        onCompleteRef.current()
      }
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [phase, playing])

  if (phase === "done") return null

  return (
    <>
      {/* Debug panel — visible during exit phase */}
      {phase === "exit" && (
        <DebugPanel
          progress={debugProgress}
          threshold={debugThreshold}
          onProgressChange={setDebugProgress}
          onThresholdChange={setDebugThreshold}
          onPlay={() => setPlaying((p) => !p)}
          playing={playing}
        />
      )}

      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 z-[100]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
          >
            {/* Dark gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, #2a2318 0%, #1a1612 50%, #0d0b09 100%)"
              }}
            />

            {/* 3D Scene */}
            <div className="absolute inset-0">
              <Canvas
                camera={{ position: [0, 0, 3], fov: 45 }}
                gl={{ antialias: true }}
              >
                <ambientLight intensity={0.3} />
                <spotLight
                  position={[5, 5, 5]}
                  angle={0.3}
                  penumbra={1}
                  intensity={1.5}
                  color="#D4A96A"
                />
                <spotLight
                  position={[-5, -5, 5]}
                  angle={0.3}
                  penumbra={1}
                  intensity={0.8}
                  color="#FAF7F2"
                />
                <Suspense fallback={null}>
                  <LogoModel phase={phase} />
                  <GoldenRing delay={0.2} size={0.5} speed={0.3} />
                  <GoldenRing delay={0.4} size={0.7} speed={-0.2} />
                  <GoldenRing delay={0.6} size={0.9} speed={0.15} />
                  <Environment preset="sunset" />
                </Suspense>
              </Canvas>
            </div>

            {/* Text */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-end pb-24 pointer-events-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: phase === "exit" ? 0 : (phase === "appear" ? 0 : 1),
                y: phase === "exit" ? -40 : 0
              }}
              transition={{ delay: phase === "appear" ? 0.8 : 0, duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#D4A96A] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: phase === "exit" ? 0 : 200 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
                <span
                  className="text-3xl tracking-[0.5em] font-light"
                  style={{ color: "#D4A96A", fontFamily: "var(--font-playfair)" }}
                >
                  MONACUM
                </span>
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#D4A96A] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: phase === "exit" ? 0 : 200 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

useGLTF.preload("/models/monacum-logo.glb")
