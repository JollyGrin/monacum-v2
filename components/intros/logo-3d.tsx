"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { TextureLoader, DoubleSide, SRGBColorSpace } from "three"
import type { Mesh } from "three"

// --- 3D Spinning Logo ---

function SpinningLogo() {
  const texture = useLoader(TextureLoader, "/images/monacum-logo.png")
  const meshRef = useRef<Mesh>(null)

  texture.colorSpace = SRGBColorSpace

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 3]} />
      <meshPhysicalMaterial
        map={texture}
        alphaTest={0.5}
        transparent
        side={DoubleSide}
        metalness={0.3}
        roughness={0.4}
        clearcoat={0.3}
      />
    </mesh>
  )
}

// --- Main Component ---

interface Logo3DProps {
  onComplete: () => void
}

export function Logo3D({ onComplete }: Logo3DProps) {
  const [phase, setPhase] = useState<"hold" | "exit" | "done">("hold")
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Hold then start exit
  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Signal content to start animating as soon as exit begins
  useEffect(() => {
    if (phase !== "exit") return
    onCompleteRef.current()
    const timer = setTimeout(() => setPhase("done"), 900)
    return () => clearTimeout(timer)
  }, [phase])

  if (phase === "done") return null

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      initial={{ y: 0 }}
      animate={{ y: phase === "exit" ? "-100%" : 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #2a2318 0%, #1a1612 50%, #0d0b09 100%)"
        }}
      />
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} />
          <pointLight position={[-5, -3, 3]} intensity={0.4} color="#D4A96A" />
          <Suspense fallback={null}>
            <SpinningLogo />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>
    </motion.div>
  )
}
