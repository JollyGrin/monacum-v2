import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const siteUrl = "https://monacum-immobilien.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/weg-verwaltung", priority: 0.9 },
    { path: "/leistungen", priority: 0.8 },
    { path: "/leistungen/miethausverwaltung", priority: 0.7 },
    { path: "/leistungen/sondereigentumsverwaltung", priority: 0.7 },
    { path: "/bautraeger", priority: 0.7 },
    { path: "/ueber-uns", priority: 0.6 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/impressum", priority: 0.1 },
    { path: "/datenschutz", priority: 0.1 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }))
}
