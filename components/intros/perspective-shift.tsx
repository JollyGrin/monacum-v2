"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PerspectiveShiftProps {
  onComplete: () => void
}

// Abstract building blocks for 3D-ish effect
const blocks = [
  { x: 20, y: 60, w: 15, h: 25, z: 1 },
  { x: 38, y: 50, w: 12, h: 35, z: 2 },
  { x: 52, y: 55, w: 18, h: 30, z: 1.5 },
  { x: 72, y: 45, w: 10, h: 40, z: 2.5 },
  { x: 85, y: 58, w: 8, h: 27, z: 1 },
]

export function PerspectiveShift({ onComplete }: PerspectiveShiftProps) {
  const [phase, setPhase] = useState<"intro" | "rotate" | "pullback" | "done">("intro")

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("rotate"), 600)
    const timer2 = setTimeout(() => setPhase("pullback"), 2000)
    const timer3 = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          style={{ 
            backgroundColor: "oklch(0.985 0.008 85)",
            perspective: "1000px"
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* 3D rotating container */}
          <motion.div
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateX: phase === "rotate" ? -15 : phase === "pullback" ? 0 : -5,
              rotateY: phase === "rotate" ? 10 : phase === "pullback" ? 0 : 5,
              scale: phase === "pullback" ? 0.8 : 1,
              y: phase === "pullback" ? -100 : 0,
              opacity: phase === "pullback" ? 0 : 1
            }}
            transition={{ 
              duration: phase === "pullback" ? 0.6 : 1.2, 
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* Abstract isometric buildings behind logo */}
            <motion.div 
              className="absolute inset-0 flex items-end justify-center pointer-events-none"
              style={{ transform: "translateZ(-50px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <svg 
                viewBox="0 0 120 100" 
                className="w-80 h-64 md:w-96 md:h-72"
                style={{ transform: "rotateX(45deg)" }}
              >
                {blocks.map((block, i) => (
                  <motion.g key={i}>
                    {/* Top face */}
                    <motion.polygon
                      points={`
                        ${block.x},${block.y - block.h}
                        ${block.x + block.w},${block.y - block.h - 3}
                        ${block.x + block.w + 5},${block.y - block.h}
                        ${block.x + 5},${block.y - block.h + 3}
                      `}
                      fill="oklch(0.80 0.08 70)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    />
                    {/* Front face */}
                    <motion.rect
                      x={block.x}
                      y={block.y - block.h}
                      width={block.w}
                      height={block.h}
                      fill="oklch(0.75 0.10 70)"
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                      style={{ transformOrigin: `${block.x}px ${block.y}px` }}
                    />
                    {/* Right face */}
                    <motion.polygon
                      points={`
                        ${block.x + block.w},${block.y - block.h}
                        ${block.x + block.w + 5},${block.y - block.h + 3}
                        ${block.x + block.w + 5},${block.y + 3}
                        ${block.x + block.w},${block.y}
                      `}
                      fill="oklch(0.65 0.08 70)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    />
                  </motion.g>
                ))}
              </svg>
            </motion.div>

            {/* Logo container */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Monacum wordmark */}
              <motion.h1
                className="font-serif text-5xl md:text-7xl font-medium tracking-tight"
                style={{ 
                  color: "oklch(0.22 0.025 60)",
                  textShadow: "0 4px 20px oklch(0.75 0.10 70 / 0.2)"
                }}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                MONACUM
              </motion.h1>
              
              {/* Tagline */}
              <motion.p
                className="mt-4 text-sm tracking-[0.3em] uppercase"
                style={{ color: "oklch(0.75 0.10 70)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Immobilienverwaltung
              </motion.p>

              {/* Decorative underline */}
              <motion.div
                className="mt-6 h-0.5 rounded-full"
                style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
