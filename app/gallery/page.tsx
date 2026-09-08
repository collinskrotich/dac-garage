import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { BUSINESS } from "@/lib/constants";
import { placeholderImage } from "@/lib/placeholder-image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before & after photos of car wash, detailing, paint repairs, and customisation work from DAC Auto in Nairobi.",
};

/*
 * TEMP: All images below are placeholders sourced from loremflickr.com.
 * Replace each entry's `src` with real before/after gallery photos.
 * Recommended size: 800×600px minimum, optimised WebP/JPEG.
 */
const GALLERY_ITEMS = [
  {
    label: "Full Detail — Before",
    category: "Car Wash & Detailing",
    src: placeholderImage(["car", "dirty"], 800, 600, 201),
    type: "before" as const,
  },
  {
    label: "Full Detail — After",
    category: "Car Wash & Detailing",
    src: placeholderImage(["carwash", "clean"], 800, 600, 202),
    type: "after" as const,
  },
  {
    label: "Dent Repair — Before",
    category: "Paint & Accident Repairs",
    src: placeholderImage(["car", "dent"], 800, 600, 203),
    type: "before" as const,
  },
  {
    label: "Dent Repair — After",
    category: "Paint & Accident Repairs",
    src: placeholderImage(["car", "bodywork"], 800, 600, 204),
    type: "after" as const,
  },
  {
    label: "Vinyl Wrap — Before",
    category: "Customisation & Tuning",
    src: placeholderImage(["car", "plain"], 800, 600, 205),
    type: "before" as const,
  },
  {
    label: "Vinyl Wrap — After",
    category: "Customisation & Tuning",
    src: placeholderImage(["car", "vinylwrap"], 800, 600, 206),
    type: "after" as const,
  },
  {
    label: "Full Respray — Before",
    category: "Paint & Accident Repairs",
    src: placeholderImage(["car", "rust"], 800, 600, 207),
    type: "before" as const,
  },
  {
    label: "Full Respray — After",
    category: "Paint & Accident Repairs",
    src: placeholderImage(["car", "paint"], 800, 600, 208),
    type: "after" as const,
  },
  {
    label: "Interior Detail — Before",
    category: "Car Wash & Detailing",
    src: placeholderImage(["car", "interior", "dirty"], 800, 600, 209),
    type: "before" as const,
  },
  {
    label: "Interior Detail — After",
    category: "Car Wash & Detailing",
    src: placeholderImage(["car", "interior"], 800, 600, 210),
    type: "after" as const,
  },
  {
    label: "Alloy Refurb — Before",
    category: "Customisation & Tuning",
    src: placeholderImage(["wheel", "rusty"], 800, 600, 211),
    type: "before" as const,
  },
  {
    label: "Alloy Refurb — After",
    category: "Customisation & Tuning",
    src: placeholderImage(["wheel", "alloy"], 800, 600, 212),
    type: "after" as const,
  },
];

export default function GalleryPage() {
  // Group into before/after pairs
  const pairs: Array<(typeof GALLERY_ITEMS)[number][]> = [];
  for (let i = 0; i < GALLERY_ITEMS.length; i += 2) {
    pairs.push(GALLERY_ITEMS.slice(i, i + 2));
  }

  return (
    <>
      {/* Page hero */}
      <section className="bg-section py-16 md:py-20 border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="brand-label text-accent text-xs">
            Our Work
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl text-main leading-tight mb-4 uppercase">
            Gallery
          </h1>
          <p className="brand-body text-secondary text-lg max-w-2xl">
            {/* TEMP [COPY] */}
            Real results from real cars. Browse our before &amp; after gallery to see what
            the DAC Auto team can do for your vehicle.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          label="Before & After"
          title="The DAC Auto Difference"
          subtitle="Every job tells a story. Here's some of ours."
          /* TEMP [COPY] */
        />

        {/* Before/After grid */}
        <div className="space-y-6">
          {pairs.map((pair, pairIdx) => (
            <div key={pairIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pair.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden rounded-2xl border border-divider group"
                >
                  {/* TEMP image — replace with real photo */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={`${item.label} — placeholder image, replace with real gallery photo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span
                      className={`brand-label text-[10px] px-2 py-0.5 rounded mr-2 ${
                        item.type === "before"
                          ? "bg-on-dark/20 text-on-dark"
                          : "bg-accent text-on-accent"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="brand-subheading text-on-dark text-[11px]">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-14 text-center border border-divider rounded-2xl p-8 bg-surface">
          <p className="text-main text-lg mb-2 uppercase">
            {/* TEMP [COPY] */}
            More work on our Instagram
          </p>
          <p className="brand-body text-secondary text-sm mb-5">
            {/* TEMP [COPY] */}
            Follow us for daily updates, new project reveals, and behind-the-scenes content.
          </p>
          <a
            href={BUSINESS.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-subheading inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent text-xs px-6 py-3 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
            @{BUSINESS.instagram}
          </a>
        </div>
      </Section>
    </>
  );
}
