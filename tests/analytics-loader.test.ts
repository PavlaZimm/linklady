import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { expect, it, vi } from 'vitest'
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8')
const script = layout.match(/__html: `([\s\S]*?)`,/)![1]
function boot(choice: unknown, hostname = 'www.linklady.cz') {
  const listeners: Record<string, (event: {detail?: boolean; key?: string}) => void> = {}
  const scripts: {src: string}[] = []
  const reload = vi.fn()
  const window: Record<string, any> = {addEventListener: (name: string, listener: typeof listeners[string]) => { listeners[name] = listener }}
  const document = {cookie: '_ga=old; other=retained', createElement: () => ({setAttribute: vi.fn()}), head: {appendChild: (node: {src: string}) => scripts.push(node)}}
  runInNewContext(script, {window, document, location: {hostname, reload}, localStorage: {getItem: () => JSON.stringify(choice)}})
  return {window, document, scripts, reload, listeners}
}
it('does not load trackers without a valid positive choice', () => {
  for (const choice of [null, {accepted:false,savedAt:Date.now()}, {accepted:true,savedAt:0}]) expect(boot(choice).scripts).toHaveLength(0)
})
it('loads once after approval, then disables measurement and reloads on revocation', () => {
  const page = boot(null)
  page.listeners['linklady:analytics-choice']({detail:true})
  page.listeners['linklady:analytics-choice']({detail:true})
  expect(page.scripts.map(s => s.src)).toEqual(['https://www.googletagmanager.com/gtag/js?id=G-FXX3CY3CHM','https://analytics.ahrefs.com/analytics.js'])
  page.listeners['linklady:analytics-choice']({detail:false})
  expect(page.window['ga-disable-G-FXX3CY3CHM']).toBe(true)
  expect(page.reload).toHaveBeenCalledOnce()
  const count = page.window.dataLayer.length
  page.window.gtag('event','generate_lead')
  expect(page.window.dataLayer).toHaveLength(count)
  expect(page.window.dataLayer[count-1][2].analytics_storage).toBe('denied')
})
it('restores consent on production but never loads analytics on a preview', () => {
  const choice = {accepted:true,savedAt:Date.now()}
  expect(boot(choice).scripts).toHaveLength(2)
  expect(boot(choice,'preview.vercel.app').scripts).toHaveLength(0)
})
