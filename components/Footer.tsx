import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS, BRANCHES } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'Learn', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/enquiry' },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t border-divider" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* TEMP: Logo — replace if brand guide specifies a reversed/light version */}
            <Link href="/" aria-label="DAC Auto — Home">
              <Image
                src="/DAC Auto Garage Logo-05.png"
                alt="Dekker Auto Clinic logo"
                width={130}
                height={52}
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p className="brand-body text-secondary text-sm">
              {/* TEMP [COPY]: Replace with final brand tagline / elevator pitch */}
              Full-service auto care in the heart of Nairobi. Wash, repair, customise — all in one place.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href={BUSINESS.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DAC Auto on Instagram"
                className="text-secondary hover:text-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with DAC Auto on WhatsApp"
                className="text-secondary hover:text-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="brand-subheading text-main text-xs mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="brand-body text-secondary hover:text-main text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="brand-subheading text-main text-xs mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Car Wash & Detailing', href: '/services#car-wash-detailing' },
                { label: 'Paint & Accident Repairs', href: '/services#paint-accident-repairs' },
                { label: 'Customisation & Tuning', href: '/services#customisation-tuning' },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="brand-body text-secondary hover:text-main text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="brand-subheading text-main text-xs mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-secondary">
              <li className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>
                  {BUSINESS.address}
                  <br />
                  <span className="text-accent font-medium">
                    {BUSINESS.locations.join(' | ')}
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors"
                >
                  {BUSINESS.whatsapp}
                </a>
              </li>
              {BRANCHES.map((branch) => (
                <li key={branch.email}>
                  <a href={`mailto:${branch.email}`} className="hover:text-main transition-colors">
                    {branch.name}: {branch.email}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-main transition-colors"
                >
                  @{BUSINESS.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-divider flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            {/* TEMP [COPY]: Replace with final legal copy if needed */}
            Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
