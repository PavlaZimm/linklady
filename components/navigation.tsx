import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Linklady.cz"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-primary px-3 py-2 text-base font-semibold transition-colors"
              >
                Domů
              </Link>
              <Link
                href="/o-mne"
                className="text-gray-900 hover:text-primary px-3 py-2 text-base font-semibold transition-colors"
              >
                O mně
              </Link>
              <Link
                href="/ebook"
                className="text-gray-900 hover:text-primary px-3 py-2 text-base font-semibold transition-colors"
              >
                E-book
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 hover:text-primary px-3 py-2 text-base font-semibold transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-900 hover:text-primary px-3 py-2 text-base font-semibold transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          <details className="group relative md:hidden">
            <summary className="inline-flex cursor-pointer list-none items-center justify-center rounded-md bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Otevřít hlavní menu</span>
              <svg className="h-6 w-6 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </summary>

            <div className="absolute right-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
              <Link href="/" className="block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 transition-colors hover:bg-purple-50 hover:text-primary">
                Domů
              </Link>
              <Link href="/o-mne" className="block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 transition-colors hover:bg-purple-50 hover:text-primary">
                O mně
              </Link>
              <Link href="/ebook" className="block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 transition-colors hover:bg-purple-50 hover:text-primary">
                E-book
              </Link>
              <Link href="/blog" className="block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 transition-colors hover:bg-purple-50 hover:text-primary">
                Blog
              </Link>
              <Link href="/kontakt" className="block rounded-lg px-3 py-2 text-lg font-semibold text-gray-900 transition-colors hover:bg-purple-50 hover:text-primary">
                Kontakt
              </Link>
              <Link href="/kontakt" className="mt-2 block rounded-xl bg-purple-600 px-4 py-3 text-center text-lg font-bold text-white transition-colors hover:bg-purple-700">
                Nezávazná konzultace zdarma
              </Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}



