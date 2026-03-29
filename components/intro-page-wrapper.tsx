"use client"

import { useState, useCallback, type ReactNode } from "react"
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

interface IntroPageWrapperProps {
  intro: ReactNode
}

export function IntroPageWrapper({ intro }: IntroPageWrapperProps) {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      {/* Pass onComplete to the intro component */}
      {!introComplete && (
        <div>
          {typeof intro === "function" 
            ? intro({ onComplete: handleIntroComplete })
            : intro
          }
        </div>
      )}
      
      {/* Main content - always rendered but hidden during intro */}
      <div 
        className={introComplete ? "opacity-100" : "opacity-0"}
        style={{ transition: "opacity 0.3s ease-in-out" }}
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
      </div>
    </>
  )
}
