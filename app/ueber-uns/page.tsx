import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Award, Laptop, Network, Building2, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns | Monacum Immobilienverwaltung",
  description: "Lernen Sie Monacum kennen: Persönlich geführte Immobilienverwaltung in München. Maximilian Reichenbächer und Michael Hödl - Erfahrung, Struktur und Qualität.",
}

const directors = [
  {
    name: "Maximilian Reichenbächer",
    initials: "MR",
    background: [
      "Master of Science in Finance & Accounting",
      "Hintergrund im Bankwesen",
      "Erfahrung im Projektentwicklungsumfeld",
      "Mandantenbetreuung bei einem geschlossenen Fondsverwalter",
    ],
    focus: "Finanzielle Struktur, analytische Präzision und Verständnis für anspruchsvolle Eigentümer- und Investorenstrukturen.",
    description: "Mit seinem Background im Bankwesen und der Projektentwicklung bringt Maximilian Reichenbächer eine einzigartige Perspektive in die Immobilienverwaltung ein. Seine Erfahrung in der Betreuung anspruchsvoller Mandanten prägt den hohen Qualitätsanspruch von Monacum.",
  },
  {
    name: "Michael Hödl",
    initials: "MH",
    background: [
      "Immobilienfachwirt (IHK)",
      "Mehr als 10 Jahre Erfahrung in der WEG-Verwaltung",
      "Fundierte Praxis in allen Verwaltungsbereichen",
      "Technische Expertise und Objektnähe",
    ],
    focus: "Operative WEG-Expertise, strukturierte Ausführungskompetenz und technische Nähe zur Immobilie.",
    description: "Als erfahrener Immobilienfachwirt kennt Michael Hödl die täglichen Herausforderungen der WEG-Verwaltung aus der Praxis. Seine langjährige Erfahrung macht ihn zum verlässlichen Ansprechpartner für alle verwaltungsrelevanten Fragen.",
  },
]

const values = [
  {
    icon: Users,
    title: "Persönliche Führung",
    description: "Bei Monacum sprechen Sie direkt mit den Geschäftsführern. Keine anonyme Sachbearbeitung, sondern persönliche Verantwortung.",
  },
  {
    icon: Award,
    title: "Qualität vor Quantität",
    description: "Wir wachsen bewusst und kontrolliert. Jedes Mandat erhält die Aufmerksamkeit, die es verdient.",
  },
  {
    icon: Laptop,
    title: "Digital organisiert",
    description: "Moderne Systeme und strukturierte Prozesse ermöglichen effiziente Verwaltung und transparente Kommunikation.",
  },
  {
    icon: Network,
    title: "Starkes Netzwerk",
    description: "Über Jahre aufgebaute Partnerschaften mit qualifizierten Handwerkern und Fachleuten in der Region.",
  },
  {
    icon: Building2,
    title: "Technisches Verständnis",
    description: "Fundiertes Wissen über Gebäudetechnik und Instandhaltung – wir verstehen Ihre Immobilie.",
  },
  {
    icon: MapPin,
    title: "Regionale Verwurzelung",
    description: "Fokussiert auf München und ausgewählte Umlandgemeinden. Wir kennen die Region und ihre Besonderheiten.",
  },
]

const facts = [
  { value: "1.000+", label: "Verwaltete Einheiten" },
  { value: "10+", label: "Jahre Erfahrung je GF" },
  { value: "2", label: "Geschäftsführer" },
  { value: "VDIV", label: "Verbandsmitglied" },
]

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                Über Monacum
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
                Persönlich geführt. Professionell organisiert.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Monacum steht für eine neue Generation der Immobilienverwaltung: Wir 
                verbinden die Vorteile einer persönlich geführten Verwaltung mit modernen 
                Prozessen und digitaler Organisation. Kein Mittelweg zwischen Masse und 
                Qualität – bei uns steht Qualität an erster Stelle.
              </p>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="py-12 bg-secondary/50 border-y border-border/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="text-center">
                  <p className="font-serif text-3xl font-medium text-foreground">{fact.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directors */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Die Geschäftsführung
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Zwei Experten mit komplementären Stärken – vereint im Anspruch, 
                Immobilienverwaltung besser zu machen.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {directors.map((director) => (
                <Card key={director.name} className="bg-card border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-secondary flex items-center justify-center py-12 md:py-0">
                        <span className="font-serif text-5xl font-medium text-primary/30">
                          {director.initials}
                        </span>
                      </div>
                      <div className="flex-1 p-8">
                        <h3 className="font-serif text-2xl font-medium text-foreground">
                          {director.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-primary">
                          {director.focus}
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {director.description}
                        </p>
                        <ul className="mt-6 space-y-2">
                          {director.background.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Wofür wir stehen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Die Prinzipien, die unsere Arbeit leiten.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-background border border-border">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{value.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Mitgliedschaften
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Monacum ist Mitglied im VDIV Bayern (Verband der Immobilienverwalter) 
                und bei Haus & Grund München. Diese Mitgliedschaften unterstreichen 
                unseren Anspruch an Professionalität und halten uns auf dem neuesten 
                Stand der rechtlichen und fachlichen Entwicklungen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Lernen Sie uns kennen
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir freuen uns auf ein persönliches Gespräch. Erzählen Sie uns von 
                Ihrer Immobilie und Ihren Anforderungen – gemeinsam finden wir heraus, 
                ob wir zueinander passen.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="font-medium">
                  <Link href="/kontakt">
                    Kontakt aufnehmen
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
