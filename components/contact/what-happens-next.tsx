export function WhatHappensNext() {
  const steps = [
    {
      number: "1",
      title: "Prüfung Ihrer Anfrage",
      description: "Wir sichten Ihre Angaben und bereiten uns auf das Gespräch vor.",
    },
    {
      number: "2",
      title: "Persönlicher Kontakt",
      description: "Innerhalb von zwei Werktagen melden wir uns bei Ihnen – telefonisch oder per E-Mail.",
    },
    {
      number: "3",
      title: "Individuelles Angebot",
      description: "Nach Klärung aller Details erhalten Sie ein transparentes Angebot ohne versteckte Kosten.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Was passiert nach Ihrer Anfrage?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ein strukturierter Prozess für eine fundierte Entscheidung.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-serif text-xl font-medium text-primary">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
