"use client"

import { useEffect, useRef } from "react"
import { Pane } from "tweakpane"
import { DEFAULT_TIMINGS, IntroTimings } from "@/lib/use-intro-timings"

type AnyPane = Pane & {
  addBinding: (obj: object, key: string, opts?: object) => { on: (ev: string, cb: (e: { value: number }) => void) => void }
  addButton: (opts: { title: string }) => { on: (ev: string, cb: () => void) => void }
  refresh: () => void
}

interface TimingControlsProps {
  timings: IntroTimings
  onChange: (next: Partial<IntroTimings>) => void
  onReplay: () => void
}

export function TimingControls({ timings, onChange, onReplay }: TimingControlsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const paneRef = useRef<AnyPane | null>(null)
  const stateRef = useRef<IntroTimings>({ ...timings })
  const onChangeRef = useRef(onChange)
  const onReplayRef = useRef(onReplay)
  onChangeRef.current = onChange
  onReplayRef.current = onReplay

  useEffect(() => {
    if (!containerRef.current) return

    const pane = new Pane({ container: containerRef.current, title: "Intro Timings" }) as AnyPane
    paneRef.current = pane
    stateRef.current = { ...timings }

    pane
      .addBinding(stateRef.current, "logoHold", { min: 0, max: 6000, step: 100, label: "Hold (ms)" })
      .on("change", (ev) => onChangeRef.current({ logoHold: ev.value }))

    pane
      .addBinding(stateRef.current, "logoExit", { min: 100, max: 3000, step: 50, label: "Exit (ms)" })
      .on("change", (ev) => onChangeRef.current({ logoExit: ev.value }))

    pane
      .addBinding(stateRef.current, "contentSlideDuration", { min: 0, max: 2000, step: 50, label: "Slide (ms)" })
      .on("change", (ev) => onChangeRef.current({ contentSlideDuration: ev.value }))

    pane
      .addBinding(stateRef.current, "contentSlideDistance", { min: 0, max: 200, step: 1, label: "Slide dist (px)" })
      .on("change", (ev) => onChangeRef.current({ contentSlideDistance: ev.value }))

    pane.addButton({ title: "Replay intro" }).on("click", () => onReplayRef.current())
    pane.addButton({ title: "Reset defaults" }).on("click", () => {
      onChangeRef.current(DEFAULT_TIMINGS)
      Object.assign(stateRef.current, DEFAULT_TIMINGS)
      pane.refresh()
    })

    return () => {
      pane.dispose()
      paneRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!paneRef.current) return
    Object.assign(stateRef.current, timings)
    paneRef.current.refresh()
  }, [timings])

  return (
    <div
      ref={containerRef}
      className="fixed top-4 right-4 z-[200] w-64"
      style={{ fontFamily: "monospace" }}
    />
  )
}
