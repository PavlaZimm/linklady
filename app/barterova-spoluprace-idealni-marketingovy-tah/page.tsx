import RestoredArticlePage from '@/components/restored-article'
import ArticleBody from '@/content/restored/barter'
import { restoredArticles, restoredArticleMetadata } from '@/lib/restored-articles'

const article = restoredArticles[0]
export const metadata = restoredArticleMetadata(article)

export default function Page() {
  return <RestoredArticlePage article={article}><ArticleBody /></RestoredArticlePage>
}
