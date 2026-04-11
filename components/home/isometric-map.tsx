"use client"

import { useEffect, useRef, useState } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

export function IsometricMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<maplibregl.Map | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!mapContainer.current || map.current) return
    const munichCenter: [number, number] = [11.576, 48.137]

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/bright",
      center: munichCenter,
      zoom: 16,
      pitch: 60,
      bearing: -20,
      interactive: false,
      attributionControl: false,
      canvasContextAttributes: { antialias: true },
    })

    // Suppress missing image warnings with transparent placeholder
    map.current.on("styleimagemissing", (e) => {
      if (!map.current) return
      try {
        if (!map.current.hasImage(e.id)) {
          map.current.addImage(e.id, {
            width: 1,
            height: 1,
            data: new Uint8Array([0, 0, 0, 0])
          })
        }
      } catch {
        // Ignore - map may not be ready
      }
    })

    map.current.once("idle", () => {
      if (!map.current) return

      try {
        const style = map.current.getStyle()
        if (!style || !style.sources) {
          setLoaded(true)
          return
        }

        // Dynamically find the vector source name
        const sourceNames = Object.keys(style.sources)
        const vectorSource = sourceNames.find(name => {
          const source = style.sources?.[name]
          return source && 'type' in source && source.type === 'vector'
        })

        if (!vectorSource) {
          setLoaded(true)
          return
        }

        const layers = style.layers || []
        let labelLayerId: string | undefined
        for (const layer of layers) {
          if (layer.type === "symbol" && layer.layout?.["text-field"]) {
            labelLayerId = layer.id
            break
          }
        }

        // Hide all labels to keep the map clean
        for (const layer of layers) {
          if (layer.type === "symbol" && map.current) {
            try {
              map.current.setLayoutProperty(layer.id, "visibility", "none")
            } catch {
              // Ignore individual layer errors
            }
          }
        }

        // Add 3D buildings with warm tan colors
        if (!map.current) return
        map.current.addLayer(
        {
          id: "3d-buildings",
          source: vectorSource,
          "source-layer": "building",
          type: "fill-extrusion",
          minzoom: 14,
          filter: ["all", ["has", "render_height"], ["has", "render_min_height"]],
          paint: {
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "render_height"],
              0, "#F0E5D4",
              20, "#D4A96A",
              50, "#C6A57A",
            ],
            "fill-extrusion-height": ["get", "render_height"],
            "fill-extrusion-base": ["get", "render_min_height"],
            "fill-extrusion-opacity": 0.9,
          },
        },
        labelLayerId
      )

      let startTimestamp: number | null = null
      const initialBearing = -20

      function rotateCamera(timestamp: number) {
        if (!map.current) {
          animationFrameRef.current = null
          return
        }
        try {
          const mapInstance = map.current
          if (mapInstance.isStyleLoaded() && mapInstance.getStyle() && mapInstance.loaded()) {
            if (startTimestamp === null) startTimestamp = timestamp
            const elapsed = timestamp - startTimestamp
            mapInstance.rotateTo(initialBearing + (elapsed / 1000) * 3, { duration: 0 })
          }
          animationFrameRef.current = requestAnimationFrame(rotateCamera)
        } catch {
          animationFrameRef.current = null
        }
      }

        if (map.current) {
          animationFrameRef.current = requestAnimationFrame(rotateCamera)
        }
        setLoaded(true)
      } catch {
        setLoaded(true)
      }
    })

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={mapContainer}
        className="absolute inset-0 h-full w-full"
        style={{ minHeight: "100%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      {!loaded && <div className="absolute inset-0 animate-pulse bg-secondary/50" />}
    </div>
  )
}
