import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/blog'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPostPreview({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={`card card-hover overflow-hidden flex flex-col h-full ${featured ? 'sm:col-span-2' : ''}`}>
      <Link href={`/blog/${article.slug}`} className="relative aspect-[16/10] block overflow-hidden">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <span className="badge mb-3 self-start">{article.category}</span>
        <h3 className="text-lg text-main mb-2 leading-snug">
          <Link href={`/blog/${article.slug}`} className="hover:text-accent transition-colors">
            {article.title}
          </Link>
        </h3>
        <p className="brand-body text-secondary text-sm line-clamp-3 mb-4 flex-1">{article.excerpt}</p>
        <p className="brand-label text-muted text-[10px]">
          {formatDate(article.publishedAt)} &middot; {article.readingTimeMinutes} min read
        </p>
      </div>
    </article>
  )
}
