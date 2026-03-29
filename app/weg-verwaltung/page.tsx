import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WEGHero } from "@/components/weg/weg-hero"
import { WEGIntro } from "@/components/weg/weg-intro"
import { WEGDifferentiators } from "@/components/weg/weg-differentiators"
import { WEGServices } from "@/components/weg/weg-services"
import { WEGSwitchReasons } from "@/components/weg/weg-switch-reasons"
import { WEGTakeover } from "@/components/weg/weg-takeover"
import { WEGTrust } from "@/components/weg/weg-trust"
import { WEGDirectors } from "@/components/weg/weg-directors"
import { WEGTestimonials } from "@/components/weg/weg-testimonials"
import { WEGContactForm } from "@/components/weg/weg-contact-form"

export const metadata: Metadata = {
  title: "WEG-Verwaltung München | Monacum Immobilienverwaltung",
  description: "Professionelle WEG-Verwaltung in München und Umgebung. Persönliche Betreuung, strukturierte Kommunikation, digitale Organisation. Mehr als 10 Jahre Erfahrung.",
  keywords: "WEG-Verwaltung München, Wohnungseigentumsverwaltung, Hausverwaltung WEG, Eigentümergemeinschaft München",
}

export default function WEGVerwaltungPage() {
  return (
    <>
      <Header />
      <main>
        <WEGHero />
        <WEGIntro />
        <WEGDifferentiators />
        <WEGServices />
        <WEGSwitchReasons />
        <WEGTakeover />
        <WEGTrust />
        <WEGDirectors />
        <WEGTestimonials />
        <WEGContactForm />
      </main>
      <Footer />
    </>
  )
}
