"use client"

import { useEffect, useState, useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { TextureLoader, DoubleSide, SRGBColorSpace } from "three"
import type { Mesh, Points } from "three"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

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

  useFrame((_, delta) => {
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
          args={[positions, 3]}
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
  const texture = useLoader(TextureLoader, `${basePath}/images/monacum-logo.png`)
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
  holdMs?: number
  exitMs?: number
}

export function Logo3D({ onComplete, holdMs = 2500, exitMs = 900 }: Logo3DProps) {
  const [phase, setPhase] = useState<"hold" | "exit" | "done">("hold")
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  // Hold then start exit
  useEffect(() => {
    const timer = setTimeout(
      () => setPhase((p) => (p === "hold" ? "exit" : p)),
      holdMs
    )
    return () => clearTimeout(timer)
  }, [holdMs])

  // Allow skipping at any time via click, key, scroll or touch
  useEffect(() => {
    if (phase !== "hold") return
    const skip = () => setPhase((p) => (p === "hold" ? "exit" : p))
    window.addEventListener("pointerdown", skip)
    window.addEventListener("keydown", skip)
    window.addEventListener("wheel", skip, { passive: true })
    window.addEventListener("touchstart", skip, { passive: true })
    return () => {
      window.removeEventListener("pointerdown", skip)
      window.removeEventListener("keydown", skip)
      window.removeEventListener("wheel", skip)
      window.removeEventListener("touchstart", skip)
    }
  }, [phase])

  // Signal content to start animating as soon as exit begins
  useEffect(() => {
    if (phase !== "exit") return
    onCompleteRef.current()
    const timer = setTimeout(() => setPhase("done"), exitMs)
    return () => clearTimeout(timer)
  }, [phase, exitMs])

  if (phase === "done") return null

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      initial={{ y: 0 }}
      animate={{ y: phase === "exit" ? "-100%" : 0 }}
      transition={{ duration: exitMs / 1000, ease: [0.22, 1, 0.36, 1] }}
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
            {/* Self-hosted environment map (extracted from @pmndrs/assets) –
                the drei presets would fetch it from a third-party CDN at runtime. */}
            <Environment files={`${basePath}/hdri/night.exr`} />
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
          style={{ color: "#D4A96A", fontFamily: "var(--font-playfair)" }}
        >
          IMMOBILIENVERWALTUNG
        </span>
      </motion.div>

      {/* Skip affordance */}
      <motion.button
        type="button"
        onClick={() => setPhase((p) => (p === "hold" ? "exit" : p))}
        className="absolute bottom-8 right-8 text-xs tracking-[0.15em] uppercase opacity-50 hover:opacity-100 transition-opacity"
        style={{ color: "#D4A96A" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.8 }}
        aria-label="Intro überspringen"
      >
        Überspringen
      </motion.button>
    </motion.div>
  )
}
