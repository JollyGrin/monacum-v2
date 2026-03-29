"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SkylineBuildProps {
  onComplete: () => void
}

// Munich skyline building data (simplified silhouettes)
const buildings = [
  { x: 5, width: 8, height: 45, delay: 0 },
  { x: 15, width: 6, height: 35, delay: 0.1 },
  { x: 23, width: 10, height: 55, delay: 0.15 },
  // Frauenkirche left tower
  { x: 35, width: 7, height: 70, delay: 0.2, isLandmark: true },
  // Frauenkirche right tower
  { x: 44, width: 7, height: 70, delay: 0.25, isLandmark: true },
  { x: 53, width: 9, height: 40, delay: 0.3 },
  { x: 64, width: 5, height: 30, delay: 0.35 },
  // Olympic Tower (tall thin)
  { x: 72, width: 3, height: 85, delay: 0.4, isLandmark: true },
  { x: 78, width: 8, height: 38, delay: 0.45 },
  { x: 88, width: 7, height: 48, delay: 0.5 },
]

export function SkylineBuild({ onComplete }: SkylineBuildProps) {
  const [phase, setPhase] = useState<"build" | "hold" | "dissolve" | "done">("build")

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("hold"), 1200)
    const timer2 = setTimeout(() => setPhase("dissolve"), 2000)
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
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Logo above skyline */}
          <motion.div
            className="relative z-10 flex flex-col items-center mb-8"
            animate={{
              y: phase === "dissolve" ? -40 : 0,
              opacity: phase === "dissolve" ? 0 : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-medium tracking-tight"
              style={{ color: "oklch(0.22 0.025 60)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              MONACUM
            </motion.h1>
            
            <motion.p
              className="mt-3 text-sm tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.75 0.10 70)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              München
            </motion.p>
          </motion.div>

          {/* Skyline container */}
          <motion.div 
            className="relative w-full max-w-2xl h-32 md:h-40"
            animate={{
              opacity: phase === "dissolve" ? 0 : 1,
              y: phase === "dissolve" ? 20 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
              preserveAspectRatio="xMidYMax meet"
            >
              {buildings.map((building, i) => (
                <motion.rect
                  key={i}
                  x={building.x}
                  y={100 - building.height}
                  width={building.width}
                  height={building.height}
                  fill={building.isLandmark ? "oklch(0.75 0.10 70)" : "oklch(0.75 0.10 70 / 0.5)"}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ 
                    scaleY: 1,
                    y: [100 - building.height, 100 - building.height]
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: building.delay,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ transformOrigin: `${building.x + building.width/2}px 100px` }}
                />
              ))}
              
              {/* Ground line */}
              <motion.line
                x1="0"
                y1="100"
                x2="100"
                y2="100"
                stroke="oklch(0.75 0.10 70)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
