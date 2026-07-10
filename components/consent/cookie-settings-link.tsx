"use client"

import { openConsentSettings } from "@/lib/consent"

// Footer link that reopens the consent banner so visitors can
// change or withdraw their choice at any time.
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie-Einstellungen
    </button>
  )
}
