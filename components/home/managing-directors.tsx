import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const directors = [
  {
    name: "Maximilian Reichenbächer",
    description: "Mit einem Background im Bankwesen und einem Master of Science in Finance & Accounting bringt er finanzielle Struktur, analytische Präzision und Verständnis für anspruchsvolle Eigentümer- und Investorenstrukturen in die Verwaltung ein. Seine Erfahrung aus dem Projektentwicklungsumfeld und der Mandantenbetreuung bei einem geschlossenen Fondsverwalter prägt seinen strukturierten Arbeitsansatz.",
    initials: "MR",
  },
  {
    name: "Michael Hödl",
    description: "Als Immobilienfachwirt mit mehr als zehn Jahren Erfahrung in der WEG-Verwaltung ist er der operative Experte im Team. Er bringt fundierte WEG-Expertise, strukturierte Ausführungskompetenz und technische Nähe zur Immobilie mit. Seine langjährige Praxiserfahrung macht ihn zum verlässlichen Ansprechpartner für alle verwaltungsrelevanten Fragen.",
    initials: "MH",
  },
]

export function ManagingDirectors() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Persönlich geführt
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bei Monacum sprechen Sie direkt mit den Geschäftsführern – keine anonyme 
            Sachbearbeitung, sondern persönliche Verantwortung.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {directors.map((director) => (
            <div key={director.name} className="flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-lg bg-secondary border border-border flex items-center justify-center">
                  <span className="font-serif text-2xl font-medium text-primary/60">
                    {director.initials}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {director.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {director.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="font-medium">
            <Link href="/ueber-uns">
              Mehr über uns erfahren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
