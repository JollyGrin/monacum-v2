"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConsentFor } from "@/hooks/use-consent";
import { MapConsentFallback } from "./map-consent-fallback";

// maplibre-gl is heavy – load it after the critical content.
const IsometricMap = dynamic(
  () => import("./isometric-map").then((m) => m.IsometricMap),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 animate-pulse bg-secondary/50" />
    ),
  }
);

export function HeroSection() {
  // The map loads tiles from tiles.openfreemap.org – it must not mount
  // before the visitor consents to external media (§ 25 Abs. 1 TDDDG).
  const hasMapConsent = useConsentFor("externalMedia");

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Isometric 3D map background – consent-gated */}
      {hasMapConsent ? <IsometricMap /> : <MapConsentFallback />}

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 z-10">
        <div className="max-w-3xl">
          <h1 lang="de" className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance hyphens-auto break-words">
            Ihr Immobilienwert in verantwortungsvollen Händen
          </h1>

          <p lang="de" className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl hyphens-auto break-words">
            Immobilienverwaltung mit Verantwortung, Struktur und persönlichem
            Ansprechpartner. Für WEGs, Eigentümer und Bauträger in München und
            Umgebung.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/kontakt">
                Angebot anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-medium bg-background/80 backdrop-blur-sm"
            >
              <Link href="/weg-verwaltung">WEG-Verwaltung entdecken</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent z-10" />
    </section>
  );
}
