export const ANALYTICS_CONSENT_KEY = 'linklady-analytics-v1'
export const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000
export function readAnalyticsConsent(): boolean | null {
  if (typeof window === 'undefined') return null
  try {
    const value = JSON.parse(localStorage.getItem(ANALYTICS_CONSENT_KEY) || 'null')
    if (!value || typeof value.accepted !== 'boolean' || typeof value.savedAt !== 'number' || value.savedAt > Date.now() || Date.now() - value.savedAt >= CONSENT_MAX_AGE) return null
    return value.accepted
  } catch { return null }
}
