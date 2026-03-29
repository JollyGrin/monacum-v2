import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, UserCheck, Laptop, Wrench, FileText, Phone, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Miethausverwaltung München | Monacum Immobilienverwaltung",
  description: "Professionelle Miethausverwaltung in München und Umgebung. Zuverlässige Bewirtschaftung, strukturierte Prozesse, persönliche Betreuung.",
}

const services = [
  {
    title: "Kaufmännische Verwaltung",
    items: [
      "Mietinkasso und Mahnwesen",
      "Betriebs- und Nebenkostenabrechnung",
      "Zahlungsverkehr und Buchhaltung",
      "Kautionsverwaltung",
      "Regelmäßiges Eigentümer-Reporting",
      "Budgetplanung und Liquiditätssteuerung",
    ],
  },
  {
    title: "Technische Verwaltung",
    items: [
      "Regelmäßige Objektbegehungen",
      "Koordination von Wartungen und Reparaturen",
      "Einholung und Vergleich von Angeboten",
      "Überwachung von Handwerkerleistungen",
      "Instandhaltungsplanung",
      "Schlüsselmanagement",
    ],
  },
  {
    title: "Mietermanagement",
    items: [
      "Ansprechpartner für Mieteranliegen",
      "Bearbeitung von Mängelmeldungen",
      "Organisation von Wohnungsübergaben",
      "Protokollierung bei Ein- und Auszug",
      "Konfliktmoderation",
      "Abwicklung bei Mieterwechsel",
    ],
  },
]

const differentiators = [
  {
    icon: UserCheck,
    title: "Persönliche Betreuung",
    description: "Direkter Kontakt zu den Geschäftsführern statt anonymer Hotline.",
  },
  {
    icon: Laptop,
    title: "Digitale Prozesse",
    description: "Effiziente Verwaltung mit modernen Tools und transparentem Reporting.",
  },
  {
    icon: Wrench,
    title: "Technische Kompetenz",
    description: "Fundiertes Verständnis für Gebäudetechnik und Instandhaltung.",
  },
  {
    icon: FileText,
    title: "Transparente Abrechnung",
    description: "Nachvollziehbare Abrechnungen und klare Kostenübersichten.",
  },
  {
    icon: Phone,
    title: "Zuverlässige Erreichbarkeit",
    description: "Schnelle Reaktion auf Anfragen von Eigentümern und Mietern.",
  },
  {
    icon: BarChart3,
    title: "Strukturiertes Reporting",
    description: "Regelmäßige Berichte über die Entwicklung Ihrer Immobilie.",
  },
]

export default function MiethausverwaltungPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                Miethausverwaltung
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
                Zuverlässige Verwaltung für Ihre Mietimmobilie
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Als Eigentümer eines Mehrfamilienhauses wünschen Sie sich einen Partner, 
                der sich um die laufende Bewirtschaftung kümmert – strukturiert, zuverlässig 
                und mit einem offenen Ohr für Ihre Anliegen.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="font-medium">
                  <Link href="/kontakt">
                    Angebot anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Mehr als nur Verwaltung
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Die Miethausverwaltung ist mehr als die Summe einzelner Aufgaben. Es geht 
                darum, den Wert Ihrer Immobilie zu erhalten und zu entwickeln, ein gutes 
                Verhältnis zu den Mietern zu pflegen und gleichzeitig wirtschaftlich sinnvoll 
                zu handeln. Bei Monacum verstehen wir diese Zusammenhänge und agieren 
                entsprechend.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Unser Leistungsspektrum
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {services.map((category) => (
                <div key={category.title}>
                  <h3 className="font-serif text-xl font-medium text-foreground pb-4 border-b border-border">
                    {category.title}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Was uns auszeichnet
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item) => (
                <Card key={item.title} className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Interesse an einer Zusammenarbeit?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Erzählen Sie uns von Ihrer Immobilie. Wir erstellen Ihnen gerne ein 
                individuelles Angebot – unverbindlich und kostenfrei.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="font-medium">
                  <Link href="/kontakt">
                    Angebot anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
