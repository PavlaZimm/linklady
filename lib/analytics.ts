import { readAnalyticsConsent } from './analytics-consent'
type AnalyticsWindow = Window & {
  gtag?: (command: string, name: string, parameters: Record<string, string>) => void
  dataLayer?: unknown[]
}

export function trackEvent(name: string, parameters: Record<string, string> = {}) {
  if (typeof window === 'undefined' || !['www.linklady.cz', 'linklady.cz'].includes(window.location.hostname)) return
  if (readAnalyticsConsent() !== true) return
  // Measurement must never turn an accepted submission into a visible failure.
  try {
    const target = window as AnalyticsWindow
    if (target.gtag) target.gtag('event', name, parameters)
    else {
      target.dataLayer = target.dataLayer || []
      const enqueue = function (..._args: unknown[]) { target.dataLayer?.push(arguments) }
      enqueue('event', name, parameters)
    }
  } catch { /* Analytics is optional; do not retry or log submitted data. */ }
}
