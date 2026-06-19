import { BRAND, telLink, waLink } from "./data";

export function Footer() {
  return (
    <footer className="bg-[#260510] py-12 text-[#fbf6ef]/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3 md:px-8">
        <div>
          <div className="font-display text-2xl text-[#fbf6ef]">
            Sister&apos;s <span className="text-gold-gradient">Beauty Hub</span>
          </div>
          <p className="mt-2 max-w-xs text-sm text-[#fbf6ef]/60">
            Bridal makeup, party glam, and mehndi artistry in Jabalpur. Home service
            available.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-[#e8c48a]">Contact</div>
          <a href={telLink} className="mt-2 block hover:text-[#e8c48a]">
            +91 {BRAND.primaryPhone}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="block hover:text-[#e8c48a]">
            WhatsApp +91 {BRAND.primaryPhone}
          </a>
          {BRAND.altPhones.map((p) => (
            <a key={p} href={`tel:+91${p}`} className="block hover:text-[#e8c48a]">
              +91 {p}
            </a>
          ))}
        </div>
        <div className="text-sm">
          <div className="text-xs uppercase tracking-widest text-[#e8c48a]">Visit</div>
          <p className="mt-2 text-[#fbf6ef]/70">{BRAND.address}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-xs text-[#fbf6ef]/40 md:px-8">
        © {new Date().getFullYear()} Sister&apos;s Beauty Hub • Jabalpur. All rights reserved.
      </div>
    </footer>
  );
}
