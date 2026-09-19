import { describe, expect, it } from 'vitest'
import { NextRequest } from 'next/server'
import { middleware } from '../middleware'
import { restoredArticleSlugs } from '../lib/restored-article-paths'

describe('restored article URLs', () => {
  for (const slug of restoredArticleSlugs) {
    it(`preserves original /${slug}/ and query parameters`, () => {
      const response = middleware(new NextRequest(`https://www.linklady.cz/${slug}?utm_source=partner`))
      expect(response.status).toBe(308)
      expect(response.headers.get('location')).toBe(`https://www.linklady.cz/${slug}/?utm_source=partner`)
      const canonical = middleware(new NextRequest(`https://www.linklady.cz/${slug}/`))
      expect(canonical.headers.get('location')).toBeNull()
      expect(canonical.headers.get('content-security-policy')).toContain('nonce-')
      expect(canonical.headers.get('content-security-policy')).not.toContain('unsafe-eval')
    })
  }
  it('keeps existing public pages without a trailing slash', () => {
    expect(middleware(new NextRequest('https://www.linklady.cz/kontakt/?x=1')).headers.get('location')).toBe('https://www.linklady.cz/kontakt?x=1')
    expect(middleware(new NextRequest('https://www.linklady.cz/')).headers.get('location')).toBeNull()
    expect(middleware(new NextRequest(`https://www.linklady.cz/not-${restoredArticleSlugs[0]}/`)).headers.get('location')).toBe(`https://www.linklady.cz/not-${restoredArticleSlugs[0]}`)
  })
})
