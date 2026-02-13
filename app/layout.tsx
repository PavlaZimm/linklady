import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.linklady.cz'),
  title: {
    default: "Linklady.cz | Pavla Zimmermannová - Online Marketing Specialistka",
    template: "%s | Linklady.cz",
  },
  description: "Pomáhám firmám růst online. Specializuji se na SEO optimalizaci, PPC reklamu (Google Ads, Sklik), sociální sítě a automatizaci marketingu. 10+ let zkušeností.",
  keywords: ["online marketing", "SEO optimalizace", "SEO specialista", "PPC reklama", "Google Ads", "Sklik", "sociální sítě", "tvorba webů", "Pavla Zimmermannová", "marketing konzultace", "digitální marketing"],
  authors: [{ name: "Pavla Zimmermannová" }],
  creator: "Pavla Zimmermannová",
  publisher: "Linklady.cz",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.linklady.cz",
    siteName: "Linklady.cz",
    title: "Linklady.cz | Pavla Zimmermannová - Online Marketing Specialistka",
    description: "Pomáhám firmám růst online. SEO, PPC, sociální sítě a automatizace marketingu.",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Pavla Zimmermannová - Online Marketing Specialistka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linklady.cz | Online Marketing Specialistka",
    description: "Pomáhám firmám růst online. SEO, PPC, sociální sítě a automatizace.",
    images: ["/profile.jpg"],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// Structured Data (JSON-LD) for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Linklady.cz - Pavla Zimmermannová",
  "description": "Online marketing specialistka - SEO, PPC, sociální sítě a automatizace",
  "url": "https://www.linklady.cz",
  "logo": "https://www.linklady.cz/logo.svg",
  "image": "https://www.linklady.cz/profile.jpg",
  "email": "zimmermannovap@gmail.com",
  "founder": {
    "@type": "Person",
    "name": "Pavla Zimmermannová",
    "jobTitle": "Online Marketing Specialistka",
    "url": "https://www.linkedin.com/in/pavla-zimmermannová-750112ab/"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CZ"
  },
  "sameAs": [
    "https://www.linkedin.com/in/pavla-zimmermannová-750112ab/"
  ],
  "serviceType": ["SEO optimalizace", "PPC reklama", "Sociální sítě", "Online marketing", "Automatizace"],
  "areaServed": {
    "@type": "Country",
    "name": "Česká republika"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

