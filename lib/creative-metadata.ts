import type { Metadata } from "next";
export function pageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = `https://www.linklady.cz${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "cs_CZ",
      siteName: "Linklady.cz",
      url,
      title,
      description,
      images: [{ url: "/profile.jpg", alt: "Pavla Zimmermannová – Linklady" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/profile.jpg"],
    },
  };
}
