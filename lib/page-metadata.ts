import type { Metadata } from 'next'

import siteMetadata from '@/app/metadata.json'

type PagePath = keyof typeof siteMetadata

export function getPageMetadata(path: PagePath): Metadata {
  const page = siteMetadata[path]

  return {
    ...page,
    openGraph: {
      type: 'website',
      locale: 'cs_CZ',
      siteName: 'Linklady.cz',
      ...page.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.openGraph.title,
      description: page.openGraph.description,
      images: page.openGraph.images.map((image) => image.url),
    },
  }
}
