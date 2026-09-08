import Image from "next/image";
import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { placeholderImage } from "@/lib/placeholder-image";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DAC Auto services in Nairobi: professional car wash & detailing, paint & accident repairs, and customisation & tuning. Lang'ata | Upperhill.",
};

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  gallery: { src: string; alt: string }[];
}

function ServiceDetail({ id, title, description, gallery }: ServiceDetailProps) {
  return (
    <div
      id={id}
      className="scroll-mt-20 py-16 md:py-24 border-t border-divider first:border-0 first:pt-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl text-main mb-4 uppercase">{title}</h2>
          {/* TEMP [COPY]: Replace description with final approved service copy */}
          <div className="brand-body text-secondary text-base space-y-4 mb-8">
            {description
              .trim()
              .split("\n")
              .filter(Boolean)
              .map((p, i) => (
                <p key={i}>{p.trim()}</p>
              ))}
          </div>
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-subheading inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent text-xs px-6 py-3.5 rounded-xl transition-colors"
          >
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Get a quote on WhatsApp
          </a>
        </div>

        {/* Gallery */}
        {/* TEMP: Replace placeholder images with real service photos */}
        <div className="grid grid-cols-2 gap-3">
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Build per-service gallery placeholders — topic-relevant stock photos, not real DAC Auto work */
const SERVICE_GALLERIES: Record<
  string,
  { src: string; alt: string }[]
> = {
  "car-wash-detailing": [
    {
      src: placeholderImage(["carwash", "car"], 800, 450, 101),
      alt: "Car wash and detailing — placeholder image, replace with real service photo",
    },
    {
      src: placeholderImage(["car", "interior"], 400, 400, 102),
      alt: "Interior detailing — placeholder image, replace with real service photo",
    },
    {
      src: placeholderImage(["car", "polish"], 400, 400, 103),
      alt: "Exterior polishing — placeholder image, replace with real service photo",
    },
  ],
  "paint-accident-repairs": [
    {
      src: placeholderImage(["car", "paint"], 800, 450, 104),
      alt: "Paint and accident repair — placeholder image, replace with real service photo",
    },
    {
      src: placeholderImage(["car", "bodywork"], 400, 400, 105),
      alt: "Panel beating — placeholder image, replace with real service photo",
    },
    {
      src: placeholderImage(["car", "spraypaint"], 400, 400, 106),
      alt: "Paint booth — placeholder image, replace with real service photo",
    },
  ],
  "customisation-tuning": [
    {
      src: placeholderImage(["car", "custom"], 800, 450, 107),
      alt: "Customisation and tuning — placeholder image, replace with real service photo",
    },
    {
      src: placeholderImage(["car", "vinylwrap"], 400, 400, 108),
      alt: "Vinyl wrap — placeholder image, replace with real service photo",
    },
    {
      src: placeholderImage(["car", "engine"], 400, 400, 109),
      alt: "Performance tuning — placeholder image, replace with real service photo",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      {SERVICES.map((service) => (
        <script
          key={service.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
            ])
          ),
        }}
      />

      {/* Page hero */}
      <section className="bg-section py-16 md:py-20 border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <span className="brand-label text-accent text-xs">
            What We Offer
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl text-main leading-tight mb-4 uppercase">
            Our Services
          </h1>
          <p className="brand-body text-secondary text-lg max-w-2xl">
            {/* TEMP [COPY] */}
            From a quick wash to a full custom build — explore the full range of services
            available at DAC Auto&apos;s Nairobi branches.
          </p>
          {/* Service quick-links */}
          <nav aria-label="Service sections" className="flex flex-wrap gap-3 mt-6">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="brand-subheading text-[11px] text-secondary hover:text-main border border-divider hover:border-main/40 px-4 py-2 rounded-full transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service detail sections */}
      <Section>
        {SERVICES.map((service) => (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            gallery={SERVICE_GALLERIES[service.id] ?? []}
          />
        ))}
      </Section>
    </>
  );
}
