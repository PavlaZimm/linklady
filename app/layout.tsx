import "./globals.css"

import Script from "next/script"
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
  subsets: ["latin", "latin-ext"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://linklady.cz"),
  title: {
    default: "Linklady.cz | Pavla Zimmermannová – Online Marketing, SEO & Automatizace",
    template: "%s | Linklady.cz",
  },
  description: "Pavla Zimmermannová – specialistka na online marketing od roku 2015. SEO, PPC kampaně, AI asistenti a automatizace pro růst vašeho byznysu.",
  keywords: [
    "online marketing",
    "SEO",
    "SEO specialistka",
    "PPC",
    "Google Ads",
    "Sklik",
    "AI agenti",
    "automatizace marketingu",
    "lokální SEO",
    "content marketing",
    "tvorba webů",
    "Pavla Zimmermannová",
    "linklady",
  ],
  authors: [{ name: "Pavla Zimmermannová", url: "https://linklady.cz/o-mne" }],
  creator: "Pavla Zimmermannová",
  publisher: "Linklady.cz",
  alternates: {
    canonical: "https://linklady.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://linklady.cz",
    siteName: "Linklady.cz",
    title: "Linklady.cz | Pavla Zimmermannová – Online Marketing",
    description: "SEO, PPC kampaně, AI asistenti a automatizace. Pomáhám firmám růst online od roku 2015.",
    images: [
      {
        url: "/profile.jpg",
        width: 500,
        height: 600,
        alt: "Pavla Zimmermannová – online marketing specialistka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linklady.cz | Pavla Zimmermannová – Online Marketing",
    description: "SEO, PPC kampaně, AI asistenti a automatizace. Pomáhám firmám růst online od roku 2015.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#7c3aed",
    "google-site-verification": "",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://linklady.cz/#website",
      url: "https://linklady.cz",
      name: "Linklady.cz",
      description: "Online marketing, SEO, PPC a automatizace",
      publisher: { "@id": "https://linklady.cz/#person" },
      inLanguage: "cs",
    },
    {
      "@type": "Person",
      "@id": "https://linklady.cz/#person",
      name: "Pavla Zimmermannová",
      url: "https://linklady.cz",
      image: "https://linklady.cz/profile.jpg",
      jobTitle: "Online marketing specialistka",
      description: "Specialistka na SEO, PPC kampaně, AI asistenty a automatizaci marketingu od roku 2015.",
      sameAs: [
        "https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/",
      ],
      knowsAbout: [
        "SEO",
        "PPC",
        "Google Ads",
        "Sklik",
        "AI agenti",
        "automatizace marketingu",
        "content marketing",
        "lokální SEO",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://linklady.cz/#business",
      name: "Linklady.cz – Pavla Zimmermannová",
      url: "https://linklady.cz",
      logo: "https://linklady.cz/logo.svg",
      image: "https://linklady.cz/profile.jpg",
      description: "Online marketing služby – SEO, PPC kampaně, AI asistenti a automatizace.",
      email: "zimmermannovap@gmail.com",
      founder: { "@id": "https://linklady.cz/#person" },
      taxID: "04352041",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bílina",
        addressCountry: "CZ",
      },
      areaServed: {
        "@type": "Country",
        name: "Česká republika",
      },
      serviceType: [
        "SEO optimalizace",
        "PPC kampaně",
        "AI asistenti",
        "Automatizace marketingu",
      ],
      sameAs: [
        "https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
        <head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-FXX3CY3CHM"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FXX3CY3CHM');
            `}
          </Script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

