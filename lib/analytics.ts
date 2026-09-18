type AnalyticsWindow = Window & {
  gtag?: (command: string, name: string, parameters: Record<string, string>) => void
  dataLayer?: unknown[]
}

export function trackEvent(name: string, parameters: Record<string, string> = {}) {
  if (typeof window === 'undefined' || !['www.linklady.cz', 'linklady.cz'].includes(window.location.hostname)) return
  const target = window as AnalyticsWindow
  if (target.gtag) target.gtag('event', name, parameters)
  else {
    target.dataLayer = target.dataLayer || []
    const enqueue = function (..._args: unknown[]) { target.dataLayer?.push(arguments) }
    enqueue('event', name, parameters)
  }
}
