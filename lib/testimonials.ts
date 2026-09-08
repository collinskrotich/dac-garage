/**
 * TEMP: Placeholder testimonials — do not present as real customer reviews.
 * Replace `name`, `quote`, `rating`, and `sourceUrl` with approved, attributable
 * customer feedback (and a link to the original review where possible) before launch.
 */
export interface Testimonial {
  id: string
  name: string
  vehicle: string
  service: string
  rating: 1 | 2 | 3 | 4 | 5
  quote: string
  sourceUrl?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Placeholder Customer', // TEMP [COPY]: replace with approved name
    vehicle: 'Toyota Axio',
    service: 'Car Wash & Detailing',
    rating: 5,
    quote:
      'Placeholder review text — replace with an approved customer quote before launch.', // TEMP [COPY]
  },
  {
    id: 'testimonial-2',
    name: 'Placeholder Customer', // TEMP [COPY]
    vehicle: 'Subaru Forester',
    service: 'Paint & Accident Repairs',
    rating: 5,
    quote:
      'Placeholder review text — replace with an approved customer quote before launch.', // TEMP [COPY]
  },
  {
    id: 'testimonial-3',
    name: 'Placeholder Customer', // TEMP [COPY]
    vehicle: 'Mazda Demio',
    service: 'Customisation & Tuning',
    rating: 4,
    quote:
      'Placeholder review text — replace with an approved customer quote before launch.', // TEMP [COPY]
  },
  {
    id: 'testimonial-4',
    name: 'Placeholder Customer', // TEMP [COPY]
    vehicle: 'Nissan X-Trail',
    service: 'Car Wash & Detailing',
    rating: 5,
    quote:
      'Placeholder review text — replace with an approved customer quote before launch.', // TEMP [COPY]
  },
]
