import { Phone, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { BRAND, telLink, waLink } from "./data";

export function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`;
  return (
    <section id="visit" className="relative bg-[#fbf6ef] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b1455e]">
              Visit & Book
            </p>
            <h2 className="font-display mt-3 text-4xl text-[#3a0a18] sm:text-5xl md:text-6xl">
              Let&apos;s make you
              <br />
              <span className="text-gold-gradient italic">glow</span>.
            </h2>
            <p className="mt-5 max-w-md text-[#3a0a18]/70">
              Drop by the studio or call us — we usually reply on WhatsApp within
              minutes.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#25d366] p-4 text-white shadow-luxe transition hover:scale-[1.02]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/80">
                    WhatsApp
                  </div>
                  <div className="font-display text-2xl">+91 8103994349</div>
                </div>
              </a>
              <a
                href={telLink}
                className="flex items-center gap-4 rounded-2xl border border-[#d4a574]/50 bg-white p-4 text-[#3a0a18] transition hover:bg-[#fff8ec]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-[#3a0a18]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#3a0a18]/60">
                    Call (primary)
                  </div>
                  <div className="font-display text-2xl">+91 8103994349</div>
                </div>
              </a>

              <div className="rounded-2xl border border-[#d4a574]/30 bg-white p-4">
                <div className="text-xs uppercase tracking-widest text-[#3a0a18]/60">
                  Alternate numbers
                </div>
                <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 font-display text-xl text-[#3a0a18]">
                  {BRAND.altPhones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="hover:text-[#b1455e]">
                      +91 {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#d4a574]/30 bg-white p-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#3a0a18] text-[#fbf6ef]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-[#3a0a18]/60">
                    Studio address
                  </div>
                  <div className="font-display text-lg leading-snug text-[#3a0a18]">
                    {BRAND.address}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-xs font-semibold text-[#b1455e] underline-offset-2 hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[#d4a574]/30 bg-white p-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#f7d9d3] text-[#3a0a18]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#3a0a18]/60">
                    Hours
                  </div>
                  <div className="text-sm text-[#3a0a18]">
                    Mon – Sun • 9:00 AM – 9:00 PM • Home service on appointment
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-2 border-[#d4a574]/40 shadow-luxe">
            <iframe
              title="Sister's Beauty Hub on the map"
              src={mapSrc}
              loading="lazy"
              className="h-full min-h-[460px] w-full"
            />
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#3a0a18] px-5 py-3 text-sm font-semibold text-[#fbf6ef] shadow-luxe hover:bg-[#5a1428]"
            >
              <Instagram className="h-4 w-4 text-[#e8c48a]" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
