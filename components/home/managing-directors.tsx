import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const directors = [
  {
    name: "Maximilian Reichenbächer",
    focus: "Finanzen, Strukturierung und Eigentümerbetreuung",
    description:
      "Mit seinem Hintergrund im Finanz- und Immobilienbereich bringt Maximilian Reichenbächer strukturiertes Denken, analytische Stärke und ein gutes Verständnis für Eigentümer- und Investoreninteressen in die Verwaltung ein.",
    initials: "MR",
    image: "/max.webp",
  },
  {
    name: "Michael Hödl",
    focus: "WEG-Verwaltung und Objektbetreuung",
    description:
      "Michael Hödl verfügt über langjährige Erfahrung in der WEG-Verwaltung und bringt umfassende praktische Expertise in die operative Betreuung von Immobilien ein.",
    initials: "MH",
    image: "/michi.webp",
  },
];

export function ManagingDirectors() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% -20%, #2a2318 0%, #1a1612 55%, #0d0b09 100%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: "#D4A96A" }}
          >
            Die Geschäftsführung
          </p>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl text-[#F5EFE3]">
            Persönlich geführt
          </h2>
          <p className="mt-4 text-lg text-[#B5A78F] max-w-2xl mx-auto">
            Bei Monacum sprechen Sie direkt mit den Geschäftsführern – keine
            anonyme Sachbearbeitung, sondern persönliche Verantwortung.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16 max-w-4xl mx-auto">
          {directors.map((director) => (
            <div key={director.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-[#D4A96A]/25">
                <Image
                  src={`${basePath}${director.image}`}
                  alt={`Porträt von ${director.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 28rem, 100vw"
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-[#F5EFE3]">
                {director.name}
              </h3>
              <p
                className="mt-1 text-sm font-medium"
                style={{ color: "#D4A96A" }}
              >
                {director.focus}
              </p>
              <p className="mt-3 text-[#B5A78F] leading-relaxed">
                {director.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button
            asChild
            variant="outline"
            className="font-medium bg-transparent border-[#D4A96A]/50 text-[#F5EFE3] hover:bg-[#D4A96A]/10 hover:text-[#F5EFE3] hover:border-[#D4A96A]"
          >
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
