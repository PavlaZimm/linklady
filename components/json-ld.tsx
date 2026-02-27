import { headers } from 'next/headers'

export default async function JsonLd({ data }: { data: object }) {
  const nonce = (await headers()).get('x-nonce') ?? ''
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
