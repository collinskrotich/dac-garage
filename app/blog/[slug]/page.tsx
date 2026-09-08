import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/Section'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { BlogPostPreview } from '@/components/BlogPostPreview'
import { FaqAccordion } from '@/components/FaqAccordion'
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/blog'
import { SERVICES, BUSINESS } from '@/lib/constants'
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedArticles(article)
  const relatedServices = SERVICES.filter((s) => article.relatedServiceIds?.includes(s.id))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Learn', path: '/blog' },
              { name: article.title, path: `/blog/${article.slug}` },
            ])
          ),
        }}
      />
      {article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(article.faqs)) }}
        />
      )}

      <section className="bg-section border-b border-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Learn', href: '/blog' },
              { label: article.category, href: `/blog?category=${encodeURIComponent(article.category)}` },
            ]}
          />
          <span className="badge mb-4">{article.category}</span>
          <h1 className="text-3xl sm:text-4xl text-main leading-tight mb-4">{article.title}</h1>
          <p className="brand-body text-secondary text-lg mb-4">{article.excerpt}</p>
          <p className="brand-label text-muted text-[11px]">
            By {article.author} &middot; {formatDate(article.publishedAt)} &middot;{' '}
            {article.readingTimeMinutes} min read
          </p>
        </div>
      </section>

      <div className="relative aspect-[21/9] max-h-[420px] w-full overflow-hidden border-b border-divider">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <Section as="article" className="bg-base">
        <div className="max-w-3xl mx-auto">
          {article.disclaimer && (
            <p className="brand-body text-sm text-secondary bg-surface border border-divider rounded-xl px-5 py-4 mb-10">
              <strong className="text-main not-italic">Please note: </strong>
              {article.disclaimer}
            </p>
          )}

          <div className="prose-dac">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          {article.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl text-main mb-2">Frequently Asked Questions</h2>
              <FaqAccordion items={article.faqs} />
            </div>
          )}

          {relatedServices.length > 0 && (
            <div className="mt-12 card p-6">
              <h2 className="text-lg text-main mb-3">Related Service</h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link key={service.id} href={service.href} className="btn btn-outline text-[11px] py-2 px-4">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/enquiry" className="btn btn-primary">
              Book a Check-Up
            </Link>
            <Link
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Ask Us on WhatsApp
            </Link>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-section border-t border-divider">
          <h2 className="text-2xl sm:text-3xl text-main mb-8">More Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a) => (
              <BlogPostPreview key={a.slug} article={a} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
