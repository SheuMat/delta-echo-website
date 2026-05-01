import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Compassionate Home Care in Nottinghamshire`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'home care Nottinghamshire',
    'domiciliary care Nottingham',
    'live-in care Nottinghamshire',
    'dementia care Nottingham',
    'personal care at home Nottinghamshire',
    'respite care Nottingham',
    'care at home Stapleford',
    'private home care Nottinghamshire',
    'elderly care at home Nottingham',
    'CQC registered home care',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Compassionate Home Care in Nottinghamshire`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/home-care-hero.png',
        width: 1536,
        height: 864,
        alt: 'A DeltaEcho Care worker supporting an older person at home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | Compassionate Home Care in Nottinghamshire`,
    description: SITE_CONFIG.description,
    images: ['/images/home-care-hero.png'],
  },
  icons: {
    icon: '/delta-echo-logo.png',
    apple: '/delta-echo-logo.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeHealthCareService'],
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: [SITE_CONFIG.phone1, SITE_CONFIG.phone2],
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.area,
    addressRegion: 'Nottinghamshire',
    postalCode: SITE_CONFIG.address.postcode,
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.9093,
    longitude: -1.2660,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Nottinghamshire',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'CQC Registered',
  },
  serviceType: [
    'Personal Care',
    'Live-in Care',
    'Dementia Care',
    'Respite Care',
    'End-of-Life Care',
    'Hospital Discharge Support',
    'Companionship and Domestic Support',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <a
          href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
          className="fixed inset-x-4 bottom-4 z-50 flex items-center justify-center rounded-full bg-teal-500 px-5 py-3.5 text-sm font-bold text-white shadow-2xl shadow-teal-900/25 ring-1 ring-white/20 transition-all duration-300 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 md:hidden"
          aria-label={`Call DeltaEcho Care on ${SITE_CONFIG.phone1}`}
        >
          Call Now: {SITE_CONFIG.phone1}
        </a>
      </body>
    </html>
  )
}
