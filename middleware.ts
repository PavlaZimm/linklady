import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // --- Generate cryptographic nonce for CSP (replaces unsafe-inline for scripts) ---
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  // --- Content Security Policy (nonce-based, no unsafe-eval) ---
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.ahrefs.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https://www.linklady.cz https://linklady.cz https://images.pexels.com https://www.google-analytics.com",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://*.convex.cloud https://*.convex.site wss://*.convex.cloud https://www.google-analytics.com https://analytics.ahrefs.com https://www.googletagmanager.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join('; ')

  // Pass nonce to Server Components via request header
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  // --- CSP ---
  response.headers.set('Content-Security-Policy', csp)

  // --- HSTS: Force HTTPS for 2 years, include subdomains, allow preload list ---
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )

  // --- Clickjacking protection (redundant with CSP frame-ancestors but good defense-in-depth) ---
  response.headers.set('X-Frame-Options', 'DENY')

  // --- Prevent MIME type sniffing ---
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // --- Referrer policy ---
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // --- XSS protection (legacy browsers) ---
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // --- Restrict browser features ---
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  )

  // --- Prevent cross-domain policy file loading (Flash/PDF) ---
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')

  // --- Prevent DNS prefetching leaks ---
  response.headers.set('X-DNS-Prefetch-Control', 'off')

  // --- Cross-Origin policies ---
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin')

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots\\.txt|sitemap\\.xml|.*\\.jpg|.*\\.png|.*\\.svg|.*\\.ico|.*\\.webp|.*\\.html).*)',
  ],
}
