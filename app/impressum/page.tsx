import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Impressum | Monacum Immobilienverwaltung",
  description: "Impressum der Monacum Immobilienverwaltung GmbH.",
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground">
            Impressum
          </h1>
          
          <div className="mt-12 prose prose-neutral max-w-none">
            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Angaben gemäß § 5 TMG
            </h2>
            <address className="not-italic text-muted-foreground leading-relaxed mt-4">
              Monacum Immobilienverwaltung GmbH<br />
              Boschstr. 12<br />
              82178 Puchheim
            </address>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Vertreten durch
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Maximilian Reichenbächer<br />
              Michael Hödl
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Kontakt
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Telefon: +49 89 XXX XXX XX<br />
              E-Mail: info@monacum.de
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Registereintrag
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Eintragung im Handelsregister.<br />
              Registergericht: [Registergericht]<br />
              Registernummer: [HRB XXXXX]
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Umsatzsteuer-ID
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              [DE XXXXXXXXX]
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Berufsbezeichnung: Immobilienverwalter<br />
              Zuständige Kammer: IHK für München und Oberbayern
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Streitschlichtung
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) 
              bereit: https://ec.europa.eu/consumers/odr/
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor 
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Haftung für Inhalte
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte 
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
