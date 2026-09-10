/**
 * TEMP: Catalogue is a browse-and-enquire shop, not checkout e-commerce.
 * `price` is either a confirmed KES amount or `null` (renders "Request a quote").
 * Images are topic-relevant online stock placeholders (loremflickr) — replace with
 * real product/service photos and approved prices before launch.
 */

export interface Product {
  id: string
  name: string
  category: 'Packages' | 'Accessories' | 'Consumables'
  description: string
  price: number | null
  image: { src: string; alt: string }
  fitmentNote?: string
}

export const PRODUCT_CATEGORIES = ['Packages', 'Accessories', 'Consumables'] as const

export const PRODUCTS: Product[] = [
  {
    id: 'signature-detail-package',
    name: 'Signature Detail Package',
    category: 'Packages',
    description:
      'Full interior and exterior detail — hand wash, clay bar decontamination, interior deep clean, and wax protection.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-car-detailing-600x600-301.jpg',
      alt: 'Full interior and exterior car detailing service',
    },
    fitmentNote: 'Suitable for sedans, SUVs and vans. Price varies by vehicle size.',
  },
  {
    id: 'express-wash-package',
    name: 'Express Wash & Vacuum',
    category: 'Packages',
    description: 'Quick exterior wash, tyre shine, and interior vacuum — done while you wait.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-carwash-600x600-302.jpg',
      alt: 'Express car wash with foam and vacuum service',
    },
  },
  {
    id: 'accident-repair-assessment',
    name: 'Accident Repair Assessment & Quote',
    category: 'Packages',
    description:
      'A full damage assessment with a written repair quote — ready to share with your insurer.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-car-dent-600x600-303.jpg',
      alt: 'Vehicle accident damage assessment and repair quote service',
    },
  },
  {
    id: 'alloy-wheel-set',
    name: 'Alloy Wheel Sets',
    category: 'Accessories',
    description: 'A curated range of alloy wheel sets for popular Nairobi vehicle models.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-wheel-alloy-600x600-304.jpg',
      alt: 'Alloy wheel set for sale',
    },
    fitmentNote: 'Confirm bolt pattern and size for your exact model before ordering.',
  },
  {
    id: 'vinyl-wrap-colours',
    name: 'Vinyl Wrap — Colour Range',
    category: 'Accessories',
    description: 'Matte, gloss, and satin vinyl wrap colours for full or partial vehicle wraps.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-car-vinylwrap-600x600-305.jpg',
      alt: 'Vinyl wrap colour range for full or partial vehicle wraps',
    },
  },
  {
    id: 'engine-oil-5w30',
    name: 'Engine Oil (5W-30, per litre)',
    category: 'Consumables',
    description: 'Quality synthetic-blend engine oil, topped up or fully changed by our technicians.', // TEMP [COPY]
    price: 1200, // TEMP [COPY]: confirm current price
    image: {
      src: '/generated/img-motoroil-600x600-306.jpg',
      alt: 'Engine oil 5W-30 synthetic blend',
    },
  },
  {
    id: 'brake-pad-set',
    name: 'Brake Pad Set (front or rear)',
    category: 'Consumables',
    description: 'OEM-spec brake pad sets, supplied and fitted by our technicians.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-brakes-car-600x600-307.jpg',
      alt: 'Brake pad set for front or rear axle',
    },
    fitmentNote: 'Price depends on vehicle make and model — confirm fitment on enquiry.',
  },
  {
    id: 'car-battery',
    name: 'Car Battery (standard sizes)',
    category: 'Consumables',
    description: 'Replacement car batteries with free testing and fitting at either branch.', // TEMP [COPY]
    price: null,
    image: {
      src: '/generated/img-carbattery-600x600-308.jpg',
      alt: 'Car battery replacement for standard vehicle sizes',
    },
  },
]
