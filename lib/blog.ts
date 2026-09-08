/**
 * Educational content — static, in-repository articles for launch.
 * TEMP: General guidance only, not legal, insurance, or safety advice for a specific
 * situation. Insurance-related content should get a legal/editorial review before
 * publishing, and safety-sensitive procedures (tyres, brakes) carry a disclaimer.
 */

import { placeholderImage } from '@/lib/placeholder-image'

export const BLOG_CATEGORIES = [
  'Insurance',
  'Garage Care',
  'Buying a Car',
  'Driver Safety',
  'Maintenance Basics',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export interface ArticleSection {
  heading: string
  body: string[]
}

export interface ArticleFaq {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  category: BlogCategory
  excerpt: string
  publishedAt: string
  readingTimeMinutes: number
  author: string
  heroImage: { src: string; alt: string }
  disclaimer?: string
  sections: ArticleSection[]
  faqs: ArticleFaq[]
  relatedServiceIds?: string[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'insurance-claims-after-an-accident-in-kenya',
    title: 'Insurance Claims After an Accident: A Practical Guide for Nairobi Drivers',
    category: 'Insurance',
    excerpt:
      'What to do in the first hour after an accident, how to document damage properly, and how a garage-prepared quote speeds up your claim.',
    publishedAt: '2026-01-12',
    readingTimeMinutes: 7,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['car', 'accident'], 1200, 675, 401),
      alt: 'Vehicle damage assessment — placeholder image, replace with real garage photo',
    },
    disclaimer:
      "This article is general information, not legal or insurance advice. Your policy's terms take precedence — always confirm claim steps and deadlines directly with your insurer.",
    sections: [
      {
        heading: 'Immediately after the accident',
        body: [
          'Before anything else, check that everyone involved is safe, move vehicles out of moving traffic if it is safe to do so, and switch on hazard lights. If anyone is injured, call emergency services first.',
          'Take photos of all vehicles involved from multiple angles, the road position, number plates, and any visible injuries or road damage, before vehicles are moved if possible. Note the time, location, and weather conditions.',
          'Exchange names, phone numbers, insurance details, and vehicle registration with the other driver. Where police attend the scene, request the OB (occurrence book) number or accident report reference — most Kenyan insurers require this to process a claim.',
        ],
      },
      {
        heading: 'Reporting the claim',
        body: [
          'Contact your insurer or broker as soon as possible — many policies specify a reporting window (often 24–48 hours). Have your policy number, the other party\'s details, and your photos ready.',
          'Ask your insurer whether they require an approved garage or assessor to inspect the vehicle before repairs start. Starting repairs too early can complicate or invalidate a claim.',
        ],
      },
      {
        heading: 'Getting a repair quote and assessment',
        body: [
          'A written, itemised repair quote makes the claims process faster for both you and your insurer. We can assess visible and hidden damage (panel, paint, mechanical, and electrical) and prepare a documented quote you can forward to your insurer or assessor.',
          'If your insurer sends their own assessor, we can coordinate directly with them on-site to agree on the scope of work before repairs begin.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need police attendance for every accident?',
        answer:
          'Requirements vary by insurer and by the severity of the accident. Check your policy wording, and where there is significant damage, injury, or dispute about fault, involving the police is strongly recommended.',
      },
      {
        question: 'Can I get repairs started before my insurer approves the claim?',
        answer:
          "It's best not to. Starting work before assessment can make it harder for your insurer to verify the damage was caused by the reported incident, which can delay or reduce your payout.",
      },
      {
        question: 'Can DAC Auto deal with my insurer directly?',
        answer:
          'We can prepare documented quotes and coordinate with your insurer\'s assessor. The claim decision itself always sits with your insurance provider.',
      },
    ],
    relatedServiceIds: ['paint-accident-repairs'],
  },
  {
    slug: 'why-regular-garage-visits-matter',
    title: 'Why Regular Garage Visits Matter More Than You Think',
    category: 'Garage Care',
    excerpt:
      'Small, regular check-ups catch problems while they are cheap to fix. Here is what a scheduled garage visit actually protects you from.',
    publishedAt: '2026-02-03',
    readingTimeMinutes: 5,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['mechanic', 'garage'], 1200, 675, 402),
      alt: 'Technician inspecting a vehicle — placeholder image, replace with real garage photo',
    },
    sections: [
      {
        heading: 'Small problems are cheap; ignored problems are not',
        body: [
          "A worn belt, a slow brake fluid leak, or a battery nearing the end of its life rarely show obvious symptoms until they fail — usually at an inconvenient time. Regular inspection catches these while a fix is quick and inexpensive.",
          'Nairobi driving conditions — stop-start traffic, dust, and variable road quality — put extra strain on brakes, suspension, and cooling systems compared to lighter use elsewhere.',
        ],
      },
      {
        heading: 'What a routine visit typically covers',
        body: [
          'Fluid levels and condition (engine oil, coolant, brake fluid, power steering fluid), tyre tread and pressure, brake pad thickness, battery health, belts and hoses, and a general check of lights and wipers.',
          'Most of these checks take under an hour and can be booked alongside a wash or detailing visit.',
        ],
      },
      {
        heading: 'Protecting resale value and safety',
        body: [
          'A documented service history is one of the first things a buyer or dealer checks before making an offer on a used car. Regular garage visits build that history and support a stronger resale price.',
          'More importantly, worn brakes, tyres, and steering components are safety issues first — catching them early protects you and everyone else on the road.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should I bring my car in for a check-up?',
        answer:
          'As a general guide, every 5,000–10,000 km or every 3–6 months, whichever comes first — more often for older vehicles or high-mileage commuting.',
      },
      {
        question: 'Is a routine check-up expensive?',
        answer:
          'A basic inspection is usually low-cost compared to the repair bill for a problem caught late. Ask us for a quote before any work begins.',
      },
    ],
    relatedServiceIds: ['car-wash-detailing'],
  },
  {
    slug: 'pre-purchase-and-periodic-inspection-checklist',
    title: 'The Vehicle Inspection Checklist: What a Thorough Inspection Actually Covers',
    category: 'Garage Care',
    excerpt:
      'Whether you are buying a used car or booking a periodic check-up, here is what a proper inspection looks at — and why each item matters.',
    publishedAt: '2026-02-18',
    readingTimeMinutes: 6,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['mechanic', 'inspection'], 1200, 675, 403),
      alt: 'Vehicle inspection — placeholder image, replace with real garage photo',
    },
    sections: [
      {
        heading: 'Exterior and structural checks',
        body: [
          'A thorough inspection looks past cosmetic condition for signs of prior accident repair: mismatched panel gaps, overspray, and inconsistent paint texture can all indicate previous bodywork.',
          'Underbody rust, frame damage, and worn suspension bushings are checked from beneath the vehicle where possible — issues that are invisible from a quick walk-around.',
        ],
      },
      {
        heading: 'Mechanical and fluid checks',
        body: [
          'Engine oil condition and level, coolant condition, transmission fluid (where accessible), brake fluid, and power steering fluid are checked for level, colour, and any signs of contamination or leaks.',
          'Belts, hoses, and the battery are inspected for wear, cracking, and charge health.',
        ],
      },
      {
        heading: 'Tyres, brakes, and safety systems',
        body: [
          'Tyre tread depth and wear pattern (uneven wear often points to alignment or suspension issues), brake pad and disc condition, and handbrake function are all assessed.',
          'Lights, indicators, wipers, and horn are checked, along with dashboard warning lights and any stored fault codes where diagnostic equipment is available.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does a full inspection take?',
        answer:
          'A thorough inspection typically takes 45–90 minutes depending on the vehicle and whether a diagnostic scan is included.',
      },
      {
        question: 'Should I get an inspection before buying a used car?',
        answer:
          'Yes — an independent inspection before you finalise a purchase can reveal issues that affect price negotiation or your decision to buy at all.',
      },
    ],
    relatedServiceIds: ['paint-accident-repairs'],
  },
  {
    slug: 'what-to-do-after-buying-a-car',
    title: "What to Do in Your First Two Weeks After Buying a Car",
    category: 'Buying a Car',
    excerpt:
      "Just bought a car? Here is the practical checklist for your first two weeks of ownership — before anything goes wrong.",
    publishedAt: '2026-03-05',
    readingTimeMinutes: 6,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['car', 'dealership'], 1200, 675, 404),
      alt: 'Newly purchased car handover — placeholder image, replace with real garage photo',
    },
    sections: [
      {
        heading: 'Sort out documentation first',
        body: [
          'Confirm the logbook (registration) transfer has been correctly processed in your name through NTSA, and keep a copy of the sale agreement, previous service records, and any warranty documents.',
          'Arrange or confirm your motor insurance cover before you start regular driving — comprehensive cover is strongly recommended for newly purchased vehicles.',
        ],
      },
      {
        heading: 'Book an independent inspection',
        body: [
          "Even if the seller provided a service history, a fresh inspection confirms the car's actual current condition: fluids, brakes, tyres, battery health, and any warning signs the seller may not have disclosed.",
          'This is also the right time to have any minor bodywork, paint touch-ups, or detailing done, so you start ownership with an accurate picture of the car\'s condition.',
        ],
      },
      {
        heading: 'Learn the car before you rely on it',
        body: [
          'Locate the spare tyre, jack, warning triangle, and fuse box, and check that they are all present and usable. Test all lights, indicators, wipers, and the horn.',
          'Note the recommended service interval and fuel type, and set a reminder for your first service under your ownership.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to service a car immediately after buying it?',
        answer:
          "Not necessarily immediately, but an inspection within the first couple of weeks is strongly recommended so you know the car's real condition and can plan for any near-term maintenance.",
      },
      {
        question: "What's the biggest mistake new car owners make?",
        answer:
          'Assuming the previous owner\'s service history is complete and accurate without independently verifying tyre, brake, and fluid condition.',
      },
    ],
    relatedServiceIds: ['car-wash-detailing', 'paint-accident-repairs'],
  },
  {
    slug: 'new-driver-training-essentials',
    title: 'New Driver Essentials: Car Care Habits Every New Driver Should Learn',
    category: 'Driver Safety',
    excerpt:
      'Formal driving lessons teach you the road rules. This guide covers the car-care habits that keep new drivers safe between lessons.',
    publishedAt: '2026-03-20',
    readingTimeMinutes: 5,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['driving', 'car'], 1200, 675, 405),
      alt: 'New driver checking their vehicle — placeholder image, replace with real garage photo',
    },
    disclaimer:
      'This guide covers vehicle-care habits and is not a substitute for a certified driving school or formal road-rules instruction.',
    sections: [
      {
        heading: 'A quick walk-around before every drive',
        body: [
          'Before starting the engine, get in the habit of a 30-second walk-around: check tyres for obvious low pressure or damage, make sure all lights work, and glance under the car for any fresh fluid marks.',
          'Adjust mirrors and seat position every time a new driver gets in — a rushed adjustment is a common cause of blind-spot mistakes for beginners.',
        ],
      },
      {
        heading: 'Know your warning lights',
        body: [
          'Learn to recognise the engine warning light, brake warning light, oil pressure light, and battery/charging light on your dashboard, and understand that any of them appearing means you should stop driving and have the car checked as soon as it is safe to do so.',
          'Ignoring a warning light to "see if it goes away" is one of the most common ways a minor issue becomes an expensive repair.',
        ],
      },
      {
        heading: 'Build simple maintenance habits early',
        body: [
          'Check tyre pressure monthly, keep an eye on the fuel and oil level, and know where your car\'s spare tyre and jack are kept before you ever need them in an emergency.',
          'Booking a basic check-up every few months builds a habit that protects both safety and long-term running costs.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does DAC Auto provide driving lessons?',
        answer:
          'No — we are a garage, not a driving school. This guide focuses on vehicle-care habits. For road-rules instruction and licensing, please use a certified driving school.',
      },
      {
        question: 'What should a new driver always keep in the car?',
        answer:
          'A working spare tyre and jack, a warning triangle, a torch, and basic contact numbers including your garage and insurer.',
      },
    ],
    relatedServiceIds: [],
  },
  {
    slug: 'how-to-change-a-tyre-safely',
    title: 'How to Change a Flat Tyre Safely (Step by Step)',
    category: 'Maintenance Basics',
    excerpt:
      'A calm, step-by-step guide to changing a flat tyre on the roadside — plus the safety steps most guides skip.',
    publishedAt: '2026-04-02',
    readingTimeMinutes: 6,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['tire', 'car'], 1200, 675, 406),
      alt: 'Changing a car tyre — placeholder image, replace with real garage photo',
    },
    disclaimer:
      'Only change a tyre roadside if you can pull well clear of moving traffic. If you cannot do so safely, call for roadside assistance instead.',
    sections: [
      {
        heading: 'Before you start',
        body: [
          'Pull as far off the road as possible, onto flat, stable ground, switch on your hazard lights, and set out a warning triangle behind the vehicle if you have one.',
          'Apply the handbrake, put the car in park (or in gear for a manual), and if anyone is in the car, have them exit on the side away from traffic.',
        ],
      },
      {
        heading: 'Step-by-step tyre change',
        body: [
          '1. Loosen the wheel nuts slightly with the wheel still on the ground — this is much harder once the wheel is off the ground.',
          '2. Position the jack at the correct jacking point (check your owner\'s manual) and raise the car until the flat tyre is a few centimetres clear of the ground.',
          '3. Remove the loosened wheel nuts fully, and pull the flat tyre straight off.',
          '4. Fit the spare tyre onto the wheel bolts and hand-tighten the nuts in a star (crisscross) pattern.',
          '5. Lower the car back to the ground, then fully tighten the nuts in the same star pattern using your body weight through the wrench for a firm final tighten.',
        ],
      },
      {
        heading: 'After the change',
        body: [
          'Most spare "space-saver" tyres are only rated for limited distance and reduced speed — check your manual and drive gently to a garage to fit a proper replacement tyre as soon as possible.',
          "Have the wheel nuts re-torqued to the correct specification and the spare's condition checked by a technician within a day or two of a roadside change.",
        ],
      },
    ],
    faqs: [
      {
        question: 'What if my wheel nuts are too tight to loosen by hand?',
        answer:
          'Use your body weight rather than just arm strength, standing on the wrench if needed with the wheel still on the ground. If it still will not budge, call for roadside assistance rather than risking injury or a stripped nut.',
      },
      {
        question: 'Can I drive normally on a space-saver spare tyre?',
        answer:
          'No — most space-saver spares have a reduced speed and distance limit stated in your owner\'s manual. Treat it as a temporary measure only.',
      },
      {
        question: 'How do I know if my jacking points are safe to use?',
        answer:
          'Check your owner\'s manual for the manufacturer-specified jacking points. Using the wrong point can damage the underbody or make the jack unstable.',
      },
    ],
    relatedServiceIds: [],
  },
  {
    slug: 'how-to-check-engine-oil',
    title: 'How to Check Your Engine Oil Level and Condition',
    category: 'Maintenance Basics',
    excerpt:
      'A two-minute check that can save your engine — here is exactly how to check oil level and what the colour and smell can tell you.',
    publishedAt: '2026-04-16',
    readingTimeMinutes: 4,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['engine', 'oil'], 1200, 675, 407),
      alt: 'Checking engine oil with a dipstick — placeholder image, replace with real garage photo',
    },
    sections: [
      {
        heading: 'Before you check',
        body: [
          'Park on level ground and, ideally, check when the engine has been off for at least 5–10 minutes so the oil has had time to drain back into the sump for an accurate reading.',
        ],
      },
      {
        heading: 'Step-by-step oil check',
        body: [
          '1. Open the bonnet and locate the dipstick — usually a brightly coloured (often yellow or orange) handle.',
          '2. Pull the dipstick out fully and wipe it clean with a cloth or paper towel.',
          '3. Reinsert it fully, then pull it out again to read the level.',
          '4. Check the oil sits between the minimum and maximum marks on the dipstick.',
          '5. While you are there, note the oil\'s colour and smell.',
        ],
      },
      {
        heading: 'What the colour and smell tell you',
        body: [
          'Fresh engine oil is typically amber or light brown. Dark brown to black is normal as oil ages, but oil that looks gritty, milky, or smells burnt can indicate a problem worth having checked.',
          'A milky or frothy appearance can suggest coolant is mixing with the oil — this needs prompt attention from a technician rather than a simple top-up.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should I check my oil?',
        answer:
          'Roughly once a month, and always before a long drive, in addition to your scheduled service intervals.',
      },
      {
        question: 'My oil level is low — can I just top it up myself?',
        answer:
          "A small top-up with the correct oil grade is usually fine, but if you're topping up frequently, have the car checked — it may indicate a leak or the engine burning oil.",
      },
    ],
    relatedServiceIds: ['car-wash-detailing'],
  },
  {
    slug: 'how-to-check-brake-pads',
    title: 'How to Check Your Brake Pads for Wear',
    category: 'Maintenance Basics',
    excerpt:
      'Worn brake pads are one of the most common safety issues on the road. Here is how to spot the warning signs early.',
    publishedAt: '2026-05-01',
    readingTimeMinutes: 5,
    author: 'DAC Auto Team',
    heroImage: {
      src: placeholderImage(['brakes', 'car'], 1200, 675, 408),
      alt: 'Inspecting brake pads and disc — placeholder image, replace with real garage photo',
    },
    disclaimer:
      'A visual check can flag obvious wear, but brake components are safety-critical. Have any suspected issue confirmed by a technician before continuing to drive.',
    sections: [
      {
        heading: 'Warning signs you can notice while driving',
        body: [
          'A high-pitched squeal under braking often comes from a built-in wear indicator designed to alert you before pads are dangerously thin.',
          'A grinding or metal-on-metal sound means the pad material is likely gone and the backing plate is contacting the disc — this needs immediate attention.',
          'A soft or spongy brake pedal, the car pulling to one side under braking, or vibration through the pedal are also signs worth having checked promptly.',
        ],
      },
      {
        heading: 'A basic visual check',
        body: [
          "With the wheel off or through the gaps in most alloy wheels, you can often see the brake pad pressed against the disc. Most pads should have at least 3mm of friction material remaining — if it looks thin or you can't tell, have a technician measure it.",
          'Compare both sides — noticeably uneven wear side-to-side can point to a sticking caliper rather than just normal wear.',
        ],
      },
      {
        heading: 'Why regular checks matter',
        body: [
          'Brake pads wear gradually and predictably, but the wear rate depends heavily on driving style and conditions — frequent stop-start Nairobi traffic wears pads faster than steady highway driving.',
          'Catching thin pads early protects the (more expensive) brake discs from damage, and more importantly, protects your stopping distance.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should brake pads be checked?',
        answer:
          'At every routine service, and immediately if you notice squealing, grinding, or a change in brake feel.',
      },
      {
        question: 'How long do brake pads typically last?',
        answer:
          'This varies widely with driving style and conditions, from roughly 20,000 km to well over 60,000 km — regular checks are more reliable than a fixed mileage assumption.',
      },
    ],
    relatedServiceIds: ['car-wash-detailing'],
  },
]

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: BlogCategory): Article[] {
  return getAllArticles().filter((a) => a.category === category)
}

export function getRelatedArticles(current: Article, count = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== current.slug && a.category === current.category)
    .concat(getAllArticles().filter((a) => a.slug !== current.slug && a.category !== current.category))
    .slice(0, count)
}
