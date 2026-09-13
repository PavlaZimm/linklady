import "./globals.css"

import { headers } from "next/headers"
import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linklady.cz"),
  title: {
    default: "Linklady.cz | SEO a AI automatizace – Pavla Zimmermannová",
    template: "%s | Linklady.cz",
  },
  description: "Vaše firma na prvních místech. SEO strategie a AI automatizace od specialistky s 10 lety zkušeností. Měřitelné výsledky pro váš byznys.",
  keywords: [
    "online marketing",
    "SEO",
    "SEO specialistka",
    "AI agenti",
    "automatizace marketingu",
    "lokální SEO",
    "content marketing",
    "tvorba webů",
    "Pavla Zimmermannová",
    "linklady",
  ],
  authors: [{ name: "Pavla Zimmermannová", url: "https://www.linklady.cz/o-mne" }],
  creator: "Pavla Zimmermannová",
  publisher: "Linklady.cz",
  alternates: {
    canonical: "https://www.linklady.cz",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.linklady.cz",
    siteName: "Linklady.cz",
    title: "Linklady.cz | SEO a AI automatizace",
    description: "Vaše firma na prvních místech. SEO strategie a AI automatizace. 10 let zkušeností, měřitelné výsledky.",
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
    title: "Linklady.cz | SEO a AI automatizace",
    description: "Vaše firma na prvních místech. SEO strategie a AI automatizace. 10 let zkušeností, měřitelné výsledky.",
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
    "theme-color": "#663399",
    "google-site-verification": "googleefe3afe42c601fcd",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.linklady.cz/#website",
      url: "https://www.linklady.cz",
      name: "Linklady.cz",
      description: "Online marketing, SEO a automatizace",
      publisher: { "@id": "https://www.linklady.cz/#person" },
      inLanguage: "cs",
    },
    {
      "@type": "Person",
      "@id": "https://www.linklady.cz/#person",
      name: "Pavla Zimmermannová",
      url: "https://www.linklady.cz",
      image: "https://www.linklady.cz/profile.jpg",
      jobTitle: "Online marketing specialistka",
      description: "Specialistka na SEO, AI asistenty a automatizaci marketingu od roku 2015.",
      sameAs: [
        "https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/",
      ],
      knowsAbout: [
        "SEO",
        "AI agenti",
        "automatizace marketingu",
        "content marketing",
        "lokální SEO",
        "tvorba webů",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.linklady.cz/#business",
      name: "Linklady.cz – Pavla Zimmermannová",
      url: "https://www.linklady.cz",
      logo: "https://www.linklady.cz/logo.svg",
      image: "https://www.linklady.cz/profile.jpg",
      description: "Online marketing služby – SEO, AI asistenti a automatizace.",
      email: "zimmermannovap@gmail.com",
      founder: { "@id": "https://www.linklady.cz/#person" },
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online marketing služby",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO optimalizace" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI asistenti" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatizace marketingu" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tvorba webových stránek" } },
        ],
      },
      sameAs: [
        "https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/",
      ],
    },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = (await headers()).get('x-nonce') ?? ''

  return (
    <html lang="cs">
        <head>
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  function loadAnalytics() {
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function () { window.dataLayer.push(arguments); };
                    window.gtag('js', new Date());
                    window.gtag('config', 'G-FXX3CY3CHM');

                    var googleScript = document.createElement('script');
                    googleScript.async = true;
                    googleScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FXX3CY3CHM';
                    document.head.appendChild(googleScript);

                    var ahrefsScript = document.createElement('script');
                    ahrefsScript.async = true;
                    ahrefsScript.src = 'https://analytics.ahrefs.com/analytics.js';
                    ahrefsScript.setAttribute('data-key', 'bq++w6F/akp3AQs/1X59sw');
                    document.head.appendChild(ahrefsScript);
                  }

                  function scheduleAnalytics() {
                    window.setTimeout(loadAnalytics, 5000);
                  }

                  if (document.readyState === 'complete') {
                    scheduleAnalytics();
                  } else {
                    window.addEventListener('load', scheduleAnalytics, { once: true });
                  }
                })();
              `,
            }}
          />
          <JsonLd data={jsonLd} />
        </head>
        <body className="antialiased">{children}</body>
    </html>
  )
}
