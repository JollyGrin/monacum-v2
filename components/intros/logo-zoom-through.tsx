"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import type * as THREE from "three"

interface LogoZoomThroughProps {
  onComplete: () => void
}

function LogoModel({ phase }: { phase: "intro" | "zoom" | "exit" | "done" }) {
  const { scene } = useGLTF("/models/monacum-logo.glb")
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  const targetZ = -0.5

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += delta * 0.5
      
      if (phase === "zoom") {
        // Zoom camera through the logo
        const currentZ = camera.position.z
        const newZ = currentZ - delta * 6
        camera.position.z = Math.max(newZ, targetZ)
      }
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={0.08} />
    </group>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#D4A96A"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export function LogoZoomThrough({ onComplete }: LogoZoomThroughProps) {
  const [phase, setPhase] = useState<"intro" | "zoom" | "exit" | "done">("intro")

  useEffect(() => {
    // Show logo for 1.5 seconds, then zoom
    const introTimer = setTimeout(() => {
      setPhase("zoom")
    }, 1500)

    return () => clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    if (phase === "zoom") {
      // Zoom through duration, then exit
      const zoomTimer = setTimeout(() => {
        setPhase("exit")
      }, 800)
      return () => clearTimeout(zoomTimer)
    }
  }, [phase])

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
          {/* Dark background that lifts up */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "#1a1612" }}
            animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* 3D Scene - moves to top-left */}
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
              <ambientLight intensity={0.4} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4A96A" />
              <Suspense fallback={null}>
                <LogoModel phase={phase} />
                <ParticleField />
                <Environment preset="night" />
              </Suspense>
            </Canvas>
          </motion.div>
          
          {/* Text overlay */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end pb-32 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "intro" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span 
              className="text-3xl tracking-[0.4em] font-light"
              style={{ color: "#D4A96A", fontFamily: "var(--font-playfair)" }}
            >
              MONACUM
            </span>
            <span 
              className="text-sm tracking-[0.2em] mt-2 opacity-60"
              style={{ color: "#D4A96A" }}
            >
              IMMOBILIENVERWALTUNG
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

useGLTF.preload("/models/monacum-logo.glb")
