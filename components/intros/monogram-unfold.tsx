"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MonogramUnfoldProps {
  onComplete: () => void
}

export function MonogramUnfold({ onComplete }: MonogramUnfoldProps) {
  const [phase, setPhase] = useState<"draw" | "expand" | "text" | "exit" | "done">("draw")

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("expand"), 800)
    const timer2 = setTimeout(() => setPhase("text"), 1400)
    const timer3 = setTimeout(() => setPhase("exit"), 2400)
    const timer4 = setTimeout(() => {
      setPhase("done")
      onComplete()
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Corner frame lines */}
          <motion.div
            className="absolute inset-8 md:inset-16 pointer-events-none"
            animate={{
              opacity: phase === "exit" ? 0 : 1,
              scale: phase === "exit" ? 1.1 : 1
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Top left corner */}
            <motion.div
              className="absolute top-0 left-0 w-16 h-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.div
              className="absolute top-0 left-0 h-16 w-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            />
            
            {/* Top right corner */}
            <motion.div
              className="absolute top-0 right-0 w-16 h-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-0 right-0 h-16 w-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            />
            
            {/* Bottom left corner */}
            <motion.div
              className="absolute bottom-0 left-0 w-16 h-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-16 w-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            />
            
            {/* Bottom right corner */}
            <motion.div
              className="absolute bottom-0 right-0 w-16 h-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-16 w-px"
              style={{ backgroundColor: "oklch(0.75 0.10 70)" }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: phase !== "draw" ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            />
          </motion.div>

          {/* Central monogram and text */}
          <motion.div 
            className="flex flex-col items-center"
            animate={{
              y: phase === "exit" ? -60 : 0,
              opacity: phase === "exit" ? 0 : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* M Monogram - drawn with SVG */}
            <motion.svg
              viewBox="0 0 100 80"
              className="w-32 h-24 md:w-40 md:h-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                d="M 10 70 L 10 20 L 50 55 L 90 20 L 90 70"
                fill="none"
                stroke="oklch(0.75 0.10 70)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </motion.svg>

            {/* Full wordmark */}
            <motion.h1
              className="mt-6 font-serif text-4xl md:text-6xl font-medium tracking-tight"
              style={{ color: "oklch(0.22 0.025 60)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase === "text" || phase === "exit" ? 1 : 0,
                y: phase === "text" || phase === "exit" ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
            >
              MONACUM
            </motion.h1>
            
            {/* Tagline */}
            <motion.p
              className="mt-3 text-sm tracking-[0.25em] uppercase"
              style={{ color: "oklch(0.48 0.02 60)" }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: phase === "text" || phase === "exit" ? 1 : 0
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Immobilienverwaltung
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
