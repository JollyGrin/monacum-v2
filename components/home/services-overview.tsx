import Link from "next/link"
import { ArrowRight, Building, Home, Key, HardHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building,
    title: "WEG-Verwaltung",
    description: "Professionelle Verwaltung von Wohnungseigentümergemeinschaften mit strukturierter Kommunikation und persönlicher Betreuung.",
    href: "/weg-verwaltung",
    featured: true,
  },
  {
    icon: Home,
    title: "Miethausverwaltung",
    description: "Zuverlässige Mietverwaltung für Mehrfamilienhäuser mit koordinierter Dienstleistersteuerung und technischer Überwachung.",
    href: "/leistungen/miethausverwaltung",
  },
  {
    icon: Key,
    title: "Sondereigentumsverwaltung",
    description: "Entlastung für Eigentümer einzelner Einheiten durch professionelle Betreuung und strukturierte Abwicklung.",
    href: "/leistungen/sondereigentumsverwaltung",
  },
  {
    icon: HardHat,
    title: "Bauträgerbetreuung",
    description: "Kompetente Begleitung von Bauträgerprojekten mit strukturiertem Übergang in die Verwaltung.",
    href: "/bautraeger",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Spezialisierte Verwaltungsleistungen für unterschiedliche Anforderungen – 
            immer mit dem gleichen Anspruch an Qualität und Zuverlässigkeit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className={`h-full transition-all duration-200 hover:shadow-md ${service.featured ? 'border-primary/30 bg-card' : 'bg-card/50'}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${service.featured ? 'bg-primary/10' : 'bg-secondary'}`}>
                      <service.icon className={`h-6 w-6 ${service.featured ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                        {service.featured && (
                          <span className="ml-2 text-xs font-sans font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                            Kernkompetenz
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Mehr erfahren
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
