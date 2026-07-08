'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BUSINESS } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 brand-panel backdrop-blur-md border-b border-divider">
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
                    : 'text-main/80 hover:text-main hover:bg-main/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-subheading inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-main text-xs px-4 py-2 rounded-lg transition-colors duration-150"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-main hover:bg-main/10 transition-colors"
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
          <div id="mobile-menu" className="md:hidden border-t border-divider pb-4 pt-3">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`brand-subheading px-3 py-2.5 rounded-lg text-[11px] transition-colors ${
                    pathname === link.href
                      ? 'text-accent bg-accent/10'
                      : 'text-main/80 hover:text-main hover:bg-main/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="brand-subheading mt-2 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-main text-xs px-4 py-2.5 rounded-lg transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
