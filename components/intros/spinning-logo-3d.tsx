"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, PresentationControls } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import type * as THREE from "three"

interface SpinningLogo3DProps {
  onComplete: () => void
}

function LogoModel() {
  const { scene } = useGLTF("/models/monacum-logo.glb")
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous rotation
      groupRef.current.rotation.y += delta * 0.8
      // Subtle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.08} />
    </group>
  )
}

export function SpinningLogo3D({ onComplete }: SpinningLogo3DProps) {
  const [phase, setPhase] = useState<"spinning" | "exit" | "done">("spinning")

  useEffect(() => {
    // Show spinning logo for 2.5 seconds
    const spinTimer = setTimeout(() => {
      setPhase("exit")
    }, 2500)

    return () => clearTimeout(spinTimer)
  }, [])

  useEffect(() => {
    if (phase === "exit") {
      // Exit animation duration
      const exitTimer = setTimeout(() => {
        setPhase("done")
        onComplete()
      }, 1000)
      return () => clearTimeout(exitTimer)
    }
  }, [phase, onComplete])

  if (phase === "done") return null

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100]"
          style={{ backgroundColor: "#FAF7F2" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* 3D Logo Container - animates to top-left corner */}
          <motion.div
            className="absolute"
            initial={{ 
              top: "50%", 
              left: "50%", 
              x: "-50%", 
              y: "-50%",
              width: "100vw",
              height: "100vh"
            }}
            animate={phase === "exit" ? { 
              top: "2.25rem",
              left: "1.5rem", 
              x: "0%", 
              y: "0%",
              width: "3rem",
              height: "3rem"
            } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Canvas
              camera={{ position: [0, 0, 3], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.3} />
              <Suspense fallback={null}>
                <PresentationControls
                  global
                  snap
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  <LogoModel />
                </PresentationControls>
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </motion.div>
          
          {/* Wordmark below - fades and moves up */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: "65%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: phase === "exit" ? 0 : 1, 
              y: phase === "exit" ? -40 : 0 
            }}
            transition={{ 
              opacity: { delay: phase === "exit" ? 0 : 0.3, duration: 0.4 },
              y: { delay: phase === "exit" ? 0 : 0.3, duration: 0.6 }
            }}
          >
            <span 
              className="text-2xl tracking-[0.3em] font-light"
              style={{ color: "#8B7355", fontFamily: "var(--font-playfair)" }}
            >
              MONACUM
            </span>
          </motion.div>

          {/* Background fade to reveal content */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "#FAF7F2" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "exit" ? 0 : 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

useGLTF.preload("/models/monacum-logo.glb")
