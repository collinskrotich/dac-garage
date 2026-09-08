import { BUSINESS, BRANCHES } from '@/lib/constants'
import type { Article } from '@/lib/blog'
import type { Testimonial } from '@/lib/testimonials'

const SITE_URL = 'https://dacauto.co.ke' // TEMP: replace with the final production domain

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/** Root LocalBusiness/AutoRepair schema — render once, on the home page. */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    image: absoluteUrl('/DAC Auto Garage Logo-05.png'),
    url: SITE_URL,
    telephone: BUSINESS.whatsapp,
    email: BRANCHES[0].email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address,
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    areaServed: BUSINESS.locations,
    sameAs: [BUSINESS.instagramLink],
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: SITE_URL,
    logo: absoluteUrl('/DAC Auto Garage Logo-05.png'),
    sameAs: [BUSINESS.instagramLink],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS.name,
    url: SITE_URL,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function articleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: organizationSchema(),
    mainEntityOfPage: absoluteUrl(`/blog/${article.slug}`),
  }
}

export function serviceSchema(service: { title: string; shortDesc: string; id: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    description: service.shortDesc,
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.locations,
    url: absoluteUrl(`/services#${service.id}`),
  }
}

/**
 * Only rendered where testimonials are approved, attributable customer feedback.
 * TEMP: current testimonial data is placeholder — do not treat as real ratings.
 */
export function aggregateRatingSchema(testimonials: Testimonial[]) {
  if (testimonials.length === 0) return null
  const avg =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: Math.round(avg * 10) / 10,
    reviewCount: testimonials.length,
    itemReviewed: {
      '@type': 'AutoRepair',
      name: BUSINESS.name,
    },
  }
}

export { SITE_URL }
