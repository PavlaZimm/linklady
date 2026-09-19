import RestoredArticlePage from '@/components/restored-article'
import ArticleBody from '@/content/restored/tipy'
import { restoredArticles, restoredArticleMetadata } from '@/lib/restored-articles'

const article = restoredArticles[1]
export const metadata = restoredArticleMetadata(article)

export default function Page() {
  return <RestoredArticlePage article={article}><ArticleBody /></RestoredArticlePage>
}
