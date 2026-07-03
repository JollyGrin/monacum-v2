# Technische Datenschutz-Analyse — monacum-immobilien.de

_Stand: 2026-07-03. Ermittelt aus dem Quellcode dieses Repositories (Next.js, Static Export)._

Diese Analyse beantwortet die im Feedback gestellten technischen Fragen zu Hosting,
Formularen, Cookies/Storage und Drittanbieter-Diensten. Sie ist die Grundlage für die
Aktualisierung der Datenschutzerklärung und die Entscheidung über einen Consent-Banner.

---

## 1. Kurzfassung (Final Output)

- **Technologien:** GitHub Pages (statisches Hosting), Next.js 16 als eigenentwickelte,
  statisch exportierte Website (kein CMS/WordPress). Schriften selbst gehostet.
- **Cookies:** Die Website setzt **keine Cookies**.
- **Storage:** **Ein** `sessionStorage`-Eintrag (`monacum-intro-seen`), rein funktional,
  first-party, wird beim Schließen des Browser-Tabs gelöscht.
- **Nicht-essenzieller Drittanbieter-Request:** Auf der Startseite werden die Karten-Kacheln
  der 3D-Hintergrundkarte von **OpenFreeMap** (`tiles.openfreemap.org`) geladen — **vor** einer
  Einwilligung. Das ist der einzige aktive Drittanbieter-Request.
- **Kein** Google Analytics/GA4, GTM, Matomo, Meta/LinkedIn-Pixel, Google Ads,
  Google Maps, reCAPTCHA/hCaptcha/Turnstile, Calendly, Newsletter oder CRM.
- **Casavi:** nur externer Link (`https://casavi.de`), **keine** Einbettung, kein Skript, kein iframe.
- **Consent-Banner:** Technisch aktuell **nur wegen OpenFreeMap** relevant. Zwei saubere Optionen
  siehe Abschnitt 5.

**Klarantwort im gewünschten Format:**
> Non-essential third-party requests are used (map tiles) and load before consent.
> Cookies werden nicht gesetzt; es existiert nur ein technisch notwendiger sessionStorage-Eintrag.

---

## 2. Hosting / Website-Setup

| Frage | Antwort |
|---|---|
| 1.1 Hosting-Provider | **GitHub Pages** (statisches Hosting). Custom Domain `monacum-immobilien.de` via `CNAME`. |
| 1.2 CMS / System | **Kein CMS.** Eigenentwickelte Website mit **Next.js 16** (React 19), als statischer Export (`output: 'export'`) ausgeliefert. |
| 1.3 WordPress-Plugins | Nicht zutreffend (kein WordPress). |
| 1.4 Server-Logs / IP-Speicherung | Von GitHub (Pages/Fastly-CDN) verwaltet — **needs to be checked** bei GitHub. Wir betreiben keinen eigenen Webserver und speichern keine Logs selbst. |

## 3. Kontaktformulare

| Frage | Antwort |
|---|---|
| 2.1 Formularsystem | Eigenes React-Formular (kein Plugin). Dateien: `components/contact/contact-form.tsx`, `components/weg/weg-contact-form.tsx`. |
| 2.2 Erhobene Felder | Name, E-Mail, Telefon, Art der Anfrage, Nachricht sowie je nach Anfrageart: Anzahl Einheiten, aktueller Verwalter, gewünschter Starttermin, Objektart, Unternehmen, Projektstandort/-art, Übergabetermin, Datenschutz-Bestätigung. |
| 2.3 Versand / Speicherung | **Übergangslösung (mailto):** Beim Absenden wird eine vorausgefüllte E-Mail im **eigenen Mailprogramm des Besuchers** geöffnet. Es werden **keine Daten an einen Server übermittelt oder gespeichert**; die Übertragung erfolgt ausschließlich über den vom Besucher genutzten E-Mail-Provider. |
| 2.4 Backend-Speicherung | Kein Backend/keine Datenbank (statische Seite). |
| 2.5 Empfänger-Adresse | `info@monacum-immobilien.de`. |
| 2.6 Drittanbieter beim Versand | **Keiner.** Die mailto-Lösung nutzt keinen externen Formular-Dienst; es entsteht kein zusätzlicher Auftragsverarbeiter. |

## 4. E-Mail / Kommunikation

| Frage | Antwort |
|---|---|
| 3.1 E-Mail-Provider `info@…` | **needs to be checked** (nicht aus dem Website-Code ableitbar — hängt vom MX-Setup der Domain ab). |
| 3.2 SMTP-Plugin auf der Website | Nein. |

## 5. Cookies, Tracking, Consent

