'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'Learn', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 brand-panel backdrop-blur-md border-b border-on-dark/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="DAC Auto — Home">
            {/*
              TEMP: Logo file — /public/DAC Auto Garage Logo-05.png
              Adjust width/height to match the final logo's aspect ratio.
            */}
            <Image
              src="/DAC Auto Garage Logo-05.png"
              alt="Dekker Auto Clinic logo"
              width={130}
              height={52}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`brand-label px-4 py-2 rounded-lg text-[11px] transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-on-dark/80 hover:text-on-dark hover:bg-on-dark/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/enquiry"
              className="brand-subheading inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent text-xs px-4 py-2 rounded-lg transition-colors duration-150"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-on-dark hover:bg-on-dark/10 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-on-dark/10 pb-4 pt-3">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`brand-subheading px-3 py-2.5 rounded-lg text-[11px] transition-colors ${
                    pathname === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-on-dark/80 hover:text-on-dark hover:bg-on-dark/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/enquiry"
                onClick={() => setMenuOpen(false)}
                className="brand-subheading mt-2 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-on-accent text-xs px-4 py-2.5 rounded-lg transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="brand-subheading mt-2 inline-flex items-center justify-center gap-2 border border-on-dark/30 text-on-dark text-xs px-4 py-2.5 rounded-lg transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
