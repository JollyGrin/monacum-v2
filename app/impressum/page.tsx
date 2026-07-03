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
              Angaben gemäß § 5 DDG
            </h2>
            <address className="not-italic text-muted-foreground leading-relaxed mt-4">
              Monacum Immobilienverwaltung GmbH<br />
              Boschstr. 12<br />
              82178 Puchheim<br />
              Deutschland
            </address>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Vertreten durch die Geschäftsführer
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Michael Werner Hödl<br />
              Maximilian Reichenbächer
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Kontakt
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Telefon: 089 890467430<br />
              E-Mail: info@monacum-immobilien.de
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Registereintrag
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht München<br />
              Registernummer: HRB 296091
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Umsatzsteuer-ID
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE407392777
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Erlaubnis nach § 34c GewO
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Monacum Immobilienverwaltung GmbH verfügt über eine Erlaubnis nach
              § 34c Abs. 1 Satz 1 Nr. 4 GewO als Wohnimmobilienverwalter.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Erlaubnis umfasst die Verwaltung von gemeinschaftlichem Eigentum von
              Wohnungseigentümern sowie die Verwaltung von Mietverhältnissen über
              Wohnräume für Dritte.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Zuständige Aufsichtsbehörde:<br />
              Industrie- und Handelskammer für München und Oberbayern<br />
              Max-Joseph-Straße 2<br />
              80333 München
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Berufsrechtliche Regelungen
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              § 34c Gewerbeordnung (GewO)<br />
              Makler- und Bauträgerverordnung (MaBV)
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die berufsrechtlichen Regelungen sind über die vom Bundesministerium der
              Justiz betriebene Website „Gesetze im Internet" abrufbar.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Verbraucherstreitbeilegung
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Haftung für Inhalte
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur
              Überwachung übermittelter oder gespeicherter fremder Informationen
              besteht nicht. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
              von Informationen nach den allgemeinen Gesetzen bleiben unberührt.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Haftung für Links
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen
              wir keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              Urheberrecht
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              oder sonstige Verwertung außerhalb der Grenzen des Urheberrechts bedarf der
              vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
