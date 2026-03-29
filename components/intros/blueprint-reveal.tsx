"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface BlueprintRevealProps {
  onComplete: () => void
}

export function BlueprintReveal({ onComplete }: BlueprintRevealProps) {
  const [phase, setPhase] = useState<"logo" | "grid" | "reveal" | "done">("logo")

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("grid"), 800)
    const timer2 = setTimeout(() => setPhase("reveal"), 2000)
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
          style={{ backgroundColor: "oklch(0.985 0.008 85)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Blueprint grid lines */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Horizontal lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px"
                style={{ 
                  top: `${(i + 1) * 5}%`,
                  backgroundColor: "oklch(0.75 0.10 70 / 0.15)"
                }}
                initial={{ scaleX: 0, originX: 0.5 }}
                animate={{ 
                  scaleX: phase === "logo" ? 0 : 1,
                  opacity: phase === "reveal" ? 0 : 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.03,
                  ease: "easeOut"
                }}
              />
            ))}
            {/* Vertical lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px"
                style={{ 
                  left: `${(i + 1) * 5}%`,
                  backgroundColor: "oklch(0.75 0.10 70 / 0.15)"
                }}
                initial={{ scaleY: 0, originY: 0.5 }}
                animate={{ 
                  scaleY: phase === "logo" ? 0 : 1,
                  opacity: phase === "reveal" ? 0 : 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.03,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Logo container */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            animate={{
              scale: phase === "reveal" ? 0.6 : 1,
              y: phase === "reveal" ? -200 : 0,
              opacity: phase === "reveal" ? 0 : 1
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Monacum wordmark */}
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-medium tracking-tight"
              style={{ color: "oklch(0.22 0.025 60)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              MONACUM
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              className="mt-4 text-sm tracking-[0.3em] uppercase"
              style={{ color: "oklch(0.75 0.10 70)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Immobilienverwaltung
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mt-6 h-px w-24"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
