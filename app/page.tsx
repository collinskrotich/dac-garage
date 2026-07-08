import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { MapEmbed } from "@/components/MapEmbed";
import { BUSINESS, SERVICES, WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dekker Auto Clinic | Nairobi Full-Service Auto Garage",
  description:
    "DAC Auto — Nairobi's all-in-one auto care clinic. Car wash & detailing, paint & accident repairs, customisation & tuning. Lang'ata & Upperhill.",
};

/* ---- Why-Us icon map ---- */
function WhyIcon({ type }: { type: string }) {
  const cls = "w-6 h-6";
  switch (type) {
    case "tech":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.654-4.654 1.896-1.896a2.652 2.652 0 0 1 3.748 3.748l-1.896 1.896M8.765 10.516l4.655-4.655m-4.655 4.655-1.896 1.896a2.652 2.652 0 0 0 3.748 3.748l1.896-1.896" />
        </svg>
      );
    case "speed":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      );
    case "quality":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      );
    case "price":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
        </svg>
      );
    case "location":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
      );
  }
}

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          HERO SECTION
          TEMP: Replace the CSS gradient background with a
          professional photo or video of the garage / cars being
          serviced once brand photography is available.
          Suggested: full-width image or <video autoPlay muted loop playsInline>
      ───────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center min-h-[90vh] overflow-hidden brand-panel"
        aria-label="Hero"
      >
        {/* TEMP background image — replace src with real garage photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080/07055a/9dc0d4?text=TEMP%3A+Replace+with+Garage+Photo"
            alt="DAC Auto Clinic garage — placeholder image"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient overlay — keeps text readable over any background */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,5,90,0.96) 0%, rgba(9,7,96,0.82) 50%, rgba(13,11,111,0.72) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Accent glow — TEMP decorative element */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(208,58,138,0.22) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left">
          <div className="max-w-2xl">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <svg
                className="w-3.5 h-3.5 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.079 3.208-4.407 3.208-7.077a8.5 8.5 0 1 0-17 0c0 2.67 1.264 4.998 3.208 7.077a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="brand-label text-xs text-accent">
                Nairobi, Kenya
              </span>
            </div>

            {/* Main heading — TEMP copy */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-main mb-4 uppercase">
              All In One{" "}
              {/* TEMP: accent colour on "Auto-Care!" — confirm with brand guide */}
              <span className="text-accent">Auto-Care!</span>
            </h1>

            {/* Sub-heading — TEMP copy */}
            <p className="brand-body text-secondary text-lg sm:text-xl mb-8 max-w-lg">
              {/* TEMP [COPY]: Replace with approved marketing copy */}
              Nairobi&apos;s trusted full-service garage — from a showroom-quality
              wash to a full accident repair, we handle it all.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-subheading inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-main text-xs px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-accent/30"
              >
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Book on WhatsApp
              </a>
              <a
                href={BUSINESS.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-subheading inline-flex items-center justify-center gap-2 border border-main/30 hover:border-main/60 bg-main/5 hover:bg-main/10 text-main text-xs px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Branch badges */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {BUSINESS.locations.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-secondary px-3 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" aria-hidden="true" />
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SERVICES OVERVIEW
      ───────────────────────────────────────── */}
      <Section id="services" className="bg-section">
        <SectionHeading
          label="What We Do"
          title="Full-Service Auto Care"
          subtitle="Everything your car needs — under one roof, handled by experienced technicians."
          /* TEMP [COPY] */
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDesc}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="brand-subheading inline-flex items-center gap-2 text-accent text-xs hover:underline underline-offset-4"
          >
            View all services
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* ─────────────────────────────────────────
          WHY CHOOSE US
          TEMP [COPY]: All text is placeholder — replace with
          final approved marketing copy.
      ───────────────────────────────────────── */}
      <Section id="why-us" className="bg-base">
        <SectionHeading
          label="Why DAC Auto"
          title="The Smart Choice for Your Car"
          subtitle="We've built our reputation on quality work, honest pricing, and respect for your time."
          /* TEMP [COPY] */
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-5 bg-surface border border-divider rounded-xl hover:border-accent/30 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <WhyIcon type={item.icon} />
              </div>
              <div>
                <h3 className="brand-subheading text-main text-xs mb-1">{item.title}</h3>
                <p className="brand-body text-secondary text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────
          LOCATION SECTION
      ───────────────────────────────────────── */}
      <Section id="location" className="bg-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info */}
          <div>
            <SectionHeading
              label="Find Us"
              title="Two Nairobi Locations"
              subtitle="Conveniently located to serve clients from across the city."
              /* TEMP [COPY] */
            />
            {/* Branches */}
            <div className="flex flex-col gap-4 mb-8">
              {BUSINESS.locations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-3 bg-surface border border-divider rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.079 3.208-4.407 3.208-7.077a8.5 8.5 0 1 0-17 0c0 2.67 1.264 4.998 3.208 7.077a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="brand-subheading text-main text-xs">{loc} Branch</p>
                    {loc === "Lang'ata" && (
                      <p className="brand-body text-secondary text-sm">{BUSINESS.address}</p>
                    )}
                    {loc === "Upperhill" && (
                      <p className="brand-body text-secondary text-sm">Upperhill, Nairobi {/* TEMP: add Upperhill address */}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href={BUSINESS.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Open in Google Maps
            </a>
          </div>

          {/* Map */}
          <MapEmbed height="420px" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────
          INSTAGRAM GALLERY TEASER
          TEMP: Replace placeholder images with real Instagram
          export photos / embed. Consider a proper Instagram feed
          embed library (e.g. Curator.io) for auto-updating content.
      ───────────────────────────────────────── */}
      <Section id="gallery-teaser" className="bg-base">
        <SectionHeading
          label="Our Work"
          title="See the Results"
          subtitle="Follow us on Instagram for the latest work from the DAC Auto team."
          /* TEMP [COPY] */
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {[
            { label: "Car Wash Detail", bg: "07055a", fg: "9dc0d4" },
            { label: "Paint Repair", bg: "0d0b6f", fg: "d03a8a" },
            { label: "Custom Wrap", bg: "090760", fg: "9dc0d4" },
            { label: "Before / After", bg: "0d0b6f", fg: "d03a8a" },
            { label: "Engine Detail", bg: "07055a", fg: "9dc0d4" },
            { label: "Alloy Refurb", bg: "090760", fg: "d03a8a" },
          ].map((item, i) => (
            <a
              key={i}
              href={BUSINESS.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl group"
              aria-label={`View ${item.label} on Instagram`}
            >
              {/* TEMP placeholder image — replace with real gallery photo */}
              <Image
                src={`https://placehold.co/400x400/${item.bg}/${item.fg}?text=TEMP`}
                alt={`${item.label} — TEMP placeholder`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a
            href={BUSINESS.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-divider hover:border-accent/40 bg-surface hover:bg-surface/80 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
            Follow @{BUSINESS.instagram} on Instagram
          </a>
        </div>
      </Section>

      {/* ─────────────────────────────────────────
          BOTTOM CTA STRIP
      ───────────────────────────────────────── */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(208,58,138,0.18) 0%, rgba(7,5,90,1) 62%)",
        }}
      >
        <h2 className="text-2xl sm:text-3xl text-main mb-3 uppercase">
          {/* TEMP [COPY] */}
          Ready to give your car the care it deserves?
        </h2>
        <p className="brand-body text-secondary mb-7 text-lg">
          {/* TEMP [COPY] */}
          Chat with us on WhatsApp — we&apos;ll get you booked in fast.
        </p>
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-subheading inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-main text-xs px-8 py-4 rounded-xl transition-colors shadow-lg shadow-accent/30"
        >
          Book on WhatsApp — {BUSINESS.whatsapp}
        </a>
      </section>
    </>
  );
}


