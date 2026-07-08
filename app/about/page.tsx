import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dekker Auto Clinic (DAC Auto) — Nairobi's trusted full-service garage with branches in Lang'ata and Upperhill.",
};

/*
 * TEMP: All copy in this file is placeholder.
 * Replace with approved content from the client before launch.
 * Marked with [COPY] comments throughout.
 */

const TEAM = [
  {
    name: "Team Member", // TEMP [COPY]: Replace with actual name
    role: "Lead Technician", // TEMP [COPY]
    src: "https://placehold.co/300x300/0d0b6f/9dc0d4?text=Photo+—+TEMP",
    alt: "Team member photo — TEMP placeholder",
  },
  {
    name: "Team Member", // TEMP [COPY]
    role: "Paint & Body Specialist", // TEMP [COPY]
    src: "https://placehold.co/300x300/07055a/d03a8a?text=Photo+—+TEMP",
    alt: "Team member photo — TEMP placeholder",
  },
  {
    name: "Team Member", // TEMP [COPY]
    role: "Detailing Expert", // TEMP [COPY]
    src: "https://placehold.co/300x300/0d0b6f/9dc0d4?text=Photo+—+TEMP",
    alt: "Team member photo — TEMP placeholder",
  },
  {
    name: "Team Member", // TEMP [COPY]
    role: "Customisation Specialist", // TEMP [COPY]
    src: "https://placehold.co/300x300/07055a/d03a8a?text=Photo+—+TEMP",
    alt: "Team member photo — TEMP placeholder",
  },
];

const STATS = [
  { value: "2+", label: "Nairobi Locations" }, // TEMP [COPY]
  { value: "500+", label: "Cars Served" }, // TEMP [COPY]
  { value: "100%", label: "Satisfaction Goal" }, // TEMP [COPY]
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-section py-16 md:py-20 border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="brand-label text-accent text-xs">
            Our Story
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl text-main leading-tight mb-4 uppercase">
            About DAC Auto
          </h1>
          <p className="brand-body text-secondary text-lg max-w-2xl">
            {/* TEMP [COPY] */}
            Born in Nairobi, built for Nairobi. We started with a simple mission: give
            every car owner access to world-class auto care — without the world-class
            price tag.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <Section className="bg-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Who We Are"
              title="Nairobi's All-In-One Auto Clinic"
            />
            {/* TEMP [COPY]: Replace with approved brand story */}
            <div className="brand-body space-y-4 text-secondary">
              <p>
                Dekker Auto Clinic (DAC Auto) was founded with one goal: to raise the
                standard of auto care in Nairobi. From our base on Mai Mahiu Rd in
                Lang&apos;ata, we&apos;ve grown to serve clients across the city — with a
                second branch in Upperhill now serving the city&apos;s business district.
              </p>
              <p>
                We believe your car is more than just a machine — it&apos;s a reflection of
                who you are. That&apos;s why we treat every vehicle with the same level of
                care and precision we&apos;d give our own. Whether it&apos;s a quick wash, a
                complex panel repair, or a full custom transformation, we bring the same
                dedication to every job.
              </p>
              <p>
                {/* TEMP [COPY] */}
                Our tagline says it all: <strong className="text-main">&quot;All In One Auto-Care!&quot;</strong> — one
                destination for everything your car needs.
              </p>
            </div>
          </div>

          {/* Story image — TEMP */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-divider">
            <Image
              src="https://placehold.co/800x600/07055a/9dc0d4?text=Garage+Story+Photo+—+TEMP"
              alt="DAC Auto Clinic garage — TEMP placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-section border-y border-divider py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-accent mb-1">{s.value}</p>
                <p className="brand-label text-secondary text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Section className="bg-base">
        <SectionHeading
          label="Our Team"
          title="The People Behind the Work"
          subtitle="Experienced, passionate, and committed to quality — meet the DAC Auto team."
          /* TEMP [COPY] */
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {TEAM.map((member, i) => (
            <div key={i} className="text-center">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-divider mb-3">
                {/* TEMP: Replace with real team photos */}
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="brand-subheading text-main text-xs">{member.name}</p>
              <p className="brand-body text-secondary text-xs mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission / Values */}
      <Section className="bg-section">
        <SectionHeading
          label="Our Mission"
          title="What Drives Us"
          center
        />
        {/* TEMP [COPY] */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          {[
            {
              title: "Quality Without Compromise", // TEMP [COPY]
              desc: "We use professional-grade products and proven techniques on every single job — no shortcuts.", // TEMP [COPY]
            },
            {
              title: "Respect for Your Time", // TEMP [COPY]
              desc: "We turn jobs around fast, communicate proactively, and never keep you waiting without reason.", // TEMP [COPY]
            },
            {
              title: "Honest Pricing", // TEMP [COPY]
              desc: "Transparent quotes, no hidden fees. You approve the work before we start — always.", // TEMP [COPY]
            },
            {
              title: "Community First", // TEMP [COPY]
              desc: "We&apos;re Nairobi-born and proud of it. We give back to the community that supports us.", // TEMP [COPY]
            },
          ].map((val) => (
            <div
              key={val.title}
              className="bg-surface border border-divider rounded-2xl p-6"
            >
              <h3 className="brand-subheading text-main text-xs mb-2">{val.title}</h3>
              <p className="brand-body text-secondary text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications — TEMP placeholder section */}
      <Section className="bg-base border-t border-divider">
        <SectionHeading
          label="Certifications"
          title="Accreditations & Partnerships"
          subtitle="TEMP: Add certifications, brand partnerships, or association memberships here once confirmed."
          /* TEMP [COPY] */
          center
        />
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-32 h-16 bg-surface border border-divider rounded-xl flex items-center justify-center brand-label text-secondary text-[10px]"
            >
              {/* TEMP: Replace with certification logo */}
              Cert {i} — TEMP
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-section border-t border-divider">
        <h2 className="text-2xl sm:text-3xl text-main mb-3 uppercase">
          {/* TEMP [COPY] */}
          Ready to experience the DAC difference?
        </h2>
        <p className="brand-body text-secondary mb-7">
          {/* TEMP [COPY] */}
          Book your next service on WhatsApp — fast, easy, no fuss.
        </p>
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-subheading inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-main text-xs px-8 py-4 rounded-xl transition-colors"
        >
          Book on WhatsApp
        </a>
      </section>
    </>
  );
}
