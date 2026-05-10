import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const directors = [
  {
    name: "Maximilian Reichenbächer",
    description:
      "Mit seinem Hintergrund im Finanz- und Immobilienbereich bringt Maximilian Reichenbächer strukturiertes Denken, analytische Stärke und ein gutes Verständnis für Eigentümer- und Investoreninteressen in die Verwaltung ein.",
    initials: "MR",
    image: "/max.jpg",
  },
  {
    name: "Michael Hödl",
    description:
      "Michael Hödl verfügt über langjährige Erfahrung in der WEG-Verwaltung und bringt umfassende praktische Expertise in die operative Betreuung von Immobilien ein.",
    initials: "MH",
    image: "/michi.jpg",
  },
];

export function ManagingDirectors() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Persönlich geführt
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bei Monacum sprechen Sie direkt mit den Geschäftsführern – keine
            anonyme Sachbearbeitung, sondern persönliche Verantwortung.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {directors.map((director) => (
            <div
              key={director.name}
              className="flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-lg border border-border overflow-hidden">
                  <Image
                    src={`${basePath}${director.image}`}
                    alt={director.name}
                    width={224}
                    height={224}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {director.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {director.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="font-medium">
            <Link href="/ueber-uns">
              Mehr über uns erfahren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
