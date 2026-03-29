"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

type InquiryType = "weg" | "miethaus" | "sondereigentum" | "bautraeger" | "sonstiges" | ""

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [inquiryType, setInquiryType] = useState<InquiryType>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
    // WEG specific
    wegUnits: "",
    wegCurrentManager: "",
    wegDesiredStart: "",
    // Miethaus specific
    miethausPropertyType: "",
    miethausUnits: "",
    miethausDesiredStart: "",
    // Sondereigentum specific
    sondereigentumRented: "",
    sondereigentumDesiredStart: "",
    // Bauträger specific
    bautraegerCompany: "",
    bautraegerLocation: "",
    bautraegerProjectType: "",
    bautraegerHandoverDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-lg p-8 lg:p-12 border border-border text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-serif text-2xl font-medium text-foreground">
          Vielen Dank für Ihre Anfrage
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Wir haben Ihre Nachricht erhalten und melden uns innerhalb von zwei 
          Werktagen bei Ihnen. Bei dringenden Anliegen erreichen Sie uns auch 
          telefonisch unter +49 89 XXX XXX XX.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-lg p-8 lg:p-10 border border-border">
      <h2 className="font-serif text-2xl font-medium text-foreground">
        Anfrage senden
      </h2>
      <p className="mt-2 text-muted-foreground">
        Alle mit * gekennzeichneten Felder sind Pflichtfelder.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ihr Name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ihre@email.de"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+49 89 ..."
          />
        </div>

        {/* Inquiry Type */}
        <div className="space-y-2">
          <Label htmlFor="inquiryType">Art der Anfrage *</Label>
          <Select
            value={inquiryType}
            onValueChange={(value) => setInquiryType(value as InquiryType)}
            required
          >
            <SelectTrigger id="inquiryType">
              <SelectValue placeholder="Bitte wählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weg">WEG-Verwaltung</SelectItem>
              <SelectItem value="miethaus">Miethausverwaltung</SelectItem>
              <SelectItem value="sondereigentum">Sondereigentumsverwaltung</SelectItem>
              <SelectItem value="bautraeger">Bauträger</SelectItem>
              <SelectItem value="sonstiges">Sonstiges</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional Fields - WEG */}
        {inquiryType === "weg" && (
          <div className="space-y-6 p-6 rounded-lg bg-secondary/50 border border-border/50">
            <h3 className="font-medium text-foreground">Angaben zur WEG</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="wegUnits">Anzahl Einheiten</Label>
                <Select
                  value={formData.wegUnits}
                  onValueChange={(value) => setFormData({ ...formData, wegUnits: value })}
                >
                  <SelectTrigger id="wegUnits">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1–10 Einheiten</SelectItem>
                    <SelectItem value="11-25">11–25 Einheiten</SelectItem>
                    <SelectItem value="26-50">26–50 Einheiten</SelectItem>
                    <SelectItem value="51-100">51–100 Einheiten</SelectItem>
                    <SelectItem value="100+">Mehr als 100 Einheiten</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="wegDesiredStart">Gewünschter Starttermin</Label>
                <Select
                  value={formData.wegDesiredStart}
                  onValueChange={(value) => setFormData({ ...formData, wegDesiredStart: value })}
                >
                  <SelectTrigger id="wegDesiredStart">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">So bald wie möglich</SelectItem>
                    <SelectItem value="3months">In den nächsten 3 Monaten</SelectItem>
                    <SelectItem value="6months">In den nächsten 6 Monaten</SelectItem>
                    <SelectItem value="12months">Innerhalb eines Jahres</SelectItem>
                    <SelectItem value="flexible">Flexibel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="wegCurrentManager">Aktueller Verwalter</Label>
              <Input
                id="wegCurrentManager"
                value={formData.wegCurrentManager}
                onChange={(e) => setFormData({ ...formData, wegCurrentManager: e.target.value })}
                placeholder="Name des aktuellen Verwalters"
              />
            </div>
          </div>
        )}

        {/* Conditional Fields - Miethaus */}
        {inquiryType === "miethaus" && (
          <div className="space-y-6 p-6 rounded-lg bg-secondary/50 border border-border/50">
            <h3 className="font-medium text-foreground">Angaben zur Mietimmobilie</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="miethausPropertyType">Art der Immobilie</Label>
                <Select
                  value={formData.miethausPropertyType}
                  onValueChange={(value) => setFormData({ ...formData, miethausPropertyType: value })}
                >
                  <SelectTrigger id="miethausPropertyType">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mehrfamilienhaus">Mehrfamilienhaus</SelectItem>
                    <SelectItem value="wohn-geschaeftshaus">Wohn-/Geschäftshaus</SelectItem>
                    <SelectItem value="gewerbe">Gewerbeimmobilie</SelectItem>
                    <SelectItem value="sonstiges">Sonstiges</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="miethausUnits">Anzahl Einheiten</Label>
                <Select
                  value={formData.miethausUnits}
                  onValueChange={(value) => setFormData({ ...formData, miethausUnits: value })}
                >
                  <SelectTrigger id="miethausUnits">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1–5 Einheiten</SelectItem>
                    <SelectItem value="6-10">6–10 Einheiten</SelectItem>
                    <SelectItem value="11-20">11–20 Einheiten</SelectItem>
                    <SelectItem value="20+">Mehr als 20 Einheiten</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="miethausDesiredStart">Gewünschter Starttermin</Label>
              <Select
                value={formData.miethausDesiredStart}
                onValueChange={(value) => setFormData({ ...formData, miethausDesiredStart: value })}
              >
                <SelectTrigger id="miethausDesiredStart">
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">So bald wie möglich</SelectItem>
                  <SelectItem value="3months">In den nächsten 3 Monaten</SelectItem>
                  <SelectItem value="6months">In den nächsten 6 Monaten</SelectItem>
                  <SelectItem value="flexible">Flexibel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Conditional Fields - Sondereigentum */}
        {inquiryType === "sondereigentum" && (
          <div className="space-y-6 p-6 rounded-lg bg-secondary/50 border border-border/50">
            <h3 className="font-medium text-foreground">Angaben zum Sondereigentum</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="sondereigentumRented">Ist die Einheit vermietet?</Label>
                <Select
                  value={formData.sondereigentumRented}
                  onValueChange={(value) => setFormData({ ...formData, sondereigentumRented: value })}
                >
                  <SelectTrigger id="sondereigentumRented">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ja">Ja, vermietet</SelectItem>
                    <SelectItem value="nein">Nein, leerstehend</SelectItem>
                    <SelectItem value="geplant">Vermietung geplant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sondereigentumDesiredStart">Gewünschter Starttermin</Label>
                <Select
                  value={formData.sondereigentumDesiredStart}
                  onValueChange={(value) => setFormData({ ...formData, sondereigentumDesiredStart: value })}
                >
                  <SelectTrigger id="sondereigentumDesiredStart">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">So bald wie möglich</SelectItem>
                    <SelectItem value="3months">In den nächsten 3 Monaten</SelectItem>
                    <SelectItem value="flexible">Flexibel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Conditional Fields - Bauträger */}
        {inquiryType === "bautraeger" && (
          <div className="space-y-6 p-6 rounded-lg bg-secondary/50 border border-border/50">
            <h3 className="font-medium text-foreground">Angaben zum Bauvorhaben</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="bautraegerCompany">Unternehmen</Label>
                <Input
                  id="bautraegerCompany"
                  value={formData.bautraegerCompany}
                  onChange={(e) => setFormData({ ...formData, bautraegerCompany: e.target.value })}
                  placeholder="Name des Unternehmens"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bautraegerLocation">Standort des Projekts</Label>
                <Input
                  id="bautraegerLocation"
                  value={formData.bautraegerLocation}
                  onChange={(e) => setFormData({ ...formData, bautraegerLocation: e.target.value })}
                  placeholder="z.B. München-Schwabing"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="bautraegerProjectType">Art des Projekts</Label>
                <Select
                  value={formData.bautraegerProjectType}
                  onValueChange={(value) => setFormData({ ...formData, bautraegerProjectType: value })}
                >
                  <SelectTrigger id="bautraegerProjectType">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neubau">Neubau</SelectItem>
                    <SelectItem value="sanierung">Sanierung / Aufteilung</SelectItem>
                    <SelectItem value="umbau">Umbau</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bautraegerHandoverDate">Voraussichtliche Übergabe</Label>
                <Select
                  value={formData.bautraegerHandoverDate}
                  onValueChange={(value) => setFormData({ ...formData, bautraegerHandoverDate: value })}
                >
                  <SelectTrigger id="bautraegerHandoverDate">
                    <SelectValue placeholder="Bitte wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">In den nächsten 6 Monaten</SelectItem>
                    <SelectItem value="12months">In 6–12 Monaten</SelectItem>
                    <SelectItem value="18months">In 12–18 Monaten</SelectItem>
                    <SelectItem value="24months">In mehr als 18 Monaten</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Ihre Nachricht</Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Beschreiben Sie kurz Ihre Anfrage..."
          />
        </div>

        {/* Privacy */}
        <div className="flex items-start gap-3">
          <Checkbox
            id="privacy"
            checked={formData.privacy}
            onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
            required
          />
          <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
            Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung 
            meiner Daten zur Bearbeitung meiner Anfrage einverstanden. *
          </Label>
        </div>

        <Button type="submit" size="lg" className="w-full font-medium">
          Anfrage senden
        </Button>
      </form>
    </div>
  )
}
