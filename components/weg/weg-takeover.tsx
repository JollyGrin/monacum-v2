const takeoverSteps = [
  {
    number: "01",
    title: "Beschlussfassung",
    description: "Die Eigentümerversammlung beschließt die Bestellung von Monacum als neuen Verwalter. Wir unterstützen Sie bei der Vorbereitung der entsprechenden Tagesordnungspunkte.",
  },
  {
    number: "02",
    title: "Vertragsgestaltung",
    description: "Wir erstellen einen transparenten Verwaltervertrag, der alle Leistungen und Konditionen klar regelt. Keine versteckten Kosten, keine Überraschungen.",
  },
  {
    number: "03",
    title: "Unterlagenübernahme",
    description: "Wir fordern alle relevanten Unterlagen vom Vorverwalter an und prüfen diese sorgfältig. Fehlende Dokumente werden systematisch angefordert.",
  },
  {
    number: "04",
    title: "Kontenumstellung",
    description: "Die Bankkonten der WEG werden auf die neue Verwaltung umgestellt. Wir sorgen für einen lückenlosen Übergang aller Zahlungsströme.",
  },
  {
    number: "05",
    title: "Vertragsanalyse",
    description: "Alle bestehenden Verträge (Versicherungen, Wartung, Dienstleister) werden geprüft und bei Bedarf optimiert.",
  },
  {
    number: "06",
    title: "Vollständige Betreuung",
    description: "Nach Abschluss der Übernahme starten wir mit der regulären Verwaltungstätigkeit und sind ab sofort Ihr Ansprechpartner für alle Belange.",
  },
]

export function WEGTakeover() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Der Übernahmeprozess
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein strukturierter Ablauf für einen reibungslosen Verwalterwechsel – 
            von der Beschlussfassung bis zur vollständigen Betreuung.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {takeoverSteps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <span className="font-serif text-3xl font-medium text-primary/30">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
