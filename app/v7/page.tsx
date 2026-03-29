"use client"

import { useState } from "react"
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
import { LogoZoomThrough } from "@/components/intros/logo-zoom-through"

export default function V7Page() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <LogoZoomThrough onComplete={() => setIntroComplete(true)} />
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ 
          opacity: introComplete ? 1 : 0, 
          y: introComplete ? 0 : 80 
        }}
        transition={{ 
          duration: 0.9, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1
        }}
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
    </>
  )
}
