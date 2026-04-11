"use client"

import { useEffect, useState, useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { TextureLoader, DoubleSide, SRGBColorSpace } from "three"
import type { Mesh, Points } from "three"

// --- Golden particle dust ---

function ParticleField() {
  const ref = useRef<Points>(null)
  const count = 300

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#D4A96A"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

// --- 3D Spinning Logo ---

function SpinningLogo() {
  const texture = useLoader(TextureLoader, "/images/monacum-logo.png")
  const meshRef = useRef<Mesh>(null)
  const scaleRef = useRef(0)

  texture.colorSpace = SRGBColorSpace

  useFrame((state, delta) => {
    if (!meshRef.current) return

    // Scale entrance
    if (scaleRef.current < 1) {
      scaleRef.current = Math.min(1, scaleRef.current + delta * 0.8)
      const ease = 1 - Math.pow(1 - scaleRef.current, 3)
      meshRef.current.scale.setScalar(ease)
    }

    // Spin with gentle wobble
    meshRef.current.rotation.y += delta * 1.2
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <mesh ref={meshRef} scale={0}>
      <planeGeometry args={[2, 2]} />
      <meshPhysicalMaterial
        map={texture}
        alphaTest={0.5}
        transparent
        side={DoubleSide}
        metalness={0.4}
        roughness={0.3}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
        envMapIntensity={1.5}
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
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} />
          <pointLight position={[-5, -3, 3]} intensity={0.4} color="#D4A96A" />
          {/* Warm backlight for rim glow */}
          <pointLight position={[0, 0, -4]} intensity={0.6} color="#C89B5E" />
          <Suspense fallback={null}>
            <SpinningLogo />
            <ParticleField />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* Text overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-end pb-28 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
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
  )
}
