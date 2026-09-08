import Image from 'next/image'

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  image?: { src: string; alt: string }
  children?: React.ReactNode
}

/** Shared editorial hero for interior pages — image-led band with eyebrow + title. */
export function PageHero({ label, title, subtitle, image, children }: PageHeroProps) {
  return (
    <section className="relative bg-section border-b border-divider overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-section/90" aria-hidden="true" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <span className="brand-label text-accent text-xs">{label}</span>
        <h1 className="mt-2 text-4xl sm:text-5xl text-main leading-tight mb-4 uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="brand-body text-secondary text-lg max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}
