import { NextStepsGrid } from "@/components/shared/next-steps"

export function WhatHappensNext() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Was passiert nach Ihrer Anfrage?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ein strukturierter Prozess für eine fundierte Entscheidung.
          </p>
        </div>

        <NextStepsGrid />
      </div>
    </section>
  )
}
