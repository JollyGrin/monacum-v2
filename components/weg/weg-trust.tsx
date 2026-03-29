import { Building2, Users, Award, MapPin, Laptop, Network } from "lucide-react"

const trustFactors = [
  {
    icon: Building2,
    value: "1.000+",
    label: "Verwaltete Einheiten in München und Umgebung",
  },
  {
    icon: Users,
    value: "10+",
    label: "Jahre WEG-Erfahrung des Geschäftsführers",
  },
  {
    icon: Award,
    value: "VDIV",
    label: "Mitglied im Verband der Immobilienverwalter",
  },
  {
    icon: MapPin,
    value: "Regional",
    label: "Fokussiert auf München und Umland",
  },
  {
    icon: Laptop,
    value: "Digital",
    label: "Moderne Systeme und Eigentümerportale",
  },
  {
    icon: Network,
    value: "Vernetzt",
    label: "Starkes Partnernetzwerk für alle Gewerke",
  },
]

export function WEGTrust() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Vertrauen durch Kompetenz
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Zahlen und Fakten, die für sich sprechen.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {trustFactors.map((factor) => (
            <div key={factor.label} className="text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <factor.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-4 font-serif text-2xl font-medium text-foreground">
                {factor.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {factor.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
