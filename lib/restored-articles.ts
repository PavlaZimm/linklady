import type { Metadata } from 'next'
import { restoredArticleSlugs } from './restored-article-paths'

export const restoredArticles = [
  {
    slug: restoredArticleSlugs[0],
    title: 'Barterová spolupráce: kdy se vyplatí a co domluvit',
    description: 'Barterová spolupráce v praxi: co si domluvit, jak spočítat náklady a označit reklamu. Příklady výměny služeb i checklist před dohodou.',
    category: 'Spolupráce',
    published: '2021-06-22T11:41:26+00:00',
    publishedLabel: '22. 6. 2021',
  },
  {
    slug: restoredArticleSlugs[1],
    title: 'Jak získat zpětné odkazy: 11 postupů pro firmy',
    description: 'Jak získat zpětné odkazy z relevantních webů. Jedenáct postupů, příklady, chyby a měření návštěvnosti, které pomůže vybrat další krok.',
    category: 'Linkbuilding',
    published: '2021-05-14T12:00:25+00:00',
    publishedLabel: '14. 5. 2021',
  },
  {
    slug: restoredArticleSlugs[2],
    title: 'Zpětné odkazy: 3 typy a jak posoudit jejich přínos',
    description: 'Zpětné odkazy redakční, reklamní a uživatelské. Co znamená sponsored, ugc a nofollow a podle čeho posoudit přínos konkrétního odkazu.',
    category: 'SEO',
    published: '2021-04-07T12:31:53+00:00',
    publishedLabel: '7. 4. 2021',
  },
  {
    slug: restoredArticleSlugs[3],
    title: 'Linkbuilding outreach: výběr webů a oslovení',
    description: 'Linkbuilding outreach krok za krokem: výběr vhodného webu, nabídka podkladů, vzor domluveného e-mailu a vyhodnocení získaných odkazů.',
    category: 'Linkbuilding',
    published: '2024-04-17T14:02:32+02:00',
    publishedLabel: '17. 4. 2024',
  },
] as const

export type RestoredArticle = typeof restoredArticles[number]
export const articleUpdated = '2026-09-19'
export const articleUrl = (article: RestoredArticle) => `https://www.linklady.cz/${article.slug}/`

export function restoredArticleMetadata(article: RestoredArticle): Metadata {
  return {
    title: { absolute: `${article.title} | Linklady` },
    description: article.description,
    authors: [{ name: 'Pavla Zimmermannová', url: 'https://www.linklady.cz/o-mne' }],
    alternates: { canonical: articleUrl(article) },
    openGraph: {
      type: 'article', locale: 'cs_CZ', siteName: 'Linklady.cz',
      title: article.title, description: article.description, url: articleUrl(article),
      publishedTime: article.published, modifiedTime: articleUpdated,
      images: [{ url: '/profile.jpg', width: 500, height: 600, alt: 'Pavla Zimmermannová, autorka Linklady' }],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: ['/profile.jpg'] },
  }
}
