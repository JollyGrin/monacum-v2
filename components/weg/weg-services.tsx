import { CheckCircle2 } from "lucide-react"

const serviceCategories = [
  {
    title: "Kaufmännische Verwaltung",
    services: [
      "Erstellung und Überwachung des Wirtschaftsplans",
      "Jahresabrechnung nach WEG-Recht",
      "Führung der Bankkonten und Zahlungsverkehr",
      "Mahnwesen und Forderungsmanagement",
      "Verwaltung der Instandhaltungsrücklage",
      "Regelmäßige Berichterstattung an den Beirat",
    ],
  },
  {
    title: "Technische Verwaltung",
    services: [
      "Regelmäßige Objektbegehungen",
      "Koordination von Wartungs- und Instandhaltungsarbeiten",
      "Einholung und Vergleich von Angeboten",
      "Überwachung von Handwerkerleistungen",
      "Planung größerer Instandsetzungsmaßnahmen",
      "Begleitung bei Bauvorhaben und Sanierungen",
    ],
  },
  {
    title: "Organisatorische Verwaltung",
    services: [
      "Vorbereitung und Durchführung der Eigentümerversammlung",
      "Rechtssichere Protokollierung von Beschlüssen",
      "Führung der Beschluss-Sammlung",
      "Kommunikation mit Eigentümern und Mietern",
      "Bearbeitung von Versicherungsfällen",
      "Digitales Dokumentenmanagement",
    ],
  },
]

export function WEGServices() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Unser Leistungsumfang
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Umfassende WEG-Verwaltung aus einer Hand – von der kaufmännischen Betreuung 
            bis zur technischen Objektverwaltung.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-serif text-xl font-medium text-foreground pb-4 border-b border-border">
                {category.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {category.services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