| Frage | Antwort |
|---|---|
| 4.1 Cookie-Banner aktuell | Nein, aktuell keiner vorhanden. |
| 4.2 Cookies/Storage | Keine Cookies. Ein `sessionStorage`-Eintrag (siehe Tabelle unten). |
| 4.3 Analytics | Keine aktiv. (`@vercel/analytics` ist als Paket installiert, wird aber **nirgends eingebunden** — inaktiv.) |
| 4.4 Marketing-/Tracking-Pixel | Keine. |
| 4.5 Google Tag Manager | Nein. |

### Cookie-/Storage-Tabelle

| Name | Provider | Zweck | Dauer | Kategorie | Vor Consent geladen? |
|---|---|---|---|---|---|
| `monacum-intro-seen` | Monacum (first-party, sessionStorage) | Merkt sich, dass die Logo-Intro-Animation in dieser Sitzung bereits gezeigt wurde | Session (bis Tab-Schließen) | Notwendig / funktional | ja (technisch notwendig) |

> Es werden **keine Cookies** gesetzt. Der o. g. Eintrag ist kein Cookie, sondern
> Session Storage, first-party und rein funktional.

## 6. Externe Dienste / Third-Party-Requests

| Frage | Antwort |
|---|---|
| 5.1 Google Fonts | Verwendet werden Inter & Playfair Display über `next/font/google`. Diese werden zur **Build-Zeit heruntergeladen und selbst gehostet** — **kein** Request an Google-Server zur Laufzeit. |
| 5.2 Google Maps | Nein. |
| 5.3 Video-Embeds (YouTube/Vimeo) | Nein. |
| 5.4 reCAPTCHA/hCaptcha/Turnstile | Nein. |
| 5.5 Calendly/Booking | Nein. |
| 5.6 Social-Media-Widgets | Nein. |
| 5.7 Externe Skripte | **Ein** aktiver Drittanbieter: **OpenFreeMap** — die MapLibre-Karte auf der Startseite lädt Style, Vektor-Kacheln, Glyphs und Sprites von `https://tiles.openfreemap.org`. Ansonsten nur normale externe Links (u. a. casavi.de). |

### Casavi (Abschnitt 6 der Fragen)

- 6.1 Nur **externer Link** (`https://casavi.de`) im Header/Footer — keine technische Einbettung.
- 6.2 Es werden **keine** personenbezogenen Daten von der Website an Casavi übertragen.
- 6.3 **Kein** Casavi-Skript/Widget/iframe/API auf der Website.

### Newsletter / CRM (Abschnitt 7)

- 7.1 Kein Newsletter-Signup. 7.2 Kein CRM angebunden. 7.3 Keine automatische Lead-Weiterleitung.

## 7. Technische Empfehlung (Abschnitt 8)

- **8.1 Lädt die Seite nicht-essenzielle Cookies/Skripte vor Consent?**
  Cookies: nein. **Skript/Request: ja** — OpenFreeMap-Kartenkacheln auf der Startseite laden
  vor einer Einwilligung. Die Karte ist rein dekorativ (Hintergrund), also nicht technisch
  notwendig.
- **8.2 Was müsste blockiert werden?** Der OpenFreeMap-Request (`tiles.openfreemap.org`) auf der
  Startseite.
- **8.3 Consent-Banner empfohlen?** Zwei saubere Wege:
  1. **Empfohlen – Banner vermeiden:** Die dekorative OpenFreeMap-Karte durch eine
     **lokal gehostete** Grafik/Illustration ersetzen. Danach gibt es **keine**
     nicht-essenziellen Drittanbieter-Requests mehr → **kein Consent-Banner nötig**.
     Einfachste, datensparsamste Lösung.
  2. **Banner mit Blockierung:** OpenFreeMap erst nach Einwilligung laden. Dann ist ein
     Consent-Banner mit Kategorien nötig (Necessary / Analytics / Marketing / External Media),
     wobei aktuell nur „External Media" (Karte) tatsächlich belegt wäre.
- **8.4 Kategorien** (falls Banner): Necessary, Analytics, Marketing, External Media —
  aktuell nur **External Media** in Benutzung.

---

## Offene Punkte, die von Monacum geklärt werden müssen

1. **E-Mail-Versand des Formulars** — aktuell als **mailto-Übergangslösung** umgesetzt (kein
   Drittanbieter). Falls später ein komfortablerer Direktversand gewünscht ist, wäre ein
   Versand-Dienst/eigener Endpoint nötig, der dann als Auftragsverarbeiter in die
   Datenschutzerklärung aufzunehmen wäre.
2. **OpenFreeMap** — die dekorative Karte lädt weiterhin vor Consent (Entscheidung „vorerst so
   belassen"). Für volle Rechtssicherheit später ersetzen (empfohlen) oder hinter Consent-Banner legen.
3. **Hosting-Logs & E-Mail-Provider** — bei GitHub bzw. dem Domain-/Mail-Anbieter erfragen.
