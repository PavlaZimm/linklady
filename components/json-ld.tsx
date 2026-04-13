import { headers } from 'next/headers'

/**
 * Escapes characters that could break out of a <script> tag when embedding
 * JSON-LD. JSON.stringify alone does NOT escape `</script>`, `<!--`, U+2028
 * or U+2029. Defense-in-depth: we always control `data` here (static schema),
 * but this hardens the component against any future dynamic payloads.
 */
function safeStringify(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export default async function JsonLd({ data }: { data: object }) {
  const nonce = (await headers()).get('x-nonce') ?? ''
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: safeStringify(data) }}
    />
  )
}
