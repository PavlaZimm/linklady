'use client'
import Link from 'next/link'
import { useState } from 'react'
export type BlogItem = { href: string; title: string; description: string; topic: 'SEO' | 'Weby' | 'AI' | 'Další'; date?: string; dateLabel?: string }
const topics = ['Vše', 'SEO', 'Weby', 'AI', 'Další'] as const
export default function BlogList({ articles }: { articles: BlogItem[] }) {
  const [topic, setTopic] = useState<(typeof topics)[number]>('Vše')
  const visible = articles.filter(a => topic === 'Vše' || a.topic === topic)
  return <section className="cf-wrap py-10 sm:py-14" aria-label="Články a průvodci">
    <div className="mb-6 flex flex-wrap gap-3" role="group" aria-label="Filtrovat články podle tématu">{topics.map(t => <button key={t} type="button" aria-pressed={t === topic} onClick={() => setTopic(t)} className={`rounded-full border-2 px-5 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${t === topic ? 'border-[#151D32] bg-[#151D32] text-white' : 'border-slate-300 text-[#151D32]'}`}>{t}</button>)}</div>
    <p role="status" className="mb-6 text-sm text-slate-600">Zobrazeno: {visible.length} z {articles.length}</p>
    <div className="grid gap-6 md:grid-cols-2">{visible.map(a => <article key={a.href} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <p className="cf-eyebrow">{a.topic}</p><h2 className="mb-4 text-2xl font-bold"><Link href={a.href} className="hover:underline">{a.title}</Link></h2><p className="mb-5">{a.description}</p>
      <p className="text-sm text-slate-600"><Link href="/o-mne" className="underline">Pavla Zimmermannová</Link>{a.date && <> · <time dateTime={a.date}>{a.dateLabel}</time></>}</p>
    </article>)}</div>
  </section>
}
