import { BUSINESS } from '@/lib/constants'

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function buildWhatsAppLink(message: string): string {
  const digits = BUSINESS.whatsapp.replace(/[^\d]/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function serviceEnquiryMessage(serviceTitle: string): string {
  return `Hi DAC Auto, I'd like a quote for: ${serviceTitle}.`
}

export function productEnquiryMessage(productName: string): string {
  return `Hi DAC Auto, I'm interested in: ${productName}. Is it available?`
}
