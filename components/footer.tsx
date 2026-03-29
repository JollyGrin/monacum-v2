import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "WEG-Verwaltung", href: "/weg-verwaltung" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Bauträger", href: "/bautraeger" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
]

const serviceNavigation = [
  { name: "WEG-Verwaltung", href: "/weg-verwaltung" },
  { name: "Miethausverwaltung", href: "/leistungen/miethausverwaltung" },
  { name: "Sondereigentumsverwaltung", href: "/leistungen/sondereigentumsverwaltung" },
  { name: "Bauträgerbetreuung", href: "/bautraeger" },
]

const legalNavigation = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/monacum-logo.png"
                alt="Monacum Immobilien"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                Monacum
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Immobilienverwaltung
            </p>
            <address className="mt-6 not-italic text-sm text-muted-foreground leading-relaxed">
              Boschstr. 12<br />
              82178 Puchheim<br />
              <span className="mt-4 block">
                Tel: <a href="tel:+4989XXXXXXXX" className="hover:text-foreground transition-colors">+49 89 XXX XXX XX</a>
              </span>
              <span className="block">
                E-Mail: <a href="mailto:info@monacum.de" className="hover:text-foreground transition-colors">info@monacum.de</a>
              </span>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Leistungen</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & External */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Rechtliches</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {legalNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://casavi.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Casavi Login
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground">Mitgliedschaften</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                VDIV Bayern<br />
                Haus & Grund München
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Monacum Immobilienverwaltung. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
