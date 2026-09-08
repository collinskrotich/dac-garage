import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

/** Visual breadcrumb trail. Pair with `breadcrumbSchema()` for structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted brand-body">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-divider">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-main transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-secondary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
