import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { VIDEOS } from "./data";

function Reel({ src, poster, i }: { src: string; poster: string; i: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="relative aspect-[9/16] overflow-hidden rounded-3xl border-2 border-[#e8c48a]/40 shadow-luxe"
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </motion.div>
  );
}

export function Reels() {
  return (
    <section id="reels" className="relative bg-[#fbf6ef] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b1455e]">
            Studio Reels
          </p>
          <h2 className="font-display mt-3 text-4xl text-[#3a0a18] sm:text-5xl md:text-6xl">
            Behind the <span className="text-gold-gradient italic">brush</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {VIDEOS.map((v, i) => (
            <Reel key={v.src} {...v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
