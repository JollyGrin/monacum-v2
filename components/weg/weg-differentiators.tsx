import { UserCheck, MessageSquare, FileText, Laptop, Wrench, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const differentiators = [
  {
    icon: UserCheck,
    title: "Persönliche Verantwortung",
    description: "Direkter Kontakt zu den Geschäftsführern. Ihr Anliegen landet nicht in der Warteschleife einer anonymen Sachbearbeitung.",
  },
  {
    icon: MessageSquare,
    title: "Strukturierte Kommunikation",
    description: "Klare Ansprechpartner, definierte Reaktionszeiten und transparente Informationswege für Beiräte und Eigentümer.",
  },
  {
    icon: FileText,
    title: "Transparente Abrechnung",
    description: "Verständliche Wirtschaftspläne und Jahresabrechnungen. Keine versteckten Kosten, keine bösen Überraschungen.",
  },
  {
    icon: Laptop,
    title: "Digitale Organisation",
    description: "Moderne Eigentümerportale für zeitgemäße Kommunikation und transparenten Zugang zu allen relevanten Dokumenten.",
  },
  {
    icon: Wrench,
    title: "Technische Kompetenz",
    description: "Fundiertes Verständnis für Gebäudetechnik, Instandhaltungsplanung und die technischen Anforderungen Ihrer Immobilie.",
  },
  {
    icon: Users,
    title: "Professionelle Versammlungen",
    description: "Sorgfältig vorbereitete und kompetent durchgeführte Eigentümerversammlungen mit rechtssicherer Protokollierung.",
  },
]

export function WEGDifferentiators() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Was uns unterscheidet
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Sechs Gründe, warum Eigentümergemeinschaften Monacum als ihren WEG-Verwalter wählen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <Card key={item.title} className="bg-card/50 border-border">
              <CardContent className="p-8">
                <div className="p-3 rounded-lg bg-primary/10 w-fit">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-medium text-lg text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
