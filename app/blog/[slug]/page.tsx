import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/navigation'
import SiteFooter from '@/components/site-footer'
import JsonLd from '@/components/json-ld'
import { pageMetadata } from '@/lib/creative-metadata'
import { guides } from '@/lib/editorial-guides'

export const dynamicParams = false
export function generateStaticParams() { return guides.map(({slug}) => ({slug})) }
type Props = {params: Promise<{slug:string}>}
export async function generateMetadata({params}: Props) {
  const {slug} = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) notFound()
  const meta = pageMetadata(`/blog/${slug}`,guide.title,guide.description)
  return {...meta, authors:[{name:'Pavla Zimmermannová',url:'https://www.linklady.cz/o-mne'}], openGraph:{...meta.openGraph,type:'article',publishedTime:guide.date,modifiedTime:guide.date}}
}
export default async function GuidePage({params}:Props) {
  const {slug} = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) notFound()
  const url = `https://www.linklady.cz/blog/${slug}`
  return <><Navigation /><main id="main-content">
    <JsonLd data={{'@context':'https://schema.org','@graph':[
      {'@type':'Article',headline:guide.title,description:guide.description,url,mainEntityOfPage:url,datePublished:guide.date,dateModified:guide.date,inLanguage:'cs',author:{'@id':'https://www.linklady.cz/#person'},publisher:{'@id':'https://www.linklady.cz/#business'}},
      {'@type':'BreadcrumbList',itemListElement:[
        {'@type':'ListItem',position:1,name:'Úvod',item:'https://www.linklady.cz'},
        {'@type':'ListItem',position:2,name:'Blog',item:'https://www.linklady.cz/blog'},
        {'@type':'ListItem',position:3,name:guide.title,item:url},
      ]},
    ]}} />
    <header className="cf-page-hero"><div className="cf-wrap">
      <Link href="/blog" className="cf-back">← Zpět na blog</Link>
      <p className="cf-eyebrow">{guide.topic} / LINKLADY</p><h1>{guide.title}</h1>
      <p>{guide.intro}</p>
      <p className="text-sm"><Link href="/o-mne" className="underline">Pavla Zimmermannová</Link> · <time dateTime={guide.date}>16. října 2026</time></p>
    </div></header>
    <article className="cf-wrap cf-section cf-service-body">
      <nav aria-label="Obsah článku" className="rounded-2xl bg-slate-50 p-6"><h2>Obsah článku</h2><ul>{guide.sections.map(s => <li key={s.id}><a href={`#${s.id}`} className="underline">{s.title}</a></li>)}</ul></nav>
      {guide.sections.map(section => <section key={section.id} id={section.id}>
        <h2>{section.title}</h2>
        {section.paragraphs.map(p => <p key={p}>{p}</p>)}
        {section.bullets && <ul>{section.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
        {section.table && <div className="overflow-x-auto" role="region" aria-label={section.title} tabIndex={0}>
          <table className="w-full min-w-[540px] border-collapse text-left text-base">
            <caption className="sr-only">{section.title}</caption>
            <thead><tr>{section.table.headers.map(h => <th key={h} scope="col" className="border-b-2 border-slate-300 p-3">{h}</th>)}</tr></thead>
            <tbody>{section.table.rows.map((row,i) => <tr key={i} className="border-b border-slate-200">{row.map((cell,j) => j === 0 ? <th key={j} scope="row" className="p-3 font-semibold">{cell}</th> : <td key={j} className="p-3">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>}
        {section.links?.map(link => <p key={link.href}><Link className="cf-text-link" href={link.href}>{link.label} ↗</Link></p>)}
      </section>)}
      <section><h2>Navazující čtení a služby</h2><ul>{guide.related.map(link => <li key={link.href}><Link className="cf-text-link" href={link.href}>{link.label} ↗</Link></li>)}</ul><p>Autorka: <Link href="/o-mne" className="underline">Pavla Zimmermannová</Link>, SEO a tvorba webových stránek.</p><Link href="/kontakt" className="cf-button">Probrat můj web ↗</Link></section>
    </article>
  </main><SiteFooter /></>
}
