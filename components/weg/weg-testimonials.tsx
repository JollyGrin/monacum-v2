import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Nach Jahren mit einem Großverwalter war der Wechsel zu Monacum wie ein Befreiungsschlag. Endlich ein Verwalter, der erreichbar ist und unsere Anliegen ernst nimmt. Die Qualität der Betreuung hat sich spürbar verbessert.",
    attribution: "Beiratsvorsitzender einer WEG, München-Schwabing",
  },
  {
    quote: "Die Eigentümerversammlungen sind heute professionell vorbereitet und strukturiert durchgeführt. Die Unterlagen kommen pünktlich, die Abrechnung ist verständlich. So stellen wir uns eine gute Verwaltung vor.",
    attribution: "Beirat einer WEG, Puchheim",
  },
]

export function WEGTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Das sagen unsere WEG-Mandanten
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/50 border-border">
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
