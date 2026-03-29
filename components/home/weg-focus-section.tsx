import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const wegBenefits = [
  "Erfahrene WEG-Verwalter mit mehr als 10 Jahren Praxiserfahrung",
  "Klare Ansprechpartner für Beiräte und Eigentümer",
  "Professionelle Vorbereitung und Durchführung von Eigentümerversammlungen",
  "Transparente Abrechnung und strukturierte Dokumentation",
  "Digitale Eigentümerportale für zeitgemäße Kommunikation",
  "Reibungsloser Übernahmeprozess bei Verwalterwechsel",
]

export function WEGFocusSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-primary uppercase mb-4">
              Unser Schwerpunkt
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              WEG-Verwaltung auf höchstem Niveau
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Die Verwaltung von Wohnungseigentümergemeinschaften ist unsere Kernkompetenz. 
              Wir verstehen die besonderen Anforderungen, die sich aus der Struktur einer 
              WEG ergeben, und bieten Lösungen, die Eigentümern, Beiräten und Bewohnern 
              gleichermaßen zugutekommen.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mit einem Geschäftsführer, der mehr als ein Jahrzehnt Erfahrung in der 
              WEG-Verwaltung mitbringt, sind wir Ihr Partner für anspruchsvolle 
              Eigentümergemeinschaften.
            </p>

            <ul className="mt-8 space-y-3">
              {wegBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button asChild size="lg" className="font-medium">
                <Link href="/weg-verwaltung">
                  WEG-Verwaltung im Detail
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-secondary/50 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-serif text-6xl font-medium text-primary/20">WEG</p>
                  <p className="mt-2 text-sm text-muted-foreground">Verwaltung mit Kompetenz</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
