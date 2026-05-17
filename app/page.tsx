"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { IntroSection } from "@/components/home/intro-section";
import { ServicesOverview } from "@/components/home/services-overview";
import { WhyMonacum } from "@/components/home/why-monacum";
import { WEGFocusSection } from "@/components/home/weg-focus-section";
import { ProcessSection } from "@/components/home/process-section";
import { BautraegerTeaser } from "@/components/home/bautraeger-teaser";
import { ManagingDirectors } from "@/components/home/managing-directors";
import { ContactSection } from "@/components/home/contact-section";
import { Logo3D } from "@/components/intros/logo-3d";
import { useIntroTimings } from "@/lib/use-intro-timings";

export default function HomePage() {
  const { timings, ready } = useIntroTimings();
  const [introComplete, setIntroComplete] = useState(false);

  if (!ready) return null;

  return (
    <>
      <Logo3D
        onComplete={() => setIntroComplete(true)}
        holdMs={timings.logoHold}
        exitMs={timings.logoExit}
      />

      <motion.div
        animate={introComplete ? { y: 0 } : { y: timings.contentSlideDistance }}
        transition={{
          duration: timings.contentSlideDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
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
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
