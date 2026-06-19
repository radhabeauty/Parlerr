import { motion } from "framer-motion";
import { Home, Award, Heart, Clock } from "lucide-react";

const ITEMS = [
  { icon: Home, title: "Home Service", desc: "Bridal & party glam at your doorstep across Jabalpur." },
  { icon: Award, title: "Premium Products", desc: "HD, airbrush, and trusted long-wear brands only." },
  { icon: Heart, title: "Caring Touch", desc: "Patient consultations, trials, and sensitive-skin friendly." },
  { icon: Clock, title: "Always On Time", desc: "We respect your timeline — haldi to vidaai." },
];

const STATS = [
  { n: "100+", l: "Brides styled" },
  { n: "5★", l: "Average rating" },
  { n: "7+", l: "Years experience" },
  { n: "₹4k", l: "Starts from" },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-maroon-gradient py-24 text-[#fbf6ef] md:py-32 grain isolate">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8c48a]">
              Why brides choose us
            </p>
            <h2 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl">
              Crafted with <span className="text-gold-gradient italic">love</span>,
              <br />
              delivered with care.
            </h2>
            <p className="mt-5 max-w-md text-[#fbf6ef]/75">
              Sister&apos;s Beauty Hub is a homegrown Jabalpur studio loved for honest
              pricing, premium products, and looks that hold from morning rituals to
              late-night receptions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="font-display text-4xl text-gold-gradient">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-[#fbf6ef]/60">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-[#e8c48a]/25 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-[#3a0a18]">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-4 text-xl">{it.title}</h3>
                <p className="mt-1 text-sm text-[#fbf6ef]/70">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
