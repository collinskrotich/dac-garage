'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { MapEmbed } from '@/components/MapEmbed'
import { BUSINESS, BRANCHES } from '@/lib/constants'

/* Metadata is handled by the Server Component wrapper below */

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFeedback(data.message)
        setForm(INITIAL)
      } else {
        setStatus('error')
        setFeedback(data.message ?? 'Something went wrong. Please try WhatsApp instead.')
      }
    } catch {
      setStatus('error')
      setFeedback('Network error. Please try WhatsApp instead.')
    }
  }

  const inputCls =
    'w-full bg-surface border border-divider rounded-xl px-4 py-3 text-main text-sm placeholder:text-secondary focus:outline-none focus:border-accent transition-colors'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="brand-subheading block text-xs text-main mb-1.5">
            Full Name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. John Kamau"
            value={form.name}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="phone" className="brand-subheading block text-xs text-main mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254 700 000 000"
            value={form.phone}
            onChange={handleChange}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="brand-subheading block text-xs text-main mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputCls}
        />
      </div>

      <div>
        <label htmlFor="service" className="brand-subheading block text-xs text-main mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputCls}
        >
          <option value="">Select a service…</option>
          <option value="car-wash-detailing">Car Wash &amp; Detailing</option>
          <option value="paint-accident-repairs">Paint &amp; Accident Repairs</option>
          <option value="customisation-tuning">Customisation &amp; Tuning</option>
          <option value="other">Other / General Enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="brand-subheading block text-xs text-main mb-1.5">
          Message <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your car and what you need…"
          value={form.message}
          onChange={handleChange}
          className={`${inputCls} resize-none`}
        />
      </div>

      {/* Feedback */}
      {feedback && (
        <p
          role="alert"
          className={`text-sm px-4 py-3 rounded-xl border ${
            status === 'success'
              ? 'bg-green-900/20 border-green-700/30 text-green-400'
              : 'bg-red-900/20 border-red-700/30 text-red-400'
          }`}
        >
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="brand-subheading w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-on-accent py-3.5 rounded-xl transition-colors text-xs"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="brand-body text-secondary text-xs text-center">
        For the fastest response, reach us directly on{' '}
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          WhatsApp
        </a>
        .
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-section py-16 md:py-20 border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="brand-label text-accent text-xs">
            Get In Touch
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl text-main leading-tight mb-4 uppercase">
            Contact Us
          </h1>
          <p className="brand-body text-secondary text-lg max-w-2xl">
            {/* TEMP [COPY] */}
            Have a question or ready to book? Drop us a message, call us on WhatsApp, or
            come visit us at either of our Nairobi branches.
          </p>
          <p className="brand-body text-secondary text-sm mt-4">
            Looking to book a specific service or get a quote?{' '}
            <Link href="/enquiry" className="text-accent hover:underline underline-offset-4">
              Use our quote form
            </Link>{' '}
            for a faster response.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-lg text-main mb-4 uppercase">Contact Details</h2>

                {/* WhatsApp */}
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-surface border border-divider rounded-xl hover:border-accent/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#25D366' }}>
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="brand-label text-[10px] text-secondary">WhatsApp</p>
                    <p className="brand-subheading text-main text-xs group-hover:text-accent transition-colors">
                      {BUSINESS.whatsapp}
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={BUSINESS.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-surface border border-divider rounded-xl hover:border-accent/40 transition-colors group mt-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="brand-label text-[10px] text-secondary">Instagram</p>
                    <p className="brand-subheading text-main text-xs group-hover:text-accent transition-colors">
                      @{BUSINESS.instagram}
                    </p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div>
                <h3 className="brand-subheading text-xs text-main mb-3">
                  Locations
                </h3>
                {BRANCHES.map((branch) => (
                  <div
                    key={branch.name}
                    className="flex items-start gap-3 p-4 bg-surface border border-divider rounded-xl mb-3"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <div>
                      <p className="brand-subheading text-main text-xs">{branch.name}</p>
                      <p className="brand-body text-secondary text-xs mt-0.5">{branch.address}</p>
                      <a
                        href={`mailto:${branch.email}`}
                        className="brand-body text-accent text-xs mt-0.5 inline-block hover:underline"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <MapEmbed height="220px" />
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-lg text-main mb-6 uppercase">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
