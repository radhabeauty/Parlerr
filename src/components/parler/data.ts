export const BRAND = {
  name: "Sister's Beauty Hub",
  tagline: "Bridal artistry, crafted with love in Jabalpur",
  primaryPhone: "8103994349",
  primaryPhoneIntl: "918103994349",
  altPhones: ["7415222409", "9300954208"],
  address: "Damoh Naka, Koshi Mandir ke paas, Jabalpur, Madhya Pradesh",
  mapsQuery: "Damoh Naka, Koshi Mandir, Jabalpur",
  whatsappMsg: "Hi Sister's Beauty Hub! I'd like to book an appointment.",
} as const;

export const waLink = (msg = BRAND.whatsappMsg) =>
  `https://wa.me/${BRAND.primaryPhoneIntl}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+${BRAND.primaryPhoneIntl}`;

const ids = [
  "0019","0020","0021","0022","0023","0024","0025","0026","0027","0028",
  "0029","0030","0031","0032","0033","0034","0035","0036","0037","0038",
  "0039","0040","0042","0043","0044","0046","0047",
];

export const GALLERY = ids.map((id) => ({
  full: `/gallery/IMG-20260612-WA${id}.webp`,
  thumb: `/gallery/IMG-20260612-WA${id}-thumb.webp`,
  alt: `Bridal & makeup work by Sister's Beauty Hub — ${id}`,
}));

export const VIDEOS = [
  { src: "/videos/VID-20260612-WA0003.mp4", poster: "/videos/VID-20260612-WA0003.jpg" },
  { src: "/videos/VID-20260612-WA0041.mp4", poster: "/videos/VID-20260612-WA0041.jpg" },
  { src: "/videos/VID-20260612-WA0045.mp4", poster: "/videos/VID-20260612-WA0045.jpg" },
  { src: "/videos/VID-20260612-WA0049.mp4", poster: "/videos/VID-20260612-WA0049.jpg" },
  { src: "/videos/VID-20260612-WA0050.mp4", poster: "/videos/VID-20260612-WA0050.jpg" },
];

export const SERVICES = [
  {
    title: "Bridal Makeup",
    price: "₹4,000 onwards",
    desc: "HD bridal looks with premium products, draping, and finishing touches that last from haldi to vidaai.",
    points: ["HD & airbrush finish", "Premium products", "Draping & hairstyling", "Trial available"],
  },
  {
    title: "Party / Side Makeup",
    price: "Custom packages",
    desc: "Engagements, receptions, sangeet, and family functions — glam that photographs beautifully.",
    points: ["Sister-of-bride looks", "Reception glam", "Long-wear formula", "On-time service"],
  },
  {
    title: "Mehndi Art",
    price: "Bridal & guest packages",
    desc: "Intricate bridal mehndi, Arabic patterns, and quick guest designs with deep, lasting stain.",
    points: ["Bridal full hands & feet", "Arabic & Indo-Arabic", "Guest sittings", "Natural cones"],
  },
];
