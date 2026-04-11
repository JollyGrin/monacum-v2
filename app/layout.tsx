import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Monacum Immobilienverwaltung | Premium Hausverwaltung München',
  description: 'Professionelle Immobilienverwaltung für München und Umgebung. Spezialisiert auf WEG-Verwaltung, Mietverwaltung und Bauträgerbetreuung. Persönlich, strukturiert, digital.',
  keywords: 'Hausverwaltung München, WEG-Verwaltung, Immobilienverwaltung, Mietverwaltung, Bauträger München, Sondereigentumsverwaltung',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
