"use client"

import { MapPin } from "lucide-react"
import { openConsentSettings } from "@/lib/consent"

// Local, request-free stand-in for the OpenFreeMap hero backdrop,
// shown until the visitor consents to external media. Mirrors the
// warm gradient the map component uses when WebGL is unavailable.
export function MapConsentFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 75% 40%, oklch(0.92 0.03 75) 0%, oklch(0.95 0.015 80) 45%, oklch(0.985 0.008 85) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <button
        type="button"
        onClick={openConsentSettings}
        className="absolute bottom-6 right-6 z-10 hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-4 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <MapPin className="h-3.5 w-3.5" />
        Karte aktivieren (externe Medien)
      </button>
    </div>
  )
}
