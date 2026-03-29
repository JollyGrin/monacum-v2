"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface GoldenCurtainProps {
  onComplete: () => void
}

export function GoldenCurtain({ onComplete }: GoldenCurtainProps) {
  const [phase, setPhase] = useState<"logo" | "split" | "done">("logo")

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("split"), 1800)
    const timer2 = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <>
          {/* Left curtain */}
          <motion.div
            className="fixed inset-y-0 left-0 w-1/2 z-[200]"
            style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
            initial={{ x: 0 }}
            animate={{ x: phase === "split" ? "-100%" : 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          
          {/* Right curtain */}
          <motion.div
            className="fixed inset-y-0 right-0 w-1/2 z-[200]"
            style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
            initial={{ x: 0 }}
            animate={{ x: phase === "split" ? "100%" : 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo overlay - centered on both curtains */}
          <motion.div
            className="fixed inset-0 z-[201] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "split" ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center">
              {/* Decorative line above */}
              <motion.div
                className="mb-6 h-px w-16"
                style={{ backgroundColor: "oklch(0.22 0.025 60 / 0.4)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Monacum wordmark */}
              <motion.h1
                className="font-serif text-5xl md:text-7xl font-medium tracking-tight"
                style={{ color: "oklch(0.22 0.025 60)" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                MONACUM
              </motion.h1>
              
              {/* Tagline */}
              <motion.p
                className="mt-4 text-sm tracking-[0.3em] uppercase"
                style={{ color: "oklch(0.22 0.025 60 / 0.7)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Immobilienverwaltung
              </motion.p>

              {/* Decorative line below */}
              <motion.div
                className="mt-6 h-px w-16"
                style={{ backgroundColor: "oklch(0.22 0.025 60 / 0.4)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
