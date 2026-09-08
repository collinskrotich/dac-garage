import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Section } from '@/components/Section'
import { BlogPostPreview } from '@/components/BlogPostPreview'
import { BLOG_CATEGORIES, getAllArticles } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Learn — Car Care & Insurance Guides',
  description:
    "Practical guides on insurance claims, garage inspections, buying a used car, new-driver safety, and everyday maintenance — from DAC Auto's Nairobi technicians.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const articles = getAllArticles().filter((a) => !category || a.category === category)

  return (
    <>
      <PageHero
        label="Learn"
        title="Car Care & Insurance Guides"
        subtitle="Practical, Nairobi-aware guides written by our technicians — from insurance claims to checking your own oil and brakes."
      />
      <Section>
        <nav aria-label="Filter by category" className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/blog"
            className={`brand-subheading text-[11px] px-4 py-2 rounded-full border transition-colors ${
              !category
                ? 'bg-accent border-accent text-on-accent'
                : 'border-divider text-secondary hover:border-main/40 hover:text-main'
            }`}
          >
            All Guides
          </Link>
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`brand-subheading text-[11px] px-4 py-2 rounded-full border transition-colors ${
                category === cat
                  ? 'bg-accent border-accent text-on-accent'
                  : 'border-divider text-secondary hover:border-main/40 hover:text-main'
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <BlogPostPreview key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="brand-body text-secondary">No guides found in this category yet.</p>
        )}
      </Section>
    </>
  )
}
