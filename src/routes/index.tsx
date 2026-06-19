import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/parler/Nav";
import { Hero } from "@/components/parler/Hero";
import { Marquee } from "@/components/parler/Marquee";
import { Services } from "@/components/parler/Services";
import { Gallery } from "@/components/parler/Gallery";
import { Reels } from "@/components/parler/Reels";
import { WhyUs } from "@/components/parler/WhyUs";
import { Testimonials } from "@/components/parler/Testimonials";
import { Contact } from "@/components/parler/Contact";
import { Footer } from "@/components/parler/Footer";
import { WhatsAppFab } from "@/components/parler/WhatsAppFab";
import { StickyMobileCTA } from "@/components/parler/StickyMobileCTA";
import { Ornament } from "@/components/parler/Ornament";
import { BRAND } from "@/components/parler/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: BRAND.name,
  image: "/gallery/IMG-20260612-WA0021.webp",
  telephone: `+91${BRAND.primaryPhone}`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Damoh Naka, Koshi Mandir ke paas",
    addressLocality: "Jabalpur",
    addressRegion: "MP",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 09:00-21:00",
  areaServed: "Jabalpur",
  description:
    "Sister's Beauty Hub — bridal makeup, party glam, and mehndi artistry in Jabalpur. Home service available. Bridal makeup starting ₹4000.",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sister's Beauty Hub — Bridal Makeup & Mehndi in Jabalpur" },
      {
        name: "description",
        content:
          "Premium bridal makeup, party glam, and mehndi artistry in Jabalpur. Home service available. Bridal packages from ₹4000. Call +91 8103994349.",
      },
      {
        name: "keywords",
        content:
          "bridal makeup Jabalpur, mehndi artist Jabalpur, party makeup Jabalpur, home service bridal makeup, engagement makeup, sangeet makeup, reception makeup",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Sister's Beauty Hub — Bridal Makeup in Jabalpur" },
      {
        property: "og:description",
        content:
          "Bridal makeup, party glam, and mehndi. Home service in Jabalpur. Book on WhatsApp +91 8103994349.",
      },
      { property: "og:image", content: "/gallery/IMG-20260612-WA0021.webp" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/gallery/IMG-20260612-WA0021.webp" },
      { name: "theme-color", content: "#3a0a18" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-[#fbf6ef] pb-16 md:pb-0">
      <Nav />
      <Hero />
      <Marquee />
      <div className="bg-[#fbf6ef]">
        <Ornament />
      </div>
      <Services />
      <Gallery />
      <Reels />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <StickyMobileCTA />
    </main>
  );
}
