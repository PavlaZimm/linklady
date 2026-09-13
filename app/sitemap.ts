import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.linklady.cz'
  const pages = [
    { path: '', lastModified: '2026-08-25' },
    { path: '/o-mne', lastModified: '2026-08-25' },
    { path: '/blog', lastModified: '2026-08-25' },
    { path: '/ebook', lastModified: '2026-08-25' },
    { path: '/tvorba-webu-bilina', lastModified: '2026-08-25' },
    { path: '/automatizace', lastModified: '2026-08-29' },
    { path: '/vibecoding', lastModified: '2026-08-25' },
    { path: '/seo-konzultant-usti-nad-labem', lastModified: '2026-08-28' },
    { path: '/ai-agent', lastModified: '2026-08-25' },
    { path: '/webova-aplikace', lastModified: '2026-08-28' },
    { path: '/blog/prodej-firmy-strategicky-krok', lastModified: '2026-02-27' },
    { path: '/kontakt', lastModified: '2026-08-25' },
  ] as const

  return pages.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }))
}
