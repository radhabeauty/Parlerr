import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { BRAND, GALLERY, telLink, waLink } from "./data";

export function Hero() {
  const featured = [GALLERY[2], GALLERY[10], GALLERY[5], GALLERY[18]];
  return (
    <section
      id="top"
      className="relative grain isolate overflow-hidden bg-maroon-gradient pt-28 pb-20 text-[#fbf6ef] md:pt-36 md:pb-32"
    >
      {/* gold orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.45),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(177,69,94,0.5),transparent_70%)] blur-3xl" />
      {/* floating petals */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-2 w-2 rounded-full bg-[#e8c48a]/70"
          style={{ left: `${(i * 53) % 95}%`, top: `${(i * 37) % 80}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e8c48a]/40 bg-white/5 px-3 py-1 text-xs font-medium text-[#e8c48a] backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> Home service available • Jabalpur
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display mt-6 text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-[5.5rem]"
          >
            Sister&apos;s
            <br />
            <span className="text-gold-gradient italic">Beauty Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#fbf6ef]/80 sm:text-lg"
          >
            {BRAND.tagline}. Bridal makeup, party glam, and intricate mehndi —
            with home service across the city. Bridal packages starting{" "}
            <span className="font-semibold text-[#e8c48a]">₹4,000</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp 8103994349
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full border border-[#e8c48a]/50 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#fbf6ef] backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-[#fbf6ef]/80 transition hover:text-[#e8c48a]"
            >
              <MapPin className="h-4 w-4" /> Visit Studio
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#fbf6ef]/60">
            <div className="flex items-center gap-1.5">
              <span className="text-base text-[#e8c48a]">★★★★★</span> Trusted by brides
            </div>
            <div>• 100+ bridal looks</div>
            <div>• HD & airbrush makeup</div>
          </div>
        </div>

        {/* 3D-ish stacked photo collage */}
        <div className="relative mx-auto h-[420px] w-full max-w-md md:h-[520px]">
          {featured.map((img, i) => {
            const cfg = [
              { x: 0, y: 0, r: -6, z: 30 },
              { x: 120, y: 40, r: 5, z: 40 },
              { x: -30, y: 180, r: -3, z: 20 },
              { x: 140, y: 240, r: 7, z: 10 },
            ][i];
            return (
              <motion.div
                key={img.full}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: cfg.y, rotate: cfg.r }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: cfg.r * 0.4, zIndex: 50 }}
                style={{ left: cfg.x, zIndex: cfg.z }}
                className="absolute top-0 h-44 w-32 overflow-hidden rounded-2xl border-2 border-[#e8c48a]/70 shadow-luxe sm:h-56 sm:w-40"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a0a18]/40 to-transparent" />
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-2 -left-2 rounded-2xl bg-[#fbf6ef] px-4 py-3 text-[#3a0a18] shadow-gold"
          >
            <div className="font-display text-2xl leading-none">100+</div>
            <div className="text-[10px] uppercase tracking-widest text-[#3a0a18]/60">
              Bridal looks
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
