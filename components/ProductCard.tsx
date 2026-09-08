import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'
import { buildWhatsAppLink, productEnquiryMessage } from '@/lib/whatsapp'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card card-hover overflow-hidden flex flex-col h-full">
      <div className="relative aspect-square bg-surface-alt">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="brand-label text-[10px] text-muted mb-2">{product.category}</span>
        <h3 className="text-lg text-main mb-2 leading-snug">{product.name}</h3>
        <p className="brand-body text-secondary text-sm mb-3 flex-1">{product.description}</p>
        {product.fitmentNote && (
          <p className="brand-body text-muted text-xs mb-4">{product.fitmentNote}</p>
        )}
        <div className="flex items-center justify-between gap-3 mt-auto">
          <span className="text-main text-sm font-semibold not-italic">
            {product.price ? `KES ${product.price.toLocaleString()}` : 'Request a quote'}
          </span>
          <Link
            href={buildWhatsAppLink(productEnquiryMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-2 px-4 text-[10px]"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  )
}
