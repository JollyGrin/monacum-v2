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

export function WEGContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    units: "",
    currentManager: "",
    desiredStart: "",
    message: "",
    privacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to a backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="anfrage" className="py-20 lg:py-28 bg-primary/5">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground">
            Vielen Dank für Ihre Anfrage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wir haben Ihre Nachricht erhalten und melden uns innerhalb von zwei 
            Werktagen bei Ihnen. Bei dringenden Anliegen erreichen Sie uns auch 
            telefonisch.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="anfrage" className="py-20 lg:py-28 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Angebot für Ihre WEG anfragen
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Beschreiben Sie uns Ihre Eigentümergemeinschaft und wir erstellen Ihnen 
              ein individuelles Angebot. Die Anfrage ist unverbindlich und kostenfrei.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-medium text-foreground">Was passiert nach Ihrer Anfrage?</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      1
                    </span>
                    <span className="text-muted-foreground">
                      Wir prüfen Ihre Anfrage und melden uns innerhalb von zwei Werktagen.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      2
                    </span>
                    <span className="text-muted-foreground">
                      In einem persönlichen Gespräch klären wir Ihre Anforderungen.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      3
                    </span>
                    <span className="text-muted-foreground">
                      Sie erhalten ein transparentes Angebot ohne versteckte Kosten.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                <div className="space-y-2">
                  <Label htmlFor="units">Anzahl Einheiten *</Label>
                  <Select
                    value={formData.units}
                    onValueChange={(value) => setFormData({ ...formData, units: value })}
                  >
                    <SelectTrigger id="units">
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
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentManager">Aktueller Verwalter</Label>
                  <Input
                    id="currentManager"
                    value={formData.currentManager}
                    onChange={(e) => setFormData({ ...formData, currentManager: e.target.value })}
                    placeholder="Name des aktuellen Verwalters"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desiredStart">Gewünschter Starttermin</Label>
                  <Select
                    value={formData.desiredStart}
                    onValueChange={(value) => setFormData({ ...formData, desiredStart: value })}
                  >
                    <SelectTrigger id="desiredStart">
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
                <Label htmlFor="message">Ihre Nachricht</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Beschreiben Sie kurz Ihre WEG und Ihre Anforderungen..."
                />
              </div>

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
                Angebot anfragen
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
