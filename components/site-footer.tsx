import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Linklady.cz</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Online marketing, SEO a AI automatizace.
              Měřitelné výsledky pro firmy, které chtějí růst.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Rychlé odkazy</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Úvod</Link></li>
              <li><Link href="/o-mne" className="text-gray-300 hover:text-yellow-400 transition-colors">O mně</Link></li>
              <li><Link href="/seo-konzultant-usti-nad-labem" className="text-gray-300 hover:text-yellow-400 transition-colors">SEO Ústí nad Labem</Link></li>
              <li><Link href="/tvorba-webu-bilina" className="text-gray-300 hover:text-yellow-400 transition-colors">Tvorba webu Bílina</Link></li>
              <li><Link href="/automatizace" className="text-gray-300 hover:text-yellow-400 transition-colors">Automatizace</Link></li>
              <li><Link href="/ai-agent" className="text-gray-300 hover:text-yellow-400 transition-colors">AI agent</Link></li>
              <li><Link href="/webova-aplikace" className="text-gray-300 hover:text-yellow-400 transition-colors">Webová aplikace</Link></li>
              <li><Link href="/vibecoding" className="text-gray-300 hover:text-yellow-400 transition-colors">Vibecoding</Link></li>
              <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400 transition-colors">E-book</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700/50">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Pavla Zimmermannová</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Vedena na FÚ Bílina</p>
              <p>IČO: 04352041</p>
              <p>
                E-mail:{' '}
                <a href="mailto:zimmermannovap@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  zimmermannovap@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Linklady.cz – Všechna práva vyhrazena
          </p>
        </div>
      </div>
    </footer>
  )
}
