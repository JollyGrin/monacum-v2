"use client"

import { useEffect, useState } from "react"
import {
  CONSENT_CHANGED_EVENT,
  CONSENT_STORAGE_KEY,
  getStoredConsent,
  type ConsentCategory,
  type ConsentState,
} from "@/lib/consent"

// Reads the stored consent and re-renders whenever it changes –
// via the banner (custom event) or another tab (storage event).
export function useConsent(): ConsentState | null {
  const [consent, setConsent] = useState<ConsentState | null>(null)

  useEffect(() => {
    setConsent(getStoredConsent())

    const sync = () => setConsent(getStoredConsent())
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_STORAGE_KEY || e.key === null) sync()
    }
    window.addEventListener(CONSENT_CHANGED_EVENT, sync)
    window.addEventListener("storage", onStorage)
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, sync)
      window.removeEventListener("storage", onStorage)
    }
  }, [])

  return consent
}

export function useConsentFor(category: ConsentCategory): boolean {
  const consent = useConsent()
  if (category === "necessary") return true
  return consent?.[category] === true
}
