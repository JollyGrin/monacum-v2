import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-medium text-foreground">
        Kontaktinformationen
      </h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Erreichen Sie uns telefonisch, per E-Mail oder besuchen Sie uns in unserem 
        Büro in Puchheim.
      </p>

      <div className="mt-10 space-y-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-lg bg-card border border-border">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Adresse</h3>
            <address className="mt-1 not-italic text-muted-foreground leading-relaxed">
              Monacum Immobilienverwaltung<br />
              Boschstr. 12<br />
              82178 Puchheim
            </address>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-lg bg-card border border-border">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Telefon</h3>
            <p className="mt-1 text-muted-foreground">
              <a 
                href="tel:+4989XXXXXXXX" 
                className="hover:text-foreground transition-colors"
              >
                +49 89 XXX XXX XX
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-lg bg-card border border-border">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">E-Mail</h3>
            <p className="mt-1 text-muted-foreground">
              <a 
                href="mailto:info@monacum.de" 
                className="hover:text-foreground transition-colors"
              >
                info@monacum.de
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 rounded-lg bg-card border border-border">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">Bürozeiten</h3>
            <p className="mt-1 text-muted-foreground">
              Montag – Freitag: 9:00 – 17:00 Uhr<br />
              <span className="text-sm">Termine nach Vereinbarung</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-lg bg-card border border-border">
        <h3 className="font-medium text-foreground">Mitgliedschaften</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          VDIV Bayern – Verband der Immobilienverwalter<br />
          Haus & Grund München
        </p>
      </div>
    </div>
  )
}
