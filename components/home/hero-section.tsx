import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { IsometricMap } from "./isometric-map"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Isometric 3D map background */}
      <IsometricMap />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-primary uppercase mb-6">
            Immobilienverwaltung München
          </p>
          
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
            Ihr Immobilienwert in verantwortungsvollen Händen
          </h1>
          
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Premium Immobilienverwaltung für München und ausgewählte Umlandgemeinden. 
            Persönlich geführt, digital organisiert, fachlich kompetent.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/kontakt">
                Angebot anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium bg-background/80 backdrop-blur-sm">
              <Link href="/weg-verwaltung">
                WEG-Verwaltung entdecken
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
    </section>
  )
}
