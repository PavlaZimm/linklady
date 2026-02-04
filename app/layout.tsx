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
  title: {
    default: "Linklady.cz | Pavla Zimmermannová - Online Marketing",
    template: "%s | Linklady.cz",
  },
  description: "Pomáhám firmám růst online. Specializuji se na SEO, PPC reklamu, sociální sítě a tvorbu webů.",
  keywords: ["online marketing", "SEO", "PPC", "sociální sítě", "tvorba webů", "Pavla Zimmermannová"],
  authors: [{ name: "Pavla Zimmermannová" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Linklady.cz",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        >
          {children}
        </body>
    </html>
  )
}

