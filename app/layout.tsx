import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/structured-data";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

export const metadata: Metadata = {
  /*
   * TEMP SEO metadata — review and refine with final brand messaging before launch.
   * Add social preview images (OG / Twitter card) once brand photography is available.
   */
  metadataBase: new URL(SITE_URL), // TEMP: SITE_URL in lib/structured-data.ts is a placeholder domain
  title: {
    default: "Dekker Auto Clinic | DAC Auto — Nairobi Car Wash, Repairs & Customisation",
    template: "%s | DAC Auto — Nairobi",
  },
  description:
    "Nairobi's premier full-service auto clinic. Car wash & detailing, accident repair & paint, customisation & tuning. Branches in Lang'ata and Upperhill. Book on WhatsApp.",
  keywords: [
    "car wash Nairobi",
    "auto detailing Langata",
    "accident repair Nairobi",
    "panel beating Nairobi",
    "car customisation Nairobi",
    "Dekker Auto Clinic",
    "DAC Auto",
    "Upperhill garage",
    "Langata car service",
    "Mai Mahiu Rd garage",
    "car insurance claim Kenya",
    "vehicle inspection Nairobi",
    "how to check brake pads",
    "how to change a tyre",
    "car maintenance tips Kenya",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: "Dekker Auto Clinic",
    title: "Dekker Auto Clinic — All In One Auto-Care! Nairobi",
    description:
      "Car wash, detailing, accident repairs, paint, customisation & tuning — all under one roof in Nairobi. Lang'ata | Upperhill.",
    // TEMP: add images[] once OG photo assets are ready
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekker Auto Clinic — All In One Auto-Care! Nairobi",
    description:
      "Car wash, detailing, accident repairs & customisation in Nairobi. Book on WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoNarrow.variable} antialiased`}>
      <body className="bg-base text-main flex flex-col min-h-screen">
        <Navbar />
        {/* pt-16 offsets the fixed navbar height */}
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
