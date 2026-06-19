import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, MapPin, Sparkles, Crown } from "lucide-react";
import { BRAND, GALLERY, telLink, waLink } from "./data";

const words = ["Bridal", "artistry,", "crafted", "with", "love."];

export function Hero() {
  const featured = [GALLERY[2], GALLERY[10], GALLERY[5], GALLERY[18]];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative grain isolate overflow-hidden bg-maroon-gradient pt-28 pb-24 text-[#fbf6ef] md:pt-36 md:pb-36"
    >
      {/* ambient orbs */}
      <motion.div
        style={{ y: yC }}
        className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.5),transparent_70%)] blur-3xl"
      />
      <motion.div
        style={{ y: yB }}
        className="pointer-events-none absolute -bottom-48 -right-24 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(177,69,94,0.55),transparent_70%)] blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

      {/* floating sparkles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full bg-[#e8c48a]"
          style={{
            left: `${(i * 41) % 95 + 2}%`,
            top: `${(i * 29) % 90 + 5}%`,
            boxShadow: "0 0 12px rgba(232,196,138,0.8)",
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.25 }}
        />
      ))}

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#e8c48a]/40 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-[#e8c48a] backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-[0.25em]">Est. Jabalpur</span>
            <span className="text-[#e8c48a]/40">•</span>
            <span>Home service available</span>
          </motion.div>

          <h1 className="font-display mt-7 text-[3.5rem] leading-[0.92] tracking-tight sm:text-7xl md:text-[6.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Sister&apos;s
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-gold-gradient inline-block italic"
              >
                Beauty Hub
              </motion.span>
            </span>
          </h1>

          {/* ornamental rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex origin-left items-center gap-3"
          >
            <span className="h-px w-16 bg-gradient-to-r from-[#e8c48a] to-transparent" />
            <Crown className="h-4 w-4 text-[#e8c48a]" />
            <span className="text-xs uppercase tracking-[0.4em] text-[#e8c48a]/80">
              Bridal • Party • Mehndi
            </span>
          </motion.div>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-[#fbf6ef]/80 sm:text-lg">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.07 }}
                className="mr-1.5 inline-block"
              >
                {w}
              </motion.span>
            ))}{" "}
            Bridal packages starting{" "}
            <span className="font-display text-xl text-[#e8c48a]">₹4,000</span>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#25d366] px-7 py-4 text-sm font-semibold text-white shadow-luxe transition hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircle className="h-4 w-4" /> WhatsApp 8103994349
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full border border-[#e8c48a]/60 bg-white/5 px-7 py-4 text-sm font-semibold text-[#fbf6ef] backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[#e8c48a]" /> Call Now
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-medium text-[#fbf6ef]/80 transition hover:text-[#e8c48a]"
            >
              <MapPin className="h-4 w-4" /> Visit Studio
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#fbf6ef]/60">
            <div className="flex items-center gap-1.5">
              <span className="text-base text-[#e8c48a]">★★★★★</span>
              Trusted by 100+ brides
            </div>
            <div className="hidden sm:block">• HD & airbrush makeup</div>
            <div>• {BRAND.address.split(",")[0]}</div>
          </div>
        </div>

        {/* photo collage */}
        <div className="relative mx-auto h-[460px] w-full max-w-md md:h-[560px]">
          {/* gold framing circle */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-[#e8c48a]/30"
          />
          {featured.map((img, i) => {
            const cfg = [
              { x: 10, y: 0, r: -7, z: 30, yMotion: yA },
              { x: 150, y: 30, r: 6, z: 40, yMotion: yB },
              { x: -20, y: 200, r: -4, z: 20, yMotion: yC },
              { x: 160, y: 260, r: 8, z: 10, yMotion: yA },
            ][i];
            return (
              <motion.div
                key={img.full}
                initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 1, y: cfg.y, rotate: cfg.r, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.06, rotate: cfg.r * 0.3, zIndex: 50 }}
                style={{ left: cfg.x, zIndex: cfg.z, y: cfg.yMotion }}
                className="absolute top-0 h-48 w-36 overflow-hidden rounded-2xl border-2 border-[#e8c48a]/80 shadow-luxe sm:h-60 sm:w-44"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a0a18]/50 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px shimmer-gold" />
              </motion.div>
            );
          })}

          {/* bride count badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 14 }}
            className="absolute -bottom-4 left-0 flex items-center gap-3 rounded-2xl border border-[#e8c48a]/40 bg-[#fbf6ef] px-5 py-3 text-[#3a0a18] shadow-gold"
          >
            <Crown className="h-6 w-6 text-[#b1455e]" />
            <div>
              <div className="font-display text-2xl leading-none">100+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#3a0a18]/60">
                Brides styled
              </div>
            </div>
          </motion.div>

          {/* price badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 14 }}
            className="absolute right-0 top-2 rounded-2xl bg-gold-gradient px-4 py-3 text-[#3a0a18] shadow-luxe"
          >
            <div className="text-[10px] uppercase tracking-widest opacity-80">Starts at</div>
            <div className="font-display text-2xl leading-none">₹4,000</div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#e8c48a]/70">
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-6 w-px bg-gradient-to-b from-[#e8c48a] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
