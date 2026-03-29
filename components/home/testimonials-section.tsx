import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Der Wechsel zu Monacum war die beste Entscheidung für unsere WEG. Endlich haben wir einen Verwalter, der erreichbar ist und unsere Anliegen ernst nimmt.",
    attribution: "Beirat einer WEG, München",
  },
  {
    quote: "Professionell, strukturiert und immer ansprechbar. Die digitale Organisation macht vieles einfacher als bei unserem vorherigen Verwalter.",
    attribution: "Beiratsvorsitzender einer WEG, Puchheim",
  },
  {
    quote: "Als Investor schätze ich die finanzielle Kompetenz und die klare Kommunikation. Monacum versteht die Anforderungen anspruchsvoller Mandanten.",
    attribution: "Eigentümer eines Bestandsobjekts, München Umland",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Das sagen unsere Mandanten
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <p className="mt-6 text-sm text-muted-foreground">
                  — {testimonial.attribution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
