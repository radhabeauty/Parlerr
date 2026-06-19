import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "./data";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % GALLERY.length));
  const prev = () =>
    setActive((i) =>
      i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length,
    );

  return (
    <section id="gallery" className="relative bg-[#3a0a18] py-24 text-[#fbf6ef] md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c48a]">
              Bridal Portfolio
            </p>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl">
              Real brides, <span className="text-gold-gradient italic">real magic</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#fbf6ef]/70">
            A glimpse of recent work — bridal makeup, party looks, mehndi, and
            hairstyling from the studio in Jabalpur.
          </p>
        </div>

        <div className="mt-12 columns-2 gap-3 sm:columns-3 md:columns-4 [&>*]:mb-3">
          {GALLERY.map((img, i) => (
            <motion.button
              key={img.full}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-[#e8c48a]/20 break-inside-avoid"
            >
              <img
                src={img.thumb}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a0a18]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={GALLERY[active].full}
              alt={GALLERY[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
