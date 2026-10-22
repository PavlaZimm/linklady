// @vitest-environment jsdom
import { afterEach, expect, it, vi } from 'vitest'
import { contactSchema } from '../lib/contact-validation'
import { readAnalyticsConsent, ANALYTICS_CONSENT_KEY, CONSENT_MAX_AGE } from '../lib/analytics-consent'
import { trackEvent } from '../lib/analytics'
const valid = {name:'Jana',email:'jana@example.com',subject:'Web',message:'Poptávka'}
afterEach(() => { localStorage.clear(); vi.restoreAllMocks(); vi.unstubAllGlobals() })
it('keeps the website distinct from the honeypot and rejects unsafe schemes', () => {
 expect(contactSchema.parse({...valid,websiteUrl:'https://example.cz',web:''})).toMatchObject({websiteUrl:'https://example.cz',web:''})
 for (const websiteUrl of ['javascript:alert(1)','file:///etc/passwd','https://name:password@example.cz','not a url']) expect(contactSchema.safeParse({...valid,websiteUrl}).success).toBe(false)
 expect(contactSchema.safeParse({...valid,websiteUrl:''}).success).toBe(true)
})
it('requires a valid unexpired analytics choice', () => {
 expect(readAnalyticsConsent()).toBeNull()
 for (const value of ['broken',JSON.stringify({accepted:'yes',savedAt:Date.now()}),JSON.stringify({accepted:true,savedAt:Date.now()-CONSENT_MAX_AGE-1})]) {
  localStorage.setItem(ANALYTICS_CONSENT_KEY,value);expect(readAnalyticsConsent()).toBeNull()
 }
 localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({accepted:false,savedAt:Date.now()}));expect(readAnalyticsConsent()).toBe(false)
 localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({accepted:true,savedAt:Date.now()}));expect(readAnalyticsConsent()).toBe(true)
})
it('only sends production conversion events after consent', () => {
 const gtag = vi.fn()
 vi.stubGlobal('window', {location:{hostname:'www.linklady.cz'}, gtag})
 trackEvent('generate_lead')
 expect(gtag).not.toHaveBeenCalled()
 localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({accepted:false,savedAt:Date.now()}))
 trackEvent('generate_lead')
 expect(gtag).not.toHaveBeenCalled()
 localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({accepted:true,savedAt:Date.now()}))
 trackEvent('generate_lead', {form_name:'contact'})
 expect(gtag).toHaveBeenCalledExactlyOnceWith('event','generate_lead',{form_name:'contact'})
})

it('does not let a broken analytics client break form processing', () => {
 localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({accepted:true,savedAt:Date.now()}))
 vi.stubGlobal('window',{location:{hostname:'www.linklady.cz'},gtag:()=>{throw new Error('blocked')}})
 expect(()=>trackEvent('generate_lead',{form_id:'contact'})).not.toThrow()
})
