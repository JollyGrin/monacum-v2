import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BautraegerTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium tracking-wide text-primary uppercase mb-4">
              Für Bauträger
            </p>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl text-balance">
              Partner für Ihren Projekterfolg
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Als erfahrener Partner begleiten wir Bauträger von der
              Planungsphase bis zur Übergabe an die Eigentümergemeinschaft.
              Unser Geschäftsführer mit Hintergrund im Projektentwicklungsumfeld
              versteht die besonderen Anforderungen dieser Zusammenarbeit.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wir übernehmen die WEG-Erstverwaltung, unterstützen bei der
              Dokumentation und sorgen für einen reibungslosen Übergang in die
              reguläre Verwaltung.
            </p>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-medium"
              >
                <Link href="/bautraeger">
                  Bauträger-Leistungen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
