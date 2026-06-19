import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { SERVICES, waLink } from "./data";

export function Services() {
  return (
    <section id="services" className="relative bg-[#fbf6ef] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b1455e]">
            Signature Services
          </p>
          <h2 className="font-display mt-3 text-4xl text-[#3a0a18] sm:text-5xl md:text-6xl">
            Looks that turn <span className="text-gold-gradient italic">heads</span>
          </h2>
          <p className="mt-4 text-[#3a0a18]/70">
            From haldi morning to reception night — every service crafted with premium
            products, gentle technique, and the eye of a sister.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              style={{ transformPerspective: 1000 }}
              className="group relative overflow-hidden rounded-3xl border border-[#d4a574]/40 bg-white p-7 shadow-luxe transition-shadow hover:shadow-gold"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold-gradient opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="absolute inset-x-0 top-0 h-px shimmer-gold" />
              <div className="text-xs font-semibold uppercase tracking-widest text-[#b1455e]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display mt-2 text-3xl text-[#3a0a18]">{s.title}</h3>
              <div className="mt-1 text-sm font-medium text-gold-gradient inline-block">
                {s.price}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#3a0a18]/70">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[#3a0a18]/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a574]" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi! I'd like to know more about ${s.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3a0a18] underline-offset-4 hover:underline"
              >
                <MessageCircle className="h-4 w-4 text-[#25d366]" />
                Book on WhatsApp
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
