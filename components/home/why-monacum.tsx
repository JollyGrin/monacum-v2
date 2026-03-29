import { UserCheck, Cpu, Wrench, Shield, Network, FileCheck } from "lucide-react"

const differentiators = [
  {
    icon: UserCheck,
    title: "Persönliche Führung",
    description: "Direkter Kontakt zu den Geschäftsführern – keine anonyme Sachbearbeitung.",
  },
  {
    icon: Cpu,
    title: "Digital organisiert",
    description: "Moderne Systeme für transparente Kommunikation und effiziente Prozesse.",
  },
  {
    icon: Wrench,
    title: "Technische Kompetenz",
    description: "Fundiertes Verständnis für Gebäudetechnik und Instandhaltung.",
  },
  {
    icon: Shield,
    title: "Strukturierte Abläufe",
    description: "Klare Prozesse und dokumentierte Vorgehensweisen für jeden Vorgang.",
  },
  {
    icon: Network,
    title: "Starkes Netzwerk",
    description: "Bewährte Fachpartner und qualifizierte Handwerksbetriebe.",
  },
  {
    icon: FileCheck,
    title: "Qualitätsanspruch",
    description: "Wenige, gut betreute Mandate statt anonymer Massenabfertigung.",
  },
]

export function WhyMonacum() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Warum Monacum?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sechs Gründe, die uns von anderen Hausverwaltungen unterscheiden.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
