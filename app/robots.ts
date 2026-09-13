import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://www.linklady.cz/sitemap.xml',
    host: 'https://www.linklady.cz',
  }
}
