// Keep the historical WordPress sitemap URL usable for existing submissions.
export function GET() {
  return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://www.linklady.cz/sitemap.xml</loc></sitemap></sitemapindex>', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
