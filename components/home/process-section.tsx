const steps = [
  {
    number: "01",
    title: "Erstkontakt",
    description: "Sie nehmen Kontakt mit uns auf und schildern Ihre Situation. Wir klären erste Fragen und vereinbaren ein persönliches Gespräch.",
  },
  {
    number: "02",
    title: "Bedarfsanalyse",
    description: "In einem ausführlichen Gespräch lernen wir Ihre Immobilie und Ihre Anforderungen kennen. Wir prüfen, ob eine Zusammenarbeit für beide Seiten sinnvoll ist.",
  },
  {
    number: "03",
    title: "Angebot",
    description: "Sie erhalten ein individuelles Angebot, das transparent alle Leistungen und Konditionen aufführt – ohne versteckte Kosten.",
  },
  {
    number: "04",
    title: "Übernahme",
    description: "Nach Beauftragung organisieren wir einen strukturierten Übernahmeprozess und übernehmen alle relevanten Unterlagen vom Vorverwalter.",
  },
  {
    number: "05",
    title: "Betreuung",
    description: "Ab diesem Zeitpunkt sind wir Ihr zuverlässiger Partner für alle Verwaltungsangelegenheiten – persönlich erreichbar und professionell organisiert.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            So beginnt die Zusammenarbeit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein strukturierter Prozess für einen reibungslosen Start – von der ersten 
            Anfrage bis zur vollständigen Betreuung.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-border hidden lg:block" />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-secondary border border-border">
                    <span className="font-serif text-xl font-medium text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
