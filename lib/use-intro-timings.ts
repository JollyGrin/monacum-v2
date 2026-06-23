"use client"

import { useEffect, useState } from "react"

export interface IntroTimings {
  logoHold: number
  logoExit: number
  contentSlideDuration: number
  contentSlideDistance: number
}

export const DEFAULT_TIMINGS: IntroTimings = {
  logoHold: 2500,
  logoExit: 900,
  contentSlideDuration: 500,
  contentSlideDistance: 20,
}

function readFromUrl(): IntroTimings {
  if (typeof window === "undefined") return DEFAULT_TIMINGS
  const p = new URLSearchParams(window.location.search)
  const n = (key: string, fallback: number) => {
    const v = p.get(key)
    if (v === null) return fallback
    const parsed = Number(v)
    return Number.isFinite(parsed) ? parsed : fallback
  }
  return {
    logoHold: n("hold", DEFAULT_TIMINGS.logoHold),
    logoExit: n("exit", DEFAULT_TIMINGS.logoExit),
    contentSlideDuration: n("slide", DEFAULT_TIMINGS.contentSlideDuration),
    contentSlideDistance: n("dist", DEFAULT_TIMINGS.contentSlideDistance),
  }
}

const INTRO_SEEN_KEY = "monacum-intro-seen"

function readShouldPlay(): boolean {
  if (typeof window === "undefined") return false
  // Explicit timing params force a replay (used for tuning the intro).
  const params = new URLSearchParams(window.location.search)
  const forced = ["hold", "exit", "slide", "dist", "intro"].some((k) =>
    params.has(k)
  )
  if (forced) return true
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false
  }
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === null
  } catch {
    return true
  }
}

export function useIntroTimings() {
  const [timings, setTimings] = useState<IntroTimings>(DEFAULT_TIMINGS)
  const [ready, setReady] = useState(false)
  const [shouldPlay, setShouldPlay] = useState(false)

  useEffect(() => {
    setTimings(readFromUrl())
    const play = readShouldPlay()
    setShouldPlay(play)
    if (play) {
      try {
        sessionStorage.setItem(INTRO_SEEN_KEY, "1")
      } catch {
        // Private mode without storage – intro will just replay.
      }
    }
    setReady(true)
  }, [])

  return { timings, ready, shouldPlay }
}
