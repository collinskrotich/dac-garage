# Dekker Auto Clinic — Marketing Website

Next.js 16 · App Router · TypeScript · Tailwind CSS v4

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, why us, location, Instagram teaser |
| `/services` | Service detail page with anchor sections |
| `/gallery` | Before & after photo gallery |
| `/about` | Brand story, team, stats, values, certifications |
| `/contact` | Contact form + map + social links |
| `/api/contact` | POST handler for the contact form (logs to console — replace before launch) |

---

## Placeholder Values to Replace Before Launch

Search the codebase for the tags below to find every temporary value:

### `TEMP` — Design Tokens (colors & font)

All brand colours and the body font are **temporary placeholders** defined in
`app/globals.css` inside the `@theme` block.

| Token | Current (TEMP) value | Replace with |
|-------|----------------------|--------------|
| `--color-accent` | `#e63028` | Brand primary accent from brand guide |
| `--color-base` | `#0f0f0f` | Brand dark base background |
| `--color-surface` | `#1a1a1a` | Card / surface colour |
| `--color-section` | `#141414` | Alternate section background |
| `--color-divider` | `#2d2d2d` | Border / divider colour |
| `--color-accent-hover` | `#c0251f` | Accent hover state |
| `--color-secondary` | `#a1a1aa` | Secondary text colour |
| `--font-sans` | `Inter` | Official brand typeface |

> **Logo:** The logo file at `public/DAC Auto Garage Logo-05.png` is already in use.
> Adjust the `width`/`height` props in `Navbar.tsx` and `Footer.tsx` if the aspect
> ratio changes with the final logo version.

### `TEMP` — Placeholder Images

All `<Image>` components with `src="https://placehold.co/..."` need to be replaced
with real photography. The placehold.co hostname is whitelisted in
`next.config.ts` — remove it once real images are in place.

Key images to replace:
- **Hero background** — `app/page.tsx` (hero section)
- **Service photos** — `app/services/page.tsx` (`SERVICE_GALLERIES`)
- **Gallery before/after** — `app/gallery/page.tsx` (`GALLERY_ITEMS`)
- **About / team photos** — `app/about/page.tsx` (`TEAM`)
- **Instagram grid** — `app/page.tsx` (gallery teaser section)

### `[COPY]` — Marketing Copy

All text marked with `/* [COPY] */` comments should be reviewed and replaced with
approved, final marketing copy before launch. The main data file is
`lib/constants.ts`.

### Other TODOs

- **Google Maps embed** — Currently uses a keyless embed URL. For production, use the
  Google Maps Embed API with an API key restricted to your domain. Update
  `googleMapsEmbed` in `lib/constants.ts`.
- **Upperhill address** — Add the full Upperhill branch address in `lib/constants.ts`
  and everywhere marked `/* TEMP: add Upperhill address */`.
- **Contact form** — `app/api/contact/route.ts` currently only logs to console.
  Integrate a mail service (e.g. Resend) or CRM before launch.
- **SEO** — Update the `metadata` in `app/layout.tsx` with the live domain and add OG
  images once brand photography is ready.
- **Certifications** — Populate the certifications section in `app/about/page.tsx`.

---

## Folder Structure

```
app/
  api/contact/route.ts   — Contact form POST handler
  about/page.tsx
  contact/page.tsx
  gallery/page.tsx
  services/page.tsx
  globals.css            — Brand tokens (@theme), global styles
  layout.tsx             — Root layout: Navbar, Footer, WhatsApp button, SEO metadata
  page.tsx               — Home page
components/
  Footer.tsx
  MapEmbed.tsx
  Navbar.tsx
  Section.tsx            — Section wrapper + SectionHeading
  ServiceCard.tsx
  WhatsAppButton.tsx
lib/
  constants.ts           — Business info, services, copy
public/
  DAC Auto Garage Logo-05.png
```
