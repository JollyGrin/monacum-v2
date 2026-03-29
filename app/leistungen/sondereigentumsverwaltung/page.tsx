import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, User, Building, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Sondereigentumsverwaltung München | Monacum Immobilienverwaltung",
  description: "Professionelle Sondereigentumsverwaltung in München. Entlastung für Eigentümer einzelner Einheiten durch strukturierte Betreuung und zuverlässige Abwicklung.",
}

const services = [
  "Kommunikation mit Mietern und Interessenten",
  "Koordination mit der WEG-Verwaltung",
  "Bearbeitung von Mängelmeldungen",
  "Organisation von Reparaturen im Sondereigentum",
  "Erstellung der jährlichen Nebenkostenabrechnung",
  "Betreuung bei Mieterwechsel und Wohnungsübergaben",
  "Kautionsverwaltung",
  "Mietinkasso und Mahnwesen",
  "Abwicklung von Versicherungsfällen",
  "Dokumentenmanagement",
]

const targetGroups = [
  {
    icon: User,
    title: "Privateigentümer",
    description: "Sie besitzen eine oder mehrere Eigentumswohnungen und möchten sich nicht um die tägliche Verwaltung kümmern. Wir entlasten Sie von allen operativen Aufgaben.",
  },
  {
    icon: Building,
    title: "Investoren",
    description: "Als Investor mit mehreren Einheiten in verschiedenen WEGs profitieren Sie von einer einheitlichen und professionellen Betreuung aller Ihrer Objekte.",
  },
  {
    icon: Briefcase,
    title: "Erbengemeinschaften",
    description: "Bei komplexen Eigentümerstrukturen übernehmen wir die neutrale Verwaltung und sorgen für eine saubere Abrechnung gegenüber allen Beteiligten.",
  },
]

export default function SondereigentumsverwaltungPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                Sondereigentumsverwaltung
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
                Ihre Wohnung in professionellen Händen
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Sie besitzen eine vermietete Eigentumswohnung und wünschen sich Entlastung 
                bei der laufenden Verwaltung? Wir übernehmen die professionelle Betreuung 
                Ihres Sondereigentums – strukturiert, zuverlässig und persönlich.
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
                Fokus auf Ihr Sondereigentum
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Während die WEG-Verwaltung sich um das Gemeinschaftseigentum kümmert, 
                liegt die Verantwortung für Ihr Sondereigentum bei Ihnen. Mieterkommunikation, 
                Nebenkostenabrechnung, Koordination von Reparaturen – all das erfordert Zeit 
                und Fachwissen. Mit unserer Sondereigentumsverwaltung nehmen wir Ihnen diese 
                Aufgaben ab.
              </p>
            </div>
          </div>
        </section>

        {/* Target Groups */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Für wen ist unsere Sondereigentumsverwaltung?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {targetGroups.map((group) => (
                <Card key={group.title} className="bg-card/50 border-border">
                  <CardContent className="p-8">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit">
                      <group.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-6 font-medium text-lg text-foreground">{group.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{group.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  Unser Leistungsumfang
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Von der Mieterkommunikation bis zur Nebenkostenabrechnung – wir übernehmen 
                  alle verwaltungsrelevanten Aufgaben rund um Ihr Sondereigentum.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-8 border border-border">
                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Entlastung für Eigentümer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Konzentrieren Sie sich auf das Wesentliche – wir kümmern uns um die 
                Verwaltung Ihres Sondereigentums. Fragen Sie jetzt ein unverbindliches 
                Angebot an.
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
