import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

/**
 * Consistent section wrapper — provides vertical rhythm and a centred max-width container.
 * Use `className` to override background colour on a per-section basis.
 */
export function Section({ children, className = '', id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </Tag>
  )
}

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
}

/** Reusable eyebrow-label + heading + optional subtitle block. */
export function SectionHeading({ label, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <span className="brand-label text-accent text-xs">
          {label}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl text-main leading-tight">{title}</h2>
      {subtitle && (
        <p className="brand-body mt-4 text-secondary text-lg max-w-2xl">
          {/* TEMP: Replace subtitle copy when brand messaging is finalised */}
          {subtitle}
        </p>
      )}
    </div>
  )
}
