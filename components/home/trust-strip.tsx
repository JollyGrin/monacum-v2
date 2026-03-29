import { Building2, Users, Award, Laptop } from "lucide-react"

const trustItems = [
  {
    icon: Building2,
    value: "1.000+",
    label: "Verwaltete Einheiten",
  },
  {
    icon: Users,
    value: "10+",
    label: "Jahre Erfahrung je Geschäftsführer",
  },
  {
    icon: Award,
    value: "VDIV",
    label: "Mitglied im Verband",
  },
  {
    icon: Laptop,
    value: "Digital",
    label: "Organisiert & strukturiert",
  },
]

export function TrustStrip() {
  return (
    <section className="bg-secondary/50 border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <item.icon className="h-6 w-6 text-primary mb-3" />
              <span className="font-serif text-2xl font-medium text-foreground">
                {item.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
