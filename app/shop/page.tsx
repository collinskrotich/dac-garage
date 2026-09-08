import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Section } from '@/components/Section'
import { ProductCard } from '@/components/ProductCard'
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/products'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shop — Packages, Accessories & Parts',
  description:
    "Browse DAC Auto's service packages, accessories, and consumables. Message us on WhatsApp with your vehicle details for pricing and availability.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const products = PRODUCTS.filter((p) => !category || p.category === category)

  return (
    <>
      <PageHero
        label="Shop"
        title="Packages, Accessories & Parts"
        subtitle="Browse what we offer, then send us your vehicle details on WhatsApp for accurate pricing and fitment — no checkout, no waiting on hold."
      />
      <Section>
        <nav aria-label="Filter by category" className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/shop"
            className={`brand-subheading text-[11px] px-4 py-2 rounded-full border transition-colors ${
              !category
                ? 'bg-accent border-accent text-on-accent'
                : 'border-divider text-secondary hover:border-main/40 hover:text-main'
            }`}
          >
            All Items
          </Link>
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${encodeURIComponent(cat)}`}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 card p-8 text-center">
          <p className="text-main text-lg mb-2 uppercase">Not sure what you need?</p>
          <p className="brand-body text-secondary text-sm mb-6 max-w-xl mx-auto">
            Tell us your vehicle make, model, and what you&apos;re trying to fix or upgrade — we&apos;ll recommend
            the right package or part.
          </p>
          <Link href="/enquiry" className="btn btn-primary">
            Send an Enquiry
          </Link>
        </div>
      </Section>
    </>
  )
}
