"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, Mail } from "lucide-react"

const RECIPIENT = "info@monacum-immobilien.de"

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // fall through to the legacy path below
  }
  try {
    const el = document.createElement("textarea")
    el.value = text
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    const ok = document.execCommand("copy")
    document.body.removeChild(el)
    return ok
  } catch {
    return false
  }
}

function CopyButton({
  text,
  label,
  className,
}: {
  text: string
  label: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const ok = await copyText(text)
    if (ok) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <Check className="mr-2 h-4 w-4" />
      ) : (
        <Copy className="mr-2 h-4 w-4" />
      )}
      {copied ? "Kopiert" : label}
    </Button>
  )
}

/**
 * Fallback shown after a mailto: handoff. Because a mailto only opens the
 * visitor's own mail client (and does nothing if none is configured), we must
 * never claim the message was sent. Instead we let the visitor read and copy
 * their message plus our address so no inquiry is silently lost.
 */
export function MailtoFallback({
  subject,
  body,
}: {
  subject: string
  body: string
}) {
  const fullMessage = `An: ${RECIPIENT}\nBetreff: ${subject}\n\n${body}`

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-medium text-foreground">
          Fast geschafft
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Ihr E-Mail-Programm sollte sich geöffnet haben. Falls nicht, senden
          Sie uns Ihre Nachricht bitte direkt – kopieren Sie den Text unten und
          schicken Sie ihn an unsere E-Mail-Adresse.
        </p>
      </div>

      {/* Recipient address – prominent, with mailto link and copy */}
      <div className="rounded-lg border border-border bg-secondary/50 p-4">
        <p className="text-sm text-muted-foreground">Unsere E-Mail-Adresse</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${RECIPIENT}`}
            className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors break-all"
          >
            <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
            {RECIPIENT}
          </a>
          <CopyButton
            text={RECIPIENT}
            label="Adresse kopieren"
            className="sm:flex-shrink-0"
          />
        </div>
      </div>

      {/* Composed message – copyable block */}
      <div>
        <label
          htmlFor="mailto-fallback-message"
          className="text-sm text-muted-foreground"
        >
          Ihre Nachricht
        </label>
        <textarea
          id="mailto-fallback-message"
          readOnly
          value={fullMessage}
          rows={10}
          className="mt-2 w-full resize-y rounded-md border border-border bg-card p-3 text-sm text-foreground font-mono leading-relaxed"
        />
        <CopyButton
          text={fullMessage}
          label="Nachricht kopieren"
          className="mt-3 w-full sm:w-auto"
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Bei dringenden Anliegen erreichen Sie uns auch telefonisch unter{" "}
        <a
          href="tel:+4989890467430"
          className="whitespace-nowrap font-medium text-foreground hover:text-primary transition-colors"
        >
          089 890467430
        </a>
        . Wir melden uns zeitnah bei Ihnen.
      </p>
    </div>
  )
}
