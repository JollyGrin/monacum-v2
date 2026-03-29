import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, FileText, Users, ClipboardCheck, Building2, Calendar, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Bauträgerbetreuung München | Monacum Immobilienverwaltung",
  description: "Professionelle Begleitung für Bauträger in München. WEG-Erstverwaltung, strukturierter Übergang, Käuferbetreuung. Erfahrung aus dem Projektentwicklungsumfeld.",
}

const services = [
  {
    icon: FileText,
    title: "WEG-Erstverwaltung",
    description: "Übernahme der Verwaltung ab Teilungserklärung und Gründung der WEG. Strukturierte Aufstellung aller notwendigen Prozesse.",
  },
  {
    icon: Users,
    title: "Käuferbetreuung",
    description: "Professioneller Ansprechpartner für Erwerber während und nach der Übergabephase. Kompetente Beantwortung aller verwaltungsrelevanten Fragen.",
  },
  {
    icon: ClipboardCheck,
    title: "Dokumentation",
    description: "Strukturierte Erfassung und Verwaltung aller relevanten Unterlagen. Grundlage für eine langfristig erfolgreiche Verwaltung.",
  },
  {
    icon: Building2,
    title: "Übergangsmanagement",
    description: "Begleitung des Übergangs von der Bauträgerphase in die reguläre WEG-Struktur. Vorbereitung der ersten Eigentümerversammlung.",
  },
  {
    icon: Calendar,
    title: "Gewährleistungsmanagement",
    description: "Systematische Erfassung und Nachverfolgung von Mängeln. Koordination mit dem Bauträger während der Gewährleistungsphase.",
  },
  {
    icon: Shield,
    title: "Instandhaltungsrücklage",
    description: "Aufbau einer angemessenen Rücklage von Beginn an. Fundierte Empfehlungen basierend auf dem Gebäudestandard.",
  },
]

const benefits = [
  "Erfahrung aus dem Projektentwicklungsumfeld",
  "Verständnis für die Anforderungen von Bauträgern",
  "Professionelle Kommunikation mit anspruchsvollen Käufern",
  "Strukturierte Prozesse von Tag eins",
  "Langfristige Partnerschaft über die Bauträgerphase hinaus",
  "Digitale Organisation und transparente Dokumentation",
]

const processSteps = [
  {
    number: "01",
    title: "Projektvorstellung",
    description: "Sie stellen uns Ihr Bauvorhaben vor. Wir prüfen, ob eine Zusammenarbeit für beide Seiten sinnvoll ist.",
  },
  {
    number: "02",
    title: "Vertragsgestaltung",
    description: "Wir erarbeiten gemeinsam die Konditionen für die WEG-Erstverwaltung und klären alle Details.",
  },
  {
    number: "03",
    title: "Vorbereitungsphase",
    description: "Noch vor Fertigstellung bereiten wir alle Strukturen vor: Konten, Verträge, digitale Systeme.",
  },
  {
    number: "04",
    title: "Aktive Betreuung",
    description: "Ab Gründung der WEG übernehmen wir die vollständige Verwaltung und sind Ansprechpartner für alle Beteiligten.",
  },
  {
    number: "05",
    title: "Übergang zur WEG",
    description: "Nach Ende der Bauträgerphase begleiten wir den nahtlosen Übergang in die reguläre WEG-Verwaltung.",
  },
]

export default function BautraegerPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                Für Bauträger
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
                Ihr Partner für den erfolgreichen Projektabschluss
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Als Bauträger wissen Sie: Die Übergabe an die Eigentümer und die Gründung 
                der WEG sind kritische Phasen. Mit der richtigen Verwaltung an Ihrer Seite 
                gelingt dieser Übergang reibungslos – und Ihre Käufer sind von Anfang an 
                gut betreut.
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
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  Erfahrung, die zählt
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Unser Geschäftsführer Maximilian Reichenbächer bringt Erfahrung aus dem 
                  Projektentwicklungsumfeld mit. Er versteht die Anforderungen, die Bauträger 
                  an eine professionelle Verwaltung stellen – von der strukturierten 
                  Dokumentation bis zur kompetenten Betreuung anspruchsvoller Käufer.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Diese Perspektive macht uns zu einem idealen Partner für Bauträgerprojekte 
                  in München und Umgebung.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-medium text-foreground mb-6">Warum Monacum?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Unsere Leistungen für Bauträger
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Von der WEG-Gründung bis zur regulären Verwaltung – wir begleiten Sie 
                durch alle Phasen.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="bg-card/50 border-border">
                  <CardContent className="p-8">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-6 font-medium text-lg text-foreground">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                So arbeiten wir zusammen
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-3xl font-medium text-primary/30">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                Planen Sie ein Bauvorhaben?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Sprechen Sie mit uns über Ihr Projekt. Wir erläutern Ihnen gerne, wie 
                wir Sie bei der WEG-Erstverwaltung unterstützen können – frühzeitige 
                Planung zahlt sich aus.
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
