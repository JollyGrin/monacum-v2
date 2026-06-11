export const NEXT_STEPS = [
  {
    number: "1",
    title: "Prüfung Ihrer Anfrage",
    description:
      "Wir prüfen Ihre Angaben und melden uns innerhalb von zwei Werktagen bei Ihnen.",
  },
  {
    number: "2",
    title: "Persönliches Gespräch",
    description:
      "In einem persönlichen Gespräch klären wir Ihre Anforderungen.",
  },
  {
    number: "3",
    title: "Individuelles Angebot",
    description:
      "Sie erhalten ein transparentes Angebot ohne versteckte Kosten.",
  },
] as const

/** Compact numbered list – for sidebars next to forms and contact info. */
export function NextStepsList() {
  return (
    <ul className="space-y-4">
      {NEXT_STEPS.map((step) => (
        <li key={step.number} className="flex items-start gap-4">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
            {step.number}
          </span>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">{step.title}: </span>
            {step.description}
          </p>
        </li>
      ))}
    </ul>
  )
}

/** Centered three-column variant – for standalone sections. */
export function NextStepsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
      {NEXT_STEPS.map((step) => (
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
  )
}
