export const restoredArticleSlugs = [
  'barterova-spoluprace-idealni-marketingovy-tah',
  '11-tipu-jak-ziskat-validni-zpetny-odkaz',
  '3-typy-zpetnych-odkazu-ktery-je-ten-spravny',
  'linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu',
] as const

export function canonicalArticlePath(pathname: string): string | undefined {
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  return restoredArticleSlugs.some(article => article === slug) ? `/${slug}/` : undefined
}
