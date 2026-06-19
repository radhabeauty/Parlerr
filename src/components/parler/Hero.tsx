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
      className="relative grain isolate overflow-hidden bg-maroon-gradient gold-mist pt-28 pb-28 text-[#fbf6ef] md:pt-36 md:pb-36"
    >
      {/* ambient orbs — lighter blur for perf */}
      <motion.div
        style={{ y: yC }}
        className="pointer-events-none absolute -top-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.45),transparent_70%)] blur-2xl"
      />
      <motion.div
        style={{ y: yB }}
        className="pointer-events-none absolute -bottom-36 -right-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(177,69,94,0.5),transparent_70%)] blur-2xl"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.4)_100%)]" />

      {/* floating sparkles — reduced count */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full bg-[#e8c48a]"
          style={{
            left: `${(i * 53) % 90 + 5}%`,
            top: `${(i * 37) % 85 + 8}%`,
            boxShadow: "0 0 10px rgba(232,196,138,0.8)",
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.25, 1, 0.25],
          }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
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
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
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

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#fbf6ef]/75">
            <div className="flex items-center gap-1.5">
              <span className="text-base text-[#e8c48a]">★★★★★</span>
              Trusted by 200+ brides
            </div>
            <div className="hidden sm:block">• HD & airbrush makeup</div>
            <div>• {BRAND.address.split(",")[0]}</div>
          </div>
        </div>

        {/* photo collage */}
        <div className="relative mx-auto mt-4 h-[480px] w-full max-w-md md:mt-0 md:h-[580px]">
          {/* soft gold halo (static, GPU-friendly) */}
          <div className="pointer-events-none absolute inset-8 rounded-full border border-[#e8c48a]/25" />
          <div className="pointer-events-none absolute inset-14 rounded-full bg-[radial-gradient(circle,rgba(232,196,138,0.18),transparent_65%)]" />
          {featured.map((img, i) => {
            const cfg = [
              { left: "2%", top: "0%", r: -6, z: 30, yMotion: yA },
              { left: "48%", top: "6%", r: 6, z: 40, yMotion: yB },
              { left: "0%", top: "48%", r: -4, z: 20, yMotion: yC },
              { left: "50%", top: "54%", r: 7, z: 25, yMotion: yA },
            ][i];
            return (
              <motion.div
                key={img.full}
                initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.9 }}
                animate={{ opacity: 1, rotate: cfg.r, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.06, rotate: cfg.r * 0.3, zIndex: 50 }}
                style={{ left: cfg.left, top: cfg.top, zIndex: cfg.z, y: cfg.yMotion }}
                className="absolute h-[45%] w-[48%] overflow-hidden rounded-2xl border-2 border-[#e8c48a]/80 shadow-luxe"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="cinematic-img h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a0a18]/20 via-transparent to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px shimmer-gold" />
              </motion.div>
            );
          })}

          {/* bride count badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 14 }}
            className="absolute -bottom-2 left-2 z-40 flex items-center gap-3 rounded-2xl border border-[#e8c48a]/40 bg-[#fbf6ef] px-4 py-2.5 text-[#3a0a18] shadow-gold"
          >
            <Crown className="h-5 w-5 text-[#b1455e]" />
            <div>
              <div className="font-display text-xl leading-none">200+</div>
              <div className="text-[9px] uppercase tracking-widest text-[#3a0a18]/60">
                Brides styled
              </div>
            </div>
          </motion.div>

          {/* price badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 14 }}
            className="absolute -right-1 top-1 z-40 rounded-2xl bg-gold-gradient px-3.5 py-2.5 text-[#3a0a18] shadow-luxe"
          >
            <div className="text-[9px] uppercase tracking-widest opacity-80">Starts at</div>
            <div className="font-display text-xl leading-none">₹4,000</div>
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
