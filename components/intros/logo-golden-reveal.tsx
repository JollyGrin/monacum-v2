"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import type * as THREE from "three"

interface LogoGoldenRevealProps {
  onComplete: () => void
}

function LogoModel({ phase }: { phase: "appear" | "spin" | "settle" | "exit" }) {
  const { scene } = useGLTF("/models/monacum-logo.glb")
  const groupRef = useRef<THREE.Group>(null)
  const rotationSpeed = useRef(3)

  useFrame((state, delta) => {
    if (groupRef.current) {
      if (phase === "appear") {
        // Fast initial spin
        groupRef.current.rotation.y += delta * rotationSpeed.current
        rotationSpeed.current = Math.max(rotationSpeed.current - delta * 0.5, 0.8)
      } else if (phase === "spin") {
        // Steady rotation
        groupRef.current.rotation.y += delta * 0.8
      } else if (phase === "settle" || phase === "exit") {
        // Slow to a stop
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

  useFrame((state, delta) => {
    if (ringRef.current && visible) {
      ringRef.current.rotation.x += delta * speed
      ringRef.current.rotation.z += delta * speed * 0.5
    }
  })

  if (!visible) return null

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[size, 0.01, 16, 100]} />
      <meshStandardMaterial
        color="#D4A96A"
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

export function LogoGoldenReveal({ onComplete }: LogoGoldenRevealProps) {
  const [phase, setPhase] = useState<"appear" | "spin" | "settle" | "exit" | "done">("appear")

  useEffect(() => {
    // Phase transitions
    const timers = [
      setTimeout(() => setPhase("spin"), 600),
      setTimeout(() => setPhase("settle"), 2200),
      setTimeout(() => setPhase("exit"), 2800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (phase === "exit") {
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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient background that scales down and moves */}
          <motion.div 
            className="absolute inset-0"
            style={{ 
              background: "radial-gradient(ellipse at center, #2a2318 0%, #1a1612 50%, #0d0b09 100%)"
            }}
            animate={phase === "exit" ? { 
              opacity: 0,
              scale: 0.95
            } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* 3D Scene - shrinks and moves to top-left */}
          <motion.div
            className="absolute"
            initial={{ 
              top: "0", 
              left: "0", 
              width: "100vw",
              height: "100vh"
            }}
            animate={phase === "exit" ? { 
              top: "2.25rem",
              left: "1.5rem", 
              width: "3rem",
              height: "3rem",
              opacity: 0
            } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
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
                <GoldenRing delay={0.2} size={0.4} speed={0.3} />
                <GoldenRing delay={0.4} size={0.55} speed={-0.2} />
                <GoldenRing delay={0.6} size={0.7} speed={0.15} />
                <Environment preset="sunset" />
              </Suspense>
            </Canvas>
          </motion.div>
          
          {/* Text - fades up and out */}
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
              {/* Golden line above */}
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
              {/* Golden line below */}
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
  )
}

useGLTF.preload("/models/monacum-logo.glb")
