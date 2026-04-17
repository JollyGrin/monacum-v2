"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { TrustStrip } from "@/components/home/trust-strip"
import { IntroSection } from "@/components/home/intro-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyMonacum } from "@/components/home/why-monacum"
import { WEGFocusSection } from "@/components/home/weg-focus-section"
import { ProcessSection } from "@/components/home/process-section"
import { BautraegerTeaser } from "@/components/home/bautraeger-teaser"
import { ManagingDirectors } from "@/components/home/managing-directors"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContactSection } from "@/components/home/contact-section"
import { Logo3D } from "@/components/intros/logo-3d"
import { useIntroTimings, isDebugEnabled } from "@/lib/use-intro-timings"

const TimingControls = dynamic(
  () => import("@/components/debug/timing-controls").then((m) => m.TimingControls),
  { ssr: false }
)

export default function HomePage() {
  const { timings, update, ready } = useIntroTimings()
  const [introComplete, setIntroComplete] = useState(false)
  const [introKey, setIntroKey] = useState(0)
  const [debug, setDebug] = useState(false)

  useEffect(() => {
    setDebug(isDebugEnabled())
  }, [])

  if (!ready) return null

  const replay = () => {
    setIntroComplete(false)
    setIntroKey((k) => k + 1)
  }

  return (
    <>
      <Logo3D
        key={introKey}
        onComplete={() => setIntroComplete(true)}
        holdMs={timings.logoHold}
        exitMs={timings.logoExit}
      />

      <motion.div
        animate={introComplete ? { y: 0 } : { y: timings.contentSlideDistance }}
        transition={{ duration: timings.contentSlideDuration / 1000, ease: [0.22, 1, 0.36, 1] }}
      >
        <Header />
        <main>
          <HeroSection />
          <TrustStrip />
          <IntroSection />
          <ServicesOverview />
          <WhyMonacum />
          <WEGFocusSection />
          <ProcessSection />
          <BautraegerTeaser />
          <ManagingDirectors />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>

      {debug && (
        <TimingControls timings={timings} onChange={update} onReplay={replay} />
      )}
    </>
  )
}
