"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  CONSENT_OPEN_EVENT,
  getStoredConsent,
  storeConsent,
} from "@/lib/consent"

interface CategoryChoices {
  analytics: boolean
  marketing: boolean
  externalMedia: boolean
}

const CATEGORIES: Array<{
  key: keyof CategoryChoices | "necessary"
  label: string
  description: string
}> = [
  {
    key: "necessary",
    label: "Notwendig",
    description:
      "Für den Betrieb der Website erforderlich, z. B. das Speichern Ihrer Cookie-Einstellungen. Es werden keine Cookies gesetzt.",
  },
  {
    key: "analytics",
    label: "Analytics",
    description:
      "Derzeit nicht im Einsatz – wir verwenden keine Analyse- oder Statistik-Tools.",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Derzeit nicht im Einsatz – wir verwenden keine Marketing- oder Werbedienste.",
  },
  {
    key: "externalMedia",
    label: "Externe Medien",
    description:
      "Interaktive Karte auf der Startseite (OpenFreeMap). Beim Laden wird Ihre IP-Adresse an tiles.openfreemap.org übermittelt.",
  },
]

export function ConsentBanner() {
  const [open, setOpen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [choices, setChoices] = useState<CategoryChoices>({
    analytics: false,
    marketing: false,
    externalMedia: false,
  })
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (getStoredConsent() === null) {
      setOpen(true)
    }

    const onOpenSettings = () => {
      const stored = getStoredConsent()
      setChoices({
        analytics: stored?.analytics ?? false,
        marketing: stored?.marketing ?? false,
        externalMedia: stored?.externalMedia ?? false,
      })
      setShowSettings(true)
      setOpen(true)
    }
    window.addEventListener(CONSENT_OPEN_EVENT, onOpenSettings)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpenSettings)
  }, [])

  useEffect(() => {
    if (open) dialogRef.current?.focus()
  }, [open, showSettings])

  const close = useCallback(() => {
    setOpen(false)
    setShowSettings(false)
  }, [])

  const acceptAll = () => {
    storeConsent({ analytics: true, marketing: true, externalMedia: true })
    close()
  }

  const declineAll = () => {
    storeConsent({ analytics: false, marketing: false, externalMedia: false })
    close()
  }

  const saveSelection = () => {
    storeConsent(choices)
    close()
  }

  if (!open) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-banner-title"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") close()
      }}
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 outline-none"
    >
      <div className="mx-auto max-w-2xl rounded-lg border border-border bg-background shadow-lg">
        <div className="p-6">
          <h2
            id="consent-banner-title"
            className="font-serif text-lg font-medium text-foreground"
          >
            Datenschutz-Einstellungen
          </h2>

          {!showSettings ? (
            <>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Diese Website setzt keine Cookies und verwendet keine
                Tracking-Tools. Nur die interaktive Karte auf der Startseite
                lädt Inhalte eines externen Anbieters (OpenFreeMap) – das
                geschieht erst, wenn Sie „Externe Medien" zustimmen. Ihre
                Auswahl speichern wir lokal in Ihrem Browser und Sie können sie
                jederzeit über „Cookie-Einstellungen" im Footer ändern.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 font-medium"
                  onClick={acceptAll}
                >
                  Alle akzeptieren
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 font-medium"
                  onClick={declineAll}
                >
                  Ablehnen
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Einstellungen anpassen
                </button>
                <Link
                  href="/datenschutz"
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Datenschutzerklärung
                </Link>
                <Link
                  href="/impressum"
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Impressum
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Wählen Sie, welche Kategorien Sie zulassen möchten. Notwendige
                Funktionen sind immer aktiv, damit die Website funktioniert.
              </p>
              <ul className="mt-5 flex flex-col divide-y divide-border">
                {CATEGORIES.map((category) => {
                  const isNecessary = category.key === "necessary"
                  const checked = isNecessary
                    ? true
                    : choices[category.key as keyof CategoryChoices]
                  return (
                    <li
                      key={category.key}
                      className="flex items-start justify-between gap-4 py-3"
                    >
                      <div>
                        <label
                          htmlFor={`consent-${category.key}`}
                          className="text-sm font-medium text-foreground"
                        >
                          {category.label}
                        </label>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <Switch
                        id={`consent-${category.key}`}
                        checked={checked}
                        disabled={isNecessary}
                        aria-label={category.label}
                        onCheckedChange={(value) => {
                          if (isNecessary) return
                          setChoices((prev) => ({
                            ...prev,
                            [category.key]: value === true,
                          }))
                        }}
                        className="mt-0.5 shrink-0"
                      />
                    </li>
                  )
                })}
              </ul>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 font-medium"
                  onClick={acceptAll}
                >
                  Alle akzeptieren
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 font-medium"
                  onClick={declineAll}
                >
                  Ablehnen
                </Button>
                <Button
                  size="lg"
                  className="flex-1 font-medium"
                  onClick={saveSelection}
                >
                  Auswahl speichern
                </Button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <Link
                  href="/datenschutz"
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Datenschutzerklärung
                </Link>
                <Link
                  href="/impressum"
                  className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Impressum
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
