export interface FaqItem {
  question: string
  answer: string
}

/**
 * FAQ content as provided by the client. Keep the copy exactly as given –
 * changes to wording must be cleared with the client first. New questions can
 * simply be appended here; both the accordion UI and the FAQ schema read from
 * this single source.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Wann erhalte ich meine Jahresabrechnung?",
    answer:
      "Die Jahresabrechnung wird gemeinsam mit der Einladung zur Eigentümerversammlung bereitgestellt. Die Eigentümerversammlung findet üblicherweise im ersten Halbjahr des Folgejahres statt.",
  },
  {
    question: "Wie läuft ein Verwalterwechsel ab?",
    answer:
      "Wir begleiten den Verwalterwechsel strukturiert von Anfang an. Dazu gehören die Prüfung der vorhandenen Unterlagen, die Abstimmung mit dem bisherigen Verwalter, die Übernahme der Objektunterlagen sowie die Einrichtung der laufenden Verwaltung.",
  },
  {
    question: "Welche Unterlagen benötigen Sie für ein Verwaltungsangebot?",
    answer:
      "Für eine erste Einschätzung reichen uns in der Regel wenige Eckdaten: die Anzahl der Einheiten, die Objektadresse, die Art der Verwaltung und besondere Themen der Immobilie. Falls erforderlich, stimmen wir weitere Unterlagen anschließend individuell mit Ihnen ab.",
  },
  {
    question: "Wo findet die Eigentümerversammlung statt?",
    answer:
      "Die Eigentümerversammlung findet je nach Objekt und Bedarf als Präsenz- oder Hybridveranstaltung statt – entweder in unseren eigenen Räumlichkeiten, direkt vor Ort oder in geeigneten externen Versammlungsräumen.",
  },
  {
    question: "Unterstützen Sie bei Sanierungen und Instandhaltungsmaßnahmen?",
    answer:
      "Ja. Wir koordinieren notwendige Instandhaltungs- und Sanierungsmaßnahmen, holen Angebote ein, stimmen diese mit den Eigentümern ab und begleiten die Umsetzung.",
  },
  {
    question: "Arbeiten Sie mit ausgewählten Handwerkern und Hausmeistern zusammen?",
    answer:
      "Ja. Wir arbeiten mit zuverlässigen regionalen Handwerksbetrieben, Hausmeisterdiensten und Dienstleistern zusammen. Dabei achten wir auf Qualität, Erreichbarkeit und ein faires Preis-Leistungs-Verhältnis.",
  },
  {
    question: "Können Sie die Nebenkostenabrechnung für meinen Mieter erstellen?",
    answer:
      "Ja. Ob Sie bereits Kunde bei uns sind oder eine einzelne Abrechnung benötigen: Wir erstellen gerne Ihre Nebenkostenabrechnung auf Grundlage der vorliegenden Kosten- und Verbrauchsdaten.",
  },
  {
    question: "Sind Sie zertifizierter Verwalter?",
    answer:
      "Ja. Wir verfügen über die Qualifikation als zertifizierter Verwalter nach § 26a WEG.",
  },
  {
    question: "Übernehmen Sie auch kleinere WEGs?",
    answer:
      "Ja. Wir betreuen auch kleinere Eigentümergemeinschaften, sofern der Verwaltungsumfang und die Anforderungen zu unserer Arbeitsweise passen.",
  },
  {
    question: "Wie erhalte ich ein Verwaltungsangebot?",
    answer:
      "Sie können uns über das Anfrageformular, per E-Mail oder telefonisch kontaktieren. Nach Eingang der wichtigsten Objektdaten prüfen wir den Verwaltungsumfang und erstellen ein individuelles Angebot.",
  },
  {
    question: "Wie werden Notfälle außerhalb der Bürozeiten behandelt?",
    answer:
      "Für dringende Notfälle, etwa Rohrbruch, Heizungsausfall oder sicherheitsrelevante Schäden, stellen wir klare Abläufe und zuständige Notfallkontakte bereit.",
  },
]
