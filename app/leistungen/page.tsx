import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building, Home, Key, HardHat } from "lucide-react"

export const metadata: Metadata = {
  title: "Leistungen | Monacum Immobilienverwaltung",
  description: "Umfassende Immobilienverwaltung für München und Umgebung: WEG-Verwaltung, Miethausverwaltung, Sondereigentumsverwaltung und Bauträgerbetreuung.",
}

const services = [
  {
    icon: Building,
    title: "WEG-Verwaltung",
    description: "Professionelle Verwaltung von Wohnungseigentümergemeinschaften. Unser Kerngeschäft mit mehr als zehn Jahren Erfahrung – persönlich, strukturiert und digital organisiert.",
    href: "/weg-verwaltung",
    features: [
      "Eigentümerversammlungen",
      "Wirtschaftspläne & Abrechnungen",
      "Technische Betreuung",
      "Digitale Eigentümerportale",
    ],
    featured: true,
  },
  {
    icon: Home,
    title: "Miethausverwaltung",
    description: "Zuverlässige Verwaltung für Mehrfamilienhäuser und Mietobjekte. Wir kümmern uns um die laufende Bewirtschaftung und die Koordination aller Dienstleister.",
    href: "/leistungen/miethausverwaltung",
    features: [
      "Mietermanagement",
      "Nebenkostenabrechnung",
      "Instandhaltungskoordination",
      "Regelmäßiges Reporting",
    ],
  },
  {
    icon: Key,
    title: "Sondereigentumsverwaltung",
    description: "Entlastung für Eigentümer einzelner Einheiten. Wir übernehmen die laufende Betreuung und sorgen für eine professionelle Abwicklung aller Angelegenheiten.",
    href: "/leistungen/sondereigentumsverwaltung",
    features: [
      "Mieterkommunikation",
      "Vertragsmanagement",
      "Abrechnungserstellung",
      "Schadensabwicklung",
    ],
  },
  {
    icon: HardHat,
    title: "Bauträgerbetreuung",
    description: "Kompetente Begleitung von Bauträgerprojekten bis zur Übergabe an die Eigentümergemeinschaft. Strukturierter Übergang in die reguläre Verwaltung.",
    href: "/bautraeger",
    features: [
      "WEG-Erstverwaltung",
      "Dokumentation",
      "Käuferbetreuung",
      "Übergangsmanagement",
    ],
  },
]

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
                Unsere Leistungen
              </p>
              <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl leading-[1.1] text-balance">
                Immobilienverwaltung aus einer Hand
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Von der WEG-Verwaltung über die Miethausverwaltung bis zur Bauträgerbetreuung – 
                wir bieten spezialisierte Verwaltungsleistungen für unterschiedliche Anforderungen. 
                Immer mit dem gleichen Anspruch an Qualität, Struktur und persönliche Betreuung.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="group">
                  <Card className={`h-full transition-all duration-200 hover:shadow-md ${service.featured ? 'border-primary/30' : ''}`}>
                    <CardContent className="p-8">
                      <div className={`p-3 rounded-lg w-fit ${service.featured ? 'bg-primary/10' : 'bg-secondary'}`}>
                        <service.icon className={`h-6 w-6 ${service.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      
                      <h2 className="mt-6 font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                        {service.featured && (
                          <span className="ml-3 text-xs font-sans font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            Kernkompetenz
                          </span>
                        )}
                      </h2>
                      
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="mt-6 grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <span className="mt-6 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Welche Leistung passt zu Ihnen?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Jede Immobilie ist anders. Lassen Sie uns in einem persönlichen Gespräch 
              herausfinden, wie wir Sie am besten unterstützen können.
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
        </section>
      </main>
      <Footer />
    </>
  )
}
