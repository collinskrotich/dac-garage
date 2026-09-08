import type { Testimonial } from '@/lib/testimonials'

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.2}
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.75l-5.2 2.77.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
    </svg>
  )
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card card-hover p-6 flex flex-col h-full">
      <div className="flex items-center gap-1 text-accent mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
        ))}
      </div>
      <blockquote className="brand-body text-secondary text-sm flex-1 mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption>
        <p className="brand-subheading text-main text-xs">{testimonial.name}</p>
        <p className="brand-body text-muted text-xs mt-0.5">
          {testimonial.vehicle} &middot; {testimonial.service}
        </p>
      </figcaption>
    </figure>
  )
}
