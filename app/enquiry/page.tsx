import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Section } from '@/components/Section'
import { EnquiryForm } from './EnquiryForm'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Book a Service / Get a Quote',
  description:
    'Request a quote or book a service at DAC Auto — tell us your vehicle and what you need, and we\'ll respond by phone, email, or WhatsApp.',
};

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        label="Book a Service"
        title="Get a Quote"
        subtitle="Tell us about your vehicle and what you need — we'll come back to you with pricing and the next available slot."
      />
      <Section>
        <div className="max-w-2xl mx-auto">
          <EnquiryForm />
          <p className="brand-body text-secondary text-xs text-center mt-6">
            Prefer to talk it through? Call or WhatsApp us on{' '}
            <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              {BUSINESS.whatsapp}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  )
}
