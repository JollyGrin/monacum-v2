import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Sprechen Sie mit uns
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sie haben Fragen zu unseren Leistungen oder möchten ein Angebot für Ihre 
              Immobilie erhalten? Wir freuen uns auf Ihre Anfrage und melden uns zeitnah 
              bei Ihnen.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-secondary">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Adresse</h3>
                  <p className="mt-1 text-muted-foreground">
                    Boschstr. 12<br />
                    82178 Puchheim
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-secondary">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Telefon</h3>
                  <p className="mt-1 text-muted-foreground">
                    <a href="tel:+4989XXXXXXXX" className="hover:text-foreground transition-colors">
                      +49 89 XXX XXX XX
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-secondary">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">E-Mail</h3>
                  <p className="mt-1 text-muted-foreground">
                    <a href="mailto:info@monacum.de" className="hover:text-foreground transition-colors">
                      info@monacum.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="font-medium">
                <Link href="/kontakt">
                  Angebot anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-lg p-8 lg:p-12 border border-border">
            <h3 className="font-serif text-xl font-medium text-foreground">
              Was passiert nach Ihrer Anfrage?
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                  1
                </span>
                <p className="text-muted-foreground">
                  Wir prüfen Ihre Anfrage und melden uns innerhalb von zwei Werktagen.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                  2
                </span>
                <p className="text-muted-foreground">
                  In einem persönlichen Gespräch klären wir Ihre Anforderungen.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                  3
                </span>
                <p className="text-muted-foreground">
                  Sie erhalten ein individuelles Angebot ohne versteckte Kosten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
