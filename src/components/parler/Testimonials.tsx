import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Ornament } from "./Ornament";

const TESTIMONIALS = [
  {
    name: "Anjali S.",
    role: "Bride • Jabalpur",
    quote:
      "My HD bridal makeup stayed flawless from haldi to vidaai. Sister didi made me feel like royalty — every photograph turned out magazine-worthy.",
  },
  {
    name: "Pooja R.",
    role: "Sister of bride",
    quote:
      "They came home for the entire family — six of us — and finished beautifully on time. So patient, gentle, and the products felt premium.",
  },
  {
    name: "Neha K.",
    role: "Engagement client",
    quote:
      "The mehndi was rich, dark, and lasted weeks. The Arabic patterns on my hands got so many compliments at the sangeet.",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-[#fbf6ef] py-20 md:py-28">
      <Ornament />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b1455e]">
            Love Letters
          </p>
          <h2 className="font-display mt-3 text-4xl text-[#3a0a18] sm:text-5xl">
            What our brides
            <span className="text-gold-gradient italic"> whisper</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl border border-[#d4a574]/40 bg-gradient-to-br from-white to-[#fff8ec] p-7 shadow-luxe"
            >
              <Quote className="h-8 w-8 text-[#d4a574]/60" />
              <blockquote className="font-display mt-4 text-xl leading-snug text-[#3a0a18]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#d4a574]/20 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient font-display text-lg text-[#3a0a18]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#3a0a18]">{t.name}</div>
                  <div className="text-xs text-[#3a0a18]/60">{t.role}</div>
                </div>
                <div className="ml-auto text-sm text-[#d4a574]">★★★★★</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
