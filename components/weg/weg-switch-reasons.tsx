const reasons = [
  {
    title: "Mangelnde Erreichbarkeit",
    description: "Der aktuelle Verwalter ist schlecht erreichbar oder reagiert nur mit großer Verzögerung auf Anfragen.",
  },
  {
    title: "Fehlende Transparenz",
    description: "Abrechnungen sind unverständlich, Kosten nicht nachvollziehbar, Informationen werden nur zögerlich geteilt.",
  },
  {
    title: "Anonyme Betreuung",
    description: "Ständig wechselnde Sachbearbeiter, kein persönlicher Ansprechpartner, Gefühl der Massenabfertigung.",
  },
  {
    title: "Technische Vernachlässigung",
    description: "Wartungen werden verschleppt, Instandhaltung nicht vorausschauend geplant, technische Probleme nicht gelöst.",
  },
  {
    title: "Unprofessionelle Versammlungen",
    description: "Schlecht vorbereitete Eigentümerversammlungen, unvollständige Unterlagen, mangelnde Moderation.",
  },
  {
    title: "Wachstumsbedingte Probleme",
    description: "Der Verwalter hat zu viele Objekte übernommen und kann die Qualität nicht mehr halten.",
  },
]

export function WEGSwitchReasons() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Gründe für einen Verwalterwechsel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Viele Eigentümergemeinschaften kommen zu uns, weil sie mit ihrem bisherigen 
            Verwalter unzufrieden sind. Die häufigsten Gründe:
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-6 rounded-lg bg-secondary/50 border border-border/50">
              <h3 className="font-medium text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-lg text-foreground text-center">
            <span className="font-medium">Erkennen Sie Ihre Situation wieder?</span>{" "}
            Ein Verwalterwechsel ist einfacher als gedacht. Wir begleiten Sie durch 
            den gesamten Prozess und sorgen für einen reibungslosen Übergang.
          </p>
        </div>
      </div>
    </section>
  )
}
