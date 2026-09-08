/**
 * DAC Auto — Business Constants
 * -----------------------------------------------
 * TEMP: All copy marked [COPY] should be reviewed/replaced with
 *       final marketing copy from the client.
 * -----------------------------------------------
 */

export const BUSINESS = {
  name: 'Dekker Auto Clinic',
  shortName: 'DAC Auto',
  tagline: 'All In One Auto-Care!', // TEMP: confirm with brand guide
  whatsapp: '+254 777 223 010',
  whatsappLink: 'https://wa.me/254777223010',
  instagram: 'dac.auto.ke',
  instagramLink: 'https://instagram.com/dac.auto.ke',
  address: 'Mai Mahiu Rd, Langata, Mbagathi, Nairobi Area, Kenya 00100',
  locations: ["Lang'ata", 'Upperhill'],
  googleMapsLink:
    'https://maps.google.com/?q=Mai+Mahiu+Rd,Langata,Nairobi,Kenya',
  googleMapsEmbed:
    'https://maps.google.com/maps?q=Mai+Mahiu+Rd+Langata+Nairobi+Kenya&output=embed&iwloc=&z=15',
} as const

/** Per-branch contact details — used on Contact, home Location section, and Footer. */
export const BRANCHES = [
  {
    name: "Lang'ata",
    address: BUSINESS.address,
    email: 'langata@dautoclinic.com',
  },
  {
    name: 'Upperhill',
    address: 'Upperhill, Nairobi', // TEMP: add full Upperhill street address
    email: 'upperhill@dautoclinic.com',
  },
] as const

export const SERVICES = [
  {
    id: 'car-wash-detailing',
    title: 'Car Wash & Detailing',
    shortDesc:
      'Professional wash, polish, and full interior/exterior detailing — we restore your car to showroom condition.', // [COPY]
    description: `
      From express washes to full multi-step detail packages, our team treats every vehicle with the care it deserves.
      We use premium products to clean, decontaminate, polish, and protect every surface — inside and out.
    `, // [COPY]
    icon: 'wash',
    href: '/services#car-wash-detailing',
  },
  {
    id: 'paint-accident-repairs',
    title: 'Paint & Accident Repairs',
    shortDesc:
      'Expert bodywork and paint restoration — from minor dents to full post-accident rebuilds.', // [COPY]
    description: `
      Our skilled panel beaters and painters handle everything from small stone chips and dents to major collision 
      repairs. We use modern spray booths and OEM-matched paints for results that look factory-fresh.
    `, // [COPY]
    icon: 'paint',
    href: '/services#paint-accident-repairs',
  },
  {
    id: 'customisation-tuning',
    title: 'Customisation & Tuning',
    shortDesc:
      'Make your car uniquely yours — custom wraps, body kits, performance upgrades, and personalised styling.', // [COPY]
    description: `
      Whether you want a subtle tint, a full colour wrap, aftermarket wheels, suspension upgrades, or a complete 
      performance tune — we bring your vision to life with precision and craftsmanship.
    `, // [COPY]
    icon: 'tune',
    href: '/services#customisation-tuning',
  },
] as const

/** Approved proof points — do not add unverified figures here. */
export const STATS = [
  { value: '3,000+', label: 'Cars Serviced Annually' },
  { value: '95%', label: 'Customer Satisfaction' },
  { value: '2', label: 'Nairobi Locations' },
] as const

/** Site-wide FAQ — also rendered as FAQPage structured data on the home page. */
export const SITE_FAQS = [
  {
    question: 'Which areas of Nairobi does DAC Auto serve?',
    answer:
      "We operate from Lang'ata and Upperhill, and regularly serve customers from across greater Nairobi.",
  },
  {
    question: 'Do I need an appointment for a car wash or detailing service?',
    answer:
      'Walk-ins are welcome, but messaging us on WhatsApp first helps us confirm availability and give you an accurate time estimate.',
  },
  {
    question: 'Can DAC Auto help with an insurance repair claim?',
    answer:
      "Yes — we can prepare repair quotes and documentation for your insurer. We always recommend confirming your policy's specific requirements with your insurance provider first.",
  },
  {
    question: 'How do I get a price for my vehicle?',
    answer:
      "Pricing depends on your vehicle and the work required. Send us your vehicle details and service on WhatsApp or the enquiry form and we'll respond with a quote.",
  },
] as const

export const WHY_US = [
  {
    title: 'Experienced Technicians', // [COPY]
    desc: 'Our team brings years of hands-on expertise across all major vehicle makes and models.', // [COPY]
    icon: 'tech',
  },
  {
    title: 'Fast Turnaround', // [COPY]
    desc: 'We respect your time. Most services are completed same-day or next-day.', // [COPY]
    icon: 'speed',
  },
  {
    title: 'Premium Quality', // [COPY]
    desc: 'We use only quality materials and follow best-practice finishing techniques on every job.', // [COPY]
    icon: 'quality',
  },
  {
    title: 'Transparent Pricing', // [COPY]
    desc: "No hidden costs. We give you a clear quote before any work starts — you're always in control.", // [COPY]
    icon: 'price',
  },
  {
    title: 'Two Convenient Locations', // [COPY]
    desc: "Serving Nairobi from Lang'ata and Upperhill — easy to reach from anywhere in the city.", // [COPY]
    icon: 'location',
  },
  {
    title: 'Book via WhatsApp', // [COPY]
    desc: 'The fastest way to book is through WhatsApp — get a quote and schedule in minutes.', // [COPY]
    icon: 'whatsapp',
  },
] as const
