'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="Linklady.cz"
                width={140}
                height={40}
                className="h-8 w-auto"
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-primary block px-3 py-2 text-lg font-semibold transition-colors"
              >
                Domů
              </Link>
              <Link
                href="/o-mne"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-primary block px-3 py-2 text-lg font-semibold transition-colors"
              >
                O mně
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-primary block px-3 py-2 text-lg font-semibold transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/kontakt"
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-primary block px-3 py-2 text-lg font-semibold transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}




