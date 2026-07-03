import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq/faq-section"
import { FAQ_ITEMS } from "@/components/faq/faq-data"

export const metadata: Metadata = {
  title: "FAQ | Monacum Immobilienverwaltung",
  description:
    "Antworten auf typische Fragen rund um unsere Immobilienverwaltung: Jahresabrechnung, Verwalterwechsel, Eigentümerversammlung, Notfälle und mehr.",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-20 lg:pt-28 bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
              Häufige Fragen
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
              FAQ
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Antworten auf typische Fragen rund um unsere Immobilienverwaltung.
            </p>
          </div>
        </section>

        <FaqSection showHeader={false} />
      </main>
      <Footer />
    </>
  )
}
