// First-party consent state, persisted in localStorage (no cookie).
// Components communicate via window events so the banner, the footer link
// and consent-gated content stay in sync without a shared provider.

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "externalMedia"

export interface ConsentState {
  necessary: true
  analytics: boolean
  marketing: boolean
  externalMedia: boolean
  updatedAt: string
}

export const CONSENT_STORAGE_KEY = "monacum-consent"
export const CONSENT_CHANGED_EVENT = "monacum:consent-changed"
export const CONSENT_OPEN_EVENT = "monacum:consent-open"

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed !== "object" || parsed === null) return null
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      externalMedia: parsed.externalMedia === true,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    }
  } catch {
    return null
  }
}

export function storeConsent(
  choices: Pick<ConsentState, "analytics" | "marketing" | "externalMedia">
): ConsentState {
  const state: ConsentState = {
    necessary: true,
    ...choices,
    updatedAt: new Date().toISOString(),
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage unavailable (e.g. blocked) – consent then only lasts for this view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: state }))
  return state
}

export function openConsentSettings() {
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT))
}
