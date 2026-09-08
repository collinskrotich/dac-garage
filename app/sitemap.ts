import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structured-data'
import { getAllArticles } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/shop',
    '/blog',
    '/gallery',
    '/testimonials',
    '/contact',
    '/enquiry',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const articleRoutes = getAllArticles().map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }))

  return [...staticRoutes, ...articleRoutes]
}
