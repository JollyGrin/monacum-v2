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

const siteUrl = 'https://monacum-immobilien.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Monacum Immobilienverwaltung | Premium Hausverwaltung München',
  description: 'Professionelle Immobilienverwaltung für München und Umgebung. Spezialisiert auf WEG-Verwaltung, Mietverwaltung und Bauträgerbetreuung. Persönlich, strukturiert, digital.',
  keywords: 'Hausverwaltung München, WEG-Verwaltung, Immobilienverwaltung, Mietverwaltung, Bauträger München, Sondereigentumsverwaltung',
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'Monacum Immobilienverwaltung',
    title: 'Monacum Immobilienverwaltung | Premium Hausverwaltung München',
    description: 'Professionelle Immobilienverwaltung für München und Umgebung. Spezialisiert auf WEG-Verwaltung, Mietverwaltung und Bauträgerbetreuung.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Monacum Immobilienverwaltung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monacum Immobilienverwaltung | Premium Hausverwaltung München',
    description: 'Professionelle Immobilienverwaltung für München und Umgebung.',
    images: ['/og-image.jpg'],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Monacum Immobilienverwaltung',
  description:
    'Professionelle Immobilienverwaltung für München und Umgebung. Spezialisiert auf WEG-Verwaltung, Mietverwaltung und Bauträgerbetreuung.',
  url: siteUrl,
  logo: `${siteUrl}/images/monacum-logo.png`,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+49 89 890467430',
  email: 'info@monacum-immobilien.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Boschstr. 12',
    postalCode: '82178',
    addressLocality: 'Puchheim',
    addressCountry: 'DE',
  },
  areaServed: {
    '@type': 'City',
    name: 'München',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  memberOf: [
    { '@type': 'Organization', name: 'VDIV Bayern' },
    { '@type': 'Organization', name: 'Haus & Grund München' },
  ],
  knowsAbout: [
    'WEG-Verwaltung',
    'Miethausverwaltung',
    'Sondereigentumsverwaltung',
    'Bauträgerbetreuung',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
