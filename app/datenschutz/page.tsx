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
            <p className="text-muted-foreground leading-relaxed mt-4">
              Mit dieser Datenschutzerklärung informieren wir Sie darüber,
              welche personenbezogenen Daten beim Besuch dieser Website
              verarbeitet werden, zu welchen Zwecken dies geschieht und welche
              Rechte Ihnen nach der Datenschutz-Grundverordnung (DSGVO) und dem
              Gesetz über den Datenschutz und den Schutz der Privatsphäre in
              der Telekommunikation und bei digitalen Diensten (TDDDG)
              zustehen.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              1. Verantwortlicher
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Verantwortlicher im Sinne der DSGVO ist:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Monacum Immobilienverwaltung GmbH<br />
              Boschstr. 12<br />
              82178 Puchheim<br />
              Deutschland
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Vertreten durch die Geschäftsführer Michael Werner Hödl und
              Maximilian Reichenbächer.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Telefon: 089 890467430<br />
              E-Mail: info@monacum-immobilien.de
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              2. Überblick: Datensparsame Website
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Website ist bewusst datensparsam gestaltet. Sie setzt{" "}
              <strong className="text-foreground font-medium">keine Cookies</strong>{" "}
              und verwendet{" "}
              <strong className="text-foreground font-medium">
                keine Analyse- oder Tracking-Tools, keine Marketing-Pixel,
                keinen Newsletter und kein CRM-System
              </strong>
              . Schriften werden lokal von unserem Hosting ausgeliefert; es
              findet kein Abruf bei Google Fonts oder anderen
              Schriftenanbietern statt. Der einzige Inhalt eines
              Drittanbieters – die Kartendarstellung auf der Startseite – wird
              erst nach Ihrer ausdrücklichen Einwilligung geladen (siehe
              Ziffer 7).
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              3. Hosting (GitHub Pages)
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Website wird als statische Website über GitHub Pages
              bereitgestellt, einen Dienst der GitHub Inc., 88 Colin P Kelly
              Jr St, San Francisco, CA 94107, USA. Wir betreiben keinen
              eigenen Webserver und speichern selbst keine Zugriffsdaten.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Beim Aufruf der Website verarbeitet GitHub (bzw. das von GitHub
              eingesetzte Content Delivery Network) technisch bedingt
              Verbindungsdaten wie Ihre IP-Adresse, Datum und Uhrzeit des
              Zugriffs, die aufgerufene Seite sowie Browser- und
              Betriebssysteminformationen (Server-Logs). Diese Verarbeitung
              ist für die Auslieferung und die Sicherheit der Website
              erforderlich. Rechtsgrundlage ist unser berechtigtes Interesse
              an einer sicheren und effizienten Bereitstellung der Website
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              GitHub verarbeitet Daten dabei auch in den USA. GitHub Inc. ist
              unter dem EU-US Data Privacy Framework zertifiziert; die
              Übermittlung in dieses Drittland ist damit auf Grundlage des
              Angemessenheitsbeschlusses der Europäischen Kommission (Art. 45
              DSGVO) zulässig. Weitere Informationen finden Sie in der
              Datenschutzerklärung von GitHub unter
              https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              4. SSL-/TLS-Verschlüsselung
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-
              Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile Ihres Browsers von „http://" auf
              „https://" wechselt, sowie am Schloss-Symbol in der
              Browserzeile. Bei aktivierter Verschlüsselung können Daten, die
              Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              5. Cookies, Local Storage und Session Storage
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Website setzt keine Cookies. Es werden lediglich zwei
              funktionale Einträge im Speicher Ihres Browsers abgelegt – beide
              first-party, ohne Übermittlung an uns oder Dritte:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground font-medium">
                „monacum-intro-seen" (Session Storage):
              </strong>{" "}
              merkt sich, dass die Logo-Intro-Animation in der laufenden
              Sitzung bereits gezeigt wurde, und wird beim Schließen des
              Browser-Tabs automatisch gelöscht. Dieser Eintrag ist für den
              von Ihnen gewünschten Dienst technisch erforderlich; eine
              Einwilligung ist gemäß § 25 Abs. 2 Nr. 2 TDDDG nicht
              erforderlich.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground font-medium">
                „monacum-consent" (Local Storage):
              </strong>{" "}
              speichert Ihre Auswahl im Consent-Banner (siehe Ziffer 6), damit
              wir Ihre Entscheidung bei weiteren Besuchen respektieren können.
              Auch dieser Eintrag ist funktional erforderlich und
              einwilligungsfrei (§ 25 Abs. 2 Nr. 2 TDDDG); es wird dabei kein
              Cookie gesetzt.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              6. Einwilligungsverwaltung (Consent-Banner)
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Beim ersten Besuch der Website erscheint ein Banner, mit dem Sie
              über das Laden nicht notwendiger Inhalte entscheiden können. Die
              Kategorien Analytics und Marketing sind derzeit nicht belegt –
              entsprechende Dienste setzen wir nicht ein. Aktuell betrifft
              Ihre Entscheidung ausschließlich die Kategorie „Externe Medien"
              (Kartendarstellung, Ziffer 7). Ihre Auswahl wird ausschließlich
              lokal in Ihrem Browser gespeichert (siehe Ziffer 5) und nicht an
              uns übermittelt. Sie können Ihre Einwilligung jederzeit mit
              Wirkung für die Zukunft widerrufen oder Ihre Auswahl ändern,
              indem Sie den Link „Cookie-Einstellungen" im Footer der Website
              aufrufen.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              7. Kartendarstellung (OpenFreeMap)
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Auf der Startseite kann als Hintergrund eine interaktive Karte
              von München angezeigt werden. Die Kartendaten (Kartenstil,
              Vektor-Kacheln, Schriften und Symbole) werden dabei vom offenen
              Kartendienst OpenFreeMap (tiles.openfreemap.org) geladen. Beim
              Laden der Karte wird Ihre IP-Adresse technisch bedingt an die
              Server von OpenFreeMap übermittelt.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Karte wird erst geladen, nachdem Sie im Consent-Banner in
              die Kategorie „Externe Medien" eingewilligt haben. Bis dahin
              wird eine lokal erzeugte, anfragefreie Hintergrundgrafik
              angezeigt. Rechtsgrundlage für die Verarbeitung ist Ihre
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
              Sie können Ihre Einwilligung jederzeit mit Wirkung für die
              Zukunft über den Link „Cookie-Einstellungen" im Footer
              widerrufen; die Karte wird dann nicht mehr geladen.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              8. Kontaktaufnahme
            </h2>
            <h3 className="font-medium text-foreground mt-6">
              Kontaktformulare (mailto-Verfahren)
            </h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Die Kontaktformulare auf dieser Website arbeiten nach dem
              sogenannten mailto-Verfahren: Beim Absenden öffnet sich Ihr
              eigenes E-Mail-Programm mit einer vorausgefüllten Nachricht an
              info@monacum-immobilien.de. Es werden{" "}
              <strong className="text-foreground font-medium">
                keine Daten an unsere Server oder an Drittanbieter übermittelt
                oder dort gespeichert
              </strong>
              ; die Website verfügt über kein Backend und keine Datenbank. Die
              Übertragung erfolgt ausschließlich über den von Ihnen genutzten
              E-Mail-Anbieter. Eine Verarbeitung durch uns beginnt erst, wenn
              Ihre E-Mail bei uns eingeht.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Je nach Art Ihrer Anfrage können die Formulare folgende Angaben
              vorbereiten: Name, E-Mail-Adresse, Telefonnummer, Art der
              Anfrage und Ihre Nachricht sowie optional z. B. Anzahl der
              Einheiten, aktueller Verwalter, gewünschter Starttermin,
              Objektart, Unternehmen, Projektstandort und -art oder
              Übergabetermin. Die mit * gekennzeichneten Angaben sind
              erforderlich, damit wir Ihre Anfrage bearbeiten können.
            </p>
            <h3 className="font-medium text-foreground mt-6">
              Anfragen per E-Mail oder Telefon
            </h3>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten
              wir die von Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten,
              Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens und für
              mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. b DSGVO, soweit Ihre Anfrage mit der Anbahnung oder
              Erfüllung eines Vertrags zusammenhängt, im Übrigen unser
              berechtigtes Interesse an der Beantwortung an uns gerichteter
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wir speichern Ihre Anfragedaten, bis die Bearbeitung
              abgeschlossen ist und keine Anschlussfragen mehr zu erwarten
              sind. Kommt es zu einem Vertragsverhältnis, bewahren wir die
              Korrespondenz im Rahmen der gesetzlichen Aufbewahrungsfristen
              (insbesondere aus Handels- und Steuerrecht, bis zu zehn Jahre)
              auf. Gesetzliche Pflichten zur Aufbewahrung bleiben unberührt.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              9. Schriften (lokal gehostet)
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Diese Website verwendet die Schriftarten Inter und Playfair
              Display. Die Schriftdateien werden beim Erstellen der Website
              eingebunden und von unserem Hosting selbst ausgeliefert. Beim
              Besuch der Website findet{" "}
              <strong className="text-foreground font-medium">
                kein Abruf bei Google Fonts oder anderen externen
                Schriftenanbietern
              </strong>{" "}
              statt; es werden dadurch keine Daten an Dritte übermittelt.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              10. Keine Analyse-, Tracking- und Marketing-Dienste
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wir setzen auf dieser Website ausdrücklich{" "}
              <strong className="text-foreground font-medium">
                keine Analyse- oder Statistik-Tools
              </strong>{" "}
              (etwa Google Analytics oder Matomo),{" "}
              <strong className="text-foreground font-medium">
                keine Marketing- oder Tracking-Pixel
              </strong>
              , keinen Google Tag Manager, keinen Newsletter-Versand und kein
              CRM-System ein. Es findet keine Erstellung von Nutzungsprofilen
              statt.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Das Kundenportal Casavi ist auf dieser Website ausschließlich
              als externer Link eingebunden. Es werden keine Skripte oder
              Inhalte von Casavi auf unserer Website geladen und keine Daten
              von dieser Website an Casavi übertragen. Erst wenn Sie dem Link
              folgen, gilt die Datenschutzerklärung des dortigen Anbieters.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              11. Ihre Rechte
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten
              folgende Rechte zu:
            </p>
            <ul className="text-muted-foreground leading-relaxed mt-4 list-disc pl-6 space-y-2">
              <li>Auskunft über die verarbeiteten Daten (Art. 15 DSGVO),</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO),</li>
              <li>
                Einschränkung der Verarbeitung (Art. 18 DSGVO),
              </li>
              <li>
                Datenübertragbarkeit, d. h. Erhalt Ihrer Daten in einem
                strukturierten, gängigen und maschinenlesbaren Format
                (Art. 20 DSGVO),
              </li>
              <li>
                Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft
                (Art. 7 Abs. 3 DSGVO); die Rechtmäßigkeit der bis zum Widerruf
                erfolgten Verarbeitung bleibt unberührt.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground font-medium">
                Widerspruchsrecht (Art. 21 DSGVO):
              </strong>{" "}
              Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse) verarbeiten, haben Sie das Recht, aus
              Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit Widerspruch gegen diese Verarbeitung einzulegen.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an
              info@monacum-immobilien.de.
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              12. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu
              beschweren (Art. 77 DSGVO). Für uns zuständig ist:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              www.lda.bayern.de
            </p>

            <h2 className="font-serif text-xl font-medium text-foreground mt-8">
              13. Stand dieser Datenschutzerklärung
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Stand: Juli 2026. Wir passen diese Datenschutzerklärung an,
              sobald sich der technische Aufbau der Website oder die
              rechtlichen Anforderungen ändern.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
