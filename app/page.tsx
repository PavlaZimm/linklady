import Navigation from '@/components/navigation'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import HomePageContent from '@/components/home-page-content'

export const metadata: Metadata = siteMetadata['/']

export default function Home() {
  return (
    <>
      <Navigation />
      <HomePageContent />
    </>
  )
}



