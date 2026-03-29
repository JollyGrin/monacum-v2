"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const versions = [
  { id: "none", label: "No Intro", href: "/" },
  { id: "v1", label: "Blueprint Reveal", href: "/v1" },
  { id: "v2", label: "Golden Curtain", href: "/v2" },
  { id: "v3", label: "Skyline Build", href: "/v3" },
  { id: "v4", label: "Monogram Unfold", href: "/v4" },
  { id: "v5", label: "Perspective Shift", href: "/v5" },
  { id: "v6", label: "3D Logo Spin", href: "/v6" },
  { id: "v7", label: "3D Zoom Through", href: "/v7" },
  { id: "v8", label: "3D Golden Reveal", href: "/v8" },
]

export function IntroVersionSwitcher() {
  const pathname = usePathname()
  
  const currentVersion = versions.find(v => pathname === v.href) || versions[0]

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-foreground/95 backdrop-blur-sm border-b border-border/30">
      <div className="flex items-center justify-center gap-1 py-2 px-4">
        <span className="text-xs text-background/70 mr-3 hidden sm:inline">Intro Animations:</span>
        {versions.map((version) => (
          <Link
            key={version.id}
            href={version.href}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-full transition-colors",
              currentVersion.id === version.id
                ? "bg-primary text-primary-foreground"
                : "text-background/70 hover:text-background hover:bg-background/10"
            )}
          >
            {version.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
