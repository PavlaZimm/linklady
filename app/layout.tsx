import "./globals.css";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});

import { headers } from "next/headers";
import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import AnalyticsConsent from "@/components/analytics-consent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linklady.cz"),
  title: {
    default: "Linklady.cz | SEO a tvorba webů – Pavla Zimmermannová",
    template: "%s | Linklady.cz",
  },
  description:
    "SEO služby a tvorba webů na míru od Pavly Zimmermannové. Analýza klíčových slov, obsah a funkční web, na kterém zákazníci snadno najdou vaši nabídku.",
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
  authors: [
    { name: "Pavla Zimmermannová", url: "https://www.linklady.cz/o-mne" },
  ],
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
    title: "Linklady.cz | SEO a tvorba webů",
    description:
      "SEO služby a tvorba webů na míru od Pavly Zimmermannové. Analýza klíčových slov, obsah a funkční web, na kterém zákazníci snadno najdou vaši nabídku.",
    images: [
      {
        url: "/profile.jpg",
        width: 665,
        height: 1000,
        alt: "Pavla Zimmermannová – online marketing specialistka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linklady.cz | SEO a tvorba webů",
    description:
      "SEO služby a tvorba webů na míru od Pavly Zimmermannové. Analýza klíčových slov, obsah a funkční web, na kterém zákazníci snadno najdou vaši nabídku.",
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
    "theme-color": "#151D32",
    "google-site-verification": "googleefe3afe42c601fcd",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.linklady.cz/#website",
      url: "https://www.linklady.cz",
      name: "Linklady.cz",
      description: "SEO a tvorba webových stránek",
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
      description:
        "V online marketingu působí od roku 2015. Věnuje se SEO, obsahu a tvorbě webů.",
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
      logo: "https://www.linklady.cz/logo.png",
      image: "https://www.linklady.cz/profile.jpg",
      description:
        "SEO služby, tvorba webových stránek a navazující digitální řešení.",
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
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "SEO optimalizace" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "AI asistenti" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automatizace marketingu",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tvorba webových stránek",
            },
          },
        ],
      },
      sameAs: [
        "https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/",
      ],
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html lang="cs" className={manrope.variable}>
      <head>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  var enabled = false;
                  var loaded = false;
                  function readChoice() {
                    try {
                      var v = JSON.parse(localStorage.getItem('linklady-analytics-v1') || 'null');
                      return !!(v && v.accepted === true && typeof v.savedAt === 'number' && v.savedAt <= Date.now() && Date.now() - v.savedAt < 15552000000);
                    } catch (_) { return false; }
                  }
                  function apply(accepted) {
                    enabled = accepted;
                    window['ga-disable-G-FXX3CY3CHM'] = !accepted;
                    if (!accepted) {
                      if (loaded && window.gtag) window.gtag('consent', 'update', {analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
                        document.cookie.split(';').forEach(function (entry) {
                          var name = entry.split('=')[0].trim();
                          if (name === '_ga' || name.indexOf('_ga_') === 0) {
                            ['', '; domain=' + location.hostname, '; domain=.linklady.cz'].forEach(function (domain) {
                              document.cookie = name + '=; Max-Age=0; path=/' + domain + '; SameSite=Lax; Secure';
                            });
                          }
                        });
                        if (loaded) location.reload();
                      return;
                    }
                    if (loaded || !['www.linklady.cz', 'linklady.cz'].includes(location.hostname)) return;
                    loaded = true;
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = function () { if (enabled || arguments[0] === 'consent') window.dataLayer.push(arguments); };
                    window.gtag('consent', 'default', {analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
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
                  window.addEventListener('linklady:analytics-choice', function (event) { apply(event.detail === true); });
                  window.addEventListener('storage', function (event) { if (event.key === 'linklady-analytics-v1') apply(readChoice()); });
                  apply(readChoice());
                })();
              `,
          }}
        />
        <JsonLd data={jsonLd} />
      </head>
      <body className="antialiased"><AnalyticsConsent />{children}</body>
    </html>
  );
}
