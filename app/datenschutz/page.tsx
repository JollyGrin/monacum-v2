import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutz | Monacum Immobilienverwaltung",
  description: "Datenschutzerklärung der Monacum Immobilienverwaltung GmbH.",
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground">
            Datenschutzerklärung
          </h1>
          
          <div className="mt-12 prose prose-neutral max-w-none">
            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              1. Datenschutz auf einen Blick
            </h2>
            
            <h3 className="font-medium text-foreground mt-6">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="font-medium text-foreground mt-6">Datenerfassung auf dieser Website</h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="font-medium text-foreground mt-6">Datenschutz</h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="font-medium text-foreground mt-6">Verantwortliche Stelle</h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Monacum Immobilienverwaltung GmbH<br />
              Boschstr. 12<br />
              82178 Puchheim<br /><br />
              Telefon: +49 89 XXX XXX XX<br />
              E-Mail: info@monacum.de
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-medium text-foreground mt-6">Kontaktformular</h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
              Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>

            <h3 className="font-medium text-foreground mt-6">Anfrage per E-Mail oder Telefon</h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive 
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke 
              der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              4. Ihre Rechte
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
              und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
              außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie 
              diese Einwilligung jederzeit für die Zukunft widerrufen.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
              <em>
                Hinweis: Diese Datenschutzerklärung ist ein Platzhalter. Für den produktiven 
                Einsatz muss eine vollständige, rechtskonforme Datenschutzerklärung erstellt 
                werden.
              </em>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
