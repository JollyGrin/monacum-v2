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

export function useIntroTimings() {
  const [timings, setTimings] = useState<IntroTimings>(DEFAULT_TIMINGS)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimings(readFromUrl())
    setReady(true)
  }, [])

  return { timings, ready }
}
