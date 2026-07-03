import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/components/faq/faq-data"

export function FaqSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              FAQ
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Antworten auf typische Fragen rund um unsere Immobilienverwaltung.
            </p>
          </div>
        )}

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="font-serif text-base font-medium text-foreground sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <p className="text-lg text-muted-foreground">
            Gerne beraten wir Sie persönlich zu Ihrer Immobilie oder
            Eigentümergemeinschaft.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="font-medium">
              <Link href="/kontakt">
                Jetzt Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
