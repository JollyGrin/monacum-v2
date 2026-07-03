"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
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
import { ManagingDirectors } from "@/components/home/managing-directors";
import { FaqSection } from "@/components/faq/faq-section";
import { ContactSection } from "@/components/home/contact-section";
import { useIntroTimings } from "@/lib/use-intro-timings";

// Loaded on demand so three.js stays out of the initial bundle –
// especially for returning visitors who never see the intro.
const Logo3D = dynamic(
  () => import("@/components/intros/logo-3d").then((m) => m.Logo3D),
  { ssr: false }
);

export default function HomePage() {
  const { timings, ready, shouldPlay } = useIntroTimings();
  const [introComplete, setIntroComplete] = useState(false);

  if (!ready) return null;

  const contentSettled = introComplete || !shouldPlay;

  return (
    <>
      {shouldPlay && (
        <Logo3D
          onComplete={() => setIntroComplete(true)}
          holdMs={timings.logoHold}
          exitMs={timings.logoExit}
        />
      )}

      <motion.div
        initial={false}
        animate={contentSettled ? { y: 0 } : { y: timings.contentSlideDistance }}
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
          <ManagingDirectors />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
