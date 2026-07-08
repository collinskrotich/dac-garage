import Link from 'next/link'

/* ---- Service-type icon SVGs ---- */
function WashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M6.343 6.343l-1.06 1.06M3 12H1.5M6.343 17.657l-1.06-1.06M12 21v-1.5M17.657 17.657l1.06-1.06M21 12h-1.5M17.657 6.343l1.06 1.06" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1 1 4 1 4-1 4-1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5C7.5 8.01 9.51 6 12 6s4.5 2.01 4.5 4.5V12h-9v-1.5z" />
    </svg>
  )
}

function PaintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 5.25 5.25 5.25m0 0 5.25-5.25M10.5 10.5 7.875 7.875M10.5 10.5l3.375 3.375M10.5 10.5l5.25-5.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 4.5 12 8.25" />
    </svg>
  )
}

function TuneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  )
}

const iconMap = {
  wash: WashIcon,
  paint: PaintIcon,
  tune: TuneIcon,
}

interface ServiceCardProps {
  title: string
  description: string
  icon: keyof typeof iconMap
  href: string
  /** If true, renders a larger featured card layout */
  featured?: boolean
}

export function ServiceCard({ title, description, icon, href, featured = false }: ServiceCardProps) {
  const Icon = iconMap[icon]

  return (
    <div
      className={`group relative bg-surface border border-divider rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 ${
        featured ? 'lg:p-8' : ''
      }`}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-main transition-colors duration-300">
        <Icon />
      </div>

      {/* Title */}
      <h3
        className={`text-main mb-3 group-hover:text-accent transition-colors duration-200 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="brand-body text-secondary text-sm mb-5">{description}</p>

      {/* CTA */}
      <Link
        href={href}
        className="brand-subheading inline-flex items-center gap-2 text-accent text-xs hover:gap-3 transition-all duration-200"
      >
        Learn more
        <svg
          className="w-4 h-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  )
}
