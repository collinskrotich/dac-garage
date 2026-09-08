import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Section } from '@/components/Section'
import { TestimonialCard } from '@/components/TestimonialCard'
import { TrustStats } from '@/components/TrustStats'
import { TESTIMONIALS } from '@/lib/testimonials'
import { BUSINESS } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    "What DAC Auto customers say about our car wash, detailing, paint & accident repair, and customisation services in Nairobi.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Testimonials"
        title="What Our Customers Say"
        subtitle="TEMP: The reviews below are placeholders pending approved customer testimonials — replace before launch."
      />

      <Section className="bg-base">
        <TrustStats className="mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>

      <section className="py-16 px-4 text-center bg-section border-t border-divider">
        <h2 className="text-2xl sm:text-3xl text-main mb-3 uppercase">Ready to become our next success story?</h2>
        <p className="brand-body text-secondary mb-7">Book your next service on WhatsApp or send us an enquiry.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/enquiry" className="btn btn-primary">
            Book a Service
          </Link>
          <Link href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Chat on WhatsApp
          </Link>
        </div>
      </section>
    </>
  )
}
