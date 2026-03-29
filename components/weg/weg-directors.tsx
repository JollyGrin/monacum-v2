import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function WEGDirectors() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Ihr direkter Draht zur Geschäftsführung
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Bei Monacum sprechen Sie nicht mit wechselnden Sachbearbeitern, sondern 
              direkt mit den Geschäftsführern. Diese persönliche Betreuung ist unser 
              Versprechen an jeden Mandanten.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Michael Hödl bringt als Immobilienfachwirt mehr als zehn Jahre praktische 
              Erfahrung in der WEG-Verwaltung mit. Er kennt die täglichen Herausforderungen 
              aus der Praxis und ist Ihr kompetenter Ansprechpartner für alle 
              verwaltungsrelevanten Fragen.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Maximilian Reichenbächer ergänzt das Team mit seiner Expertise in Finanzen 
              und Strukturierung. Sein Hintergrund im Bankwesen und der Projektentwicklung 
              macht ihn zum idealen Ansprechpartner für anspruchsvolle Eigentümer- und 
              Investorenstrukturen.
            </p>
            
            <div className="mt-8">
              <Button asChild variant="outline" className="font-medium">
                <Link href="/ueber-uns">
                  Mehr über uns erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] rounded-lg bg-background border border-border flex items-center justify-center">
              <div className="text-center p-4">
                <span className="font-serif text-3xl font-medium text-primary/30">MH</span>
                <p className="mt-2 text-sm text-muted-foreground">Michael Hödl</p>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-lg bg-background border border-border flex items-center justify-center mt-8">
              <div className="text-center p-4">
                <span className="font-serif text-3xl font-medium text-primary/30">MR</span>
                <p className="mt-2 text-sm text-muted-foreground">Maximilian Reichenbächer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
