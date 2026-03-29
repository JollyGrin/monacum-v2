import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function WEGHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
            WEG-Verwaltung
          </p>
          
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Professionelle Verwaltung für Ihre Eigentümergemeinschaft
          </h1>
          
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Persönlich geführt, digital organisiert, fachlich kompetent – WEG-Verwaltung, 
            die den Unterschied macht. Für Eigentümergemeinschaften in München und 
            ausgewählten Umlandgemeinden.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="#anfrage">
                Angebot anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="#leistungen">
                Leistungsumfang
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
