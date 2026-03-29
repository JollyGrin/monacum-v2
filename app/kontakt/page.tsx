import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { WhatHappensNext } from "@/components/contact/what-happens-next"

export const metadata: Metadata = {
  title: "Kontakt | Monacum Immobilienverwaltung",
  description: "Kontaktieren Sie Monacum Immobilienverwaltung. Angebot anfragen für WEG-Verwaltung, Miethausverwaltung oder Bauträgerbetreuung in München.",
}

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                Kontakt
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
                Sprechen Sie mit uns
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Sie haben Fragen zu unseren Leistungen oder möchten ein Angebot für Ihre 
                Immobilie erhalten? Füllen Sie das Formular aus oder kontaktieren Sie uns 
                direkt – wir melden uns zeitnah bei Ihnen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <WhatHappensNext />
      </main>
      <Footer />
    </>
  )
}
