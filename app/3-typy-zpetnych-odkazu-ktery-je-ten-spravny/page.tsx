import RestoredArticlePage from '@/components/restored-article'
import ArticleBody from '@/content/restored/typy'
import { restoredArticles, restoredArticleMetadata } from '@/lib/restored-articles'

const article = restoredArticles[2]
export const metadata = restoredArticleMetadata(article)

export default function Page() {
  return <RestoredArticlePage article={article}><ArticleBody /></RestoredArticlePage>
}
