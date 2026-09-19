import type { ReactNode } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import SiteFooter from '@/components/site-footer'
import JsonLd from '@/components/json-ld'
import { articleUpdated, articleUrl, restoredArticles, type RestoredArticle } from '@/lib/restored-articles'

export default function RestoredArticlePage({ article, children }: { article: RestoredArticle; children: ReactNode }) {
  const url = articleUrl(article)
  return <div className="min-h-screen bg-white text-gray-900">
    <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
      { '@type': 'Article', '@id': `${url}#article`, url, headline: article.title,
        description: article.description, datePublished: article.published, dateModified: articleUpdated,
        author: { '@type': 'Person', name: 'Pavla Zimmermannová', url: 'https://www.linklady.cz/o-mne' },
        publisher: { '@id': 'https://www.linklady.cz/#business' },
        mainEntityOfPage: url, image: 'https://www.linklady.cz/profile.jpg', inLanguage: 'cs' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Úvod', item: 'https://www.linklady.cz' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.linklady.cz/blog' },
        { '@type': 'ListItem', position: 3, name: article.title, item: url },
      ] },
    ] }} />
    <Navigation />
    <main>
      <header className="hero-gradient text-white py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <nav aria-label="Drobečková navigace" className="text-sm mb-7 flex gap-3">
            <Link href="/" className="underline underline-offset-4">Úvod</Link><span aria-hidden="true">/</span>
            <Link href="/blog" className="underline underline-offset-4">Blog</Link>
          </nav>
          <p className="text-yellow-300 font-semibold mb-4">{article.category}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold tracking-tight break-words">{article.title}</h1>
          <p className="mt-6 text-sm leading-7">
            <Link href="/o-mne" className="underline underline-offset-4">Pavla Zimmermannová</Link><br />
            Publikováno <time dateTime={article.published}>{article.publishedLabel}</time>
            {' · '}Aktualizováno <time dateTime={articleUpdated}>19. 9. 2026</time>
          </p>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <div className="article-copy text-lg leading-relaxed text-gray-700 break-words [&>p]:mb-6 [&_h2]:text-gray-900 [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-gray-900 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_a]:text-purple-800 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-purple-600 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-3 [&_li_p]:mt-2 [&_table]:w-full [&_table]:text-base [&_table]:my-6 [&_th]:bg-purple-50 [&_th]:text-left [&_th]:p-3 [&_td]:p-3 [&_td]:align-top [&_td]:border-b [&_th]:border-b [&_blockquote]:border-l-4 [&_blockquote]:border-purple-300 [&_blockquote]:pl-5 [&_blockquote]:my-7 [&_blockquote_p]:mb-4 [&_aside]:rounded-xl [&_aside]:bg-purple-50 [&_aside]:p-5 [&_aside]:my-7 [&_code]:text-base [&_code]:break-all">
          {children}
        </div>
        <aside className="mt-12 border-t border-purple-100 pt-8">
          <h2 className="text-xl font-bold mb-4">Další články k tématu</h2>
          <ul className="space-y-4">{restoredArticles.filter(item => item.slug !== article.slug).map(item =>
            <li key={item.slug}><Link href={`/${item.slug}/`} className="text-purple-800 underline underline-offset-4">{item.title}</Link></li>
          )}</ul>
        </aside>
      </article>
    </main>
    <SiteFooter />
  </div>
}
