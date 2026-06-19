import { GALLERY } from "./data";

export function Marquee() {
  const row = [...GALLERY.slice(0, 14), ...GALLERY.slice(0, 14)];
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#d4a574]/30 bg-[#fbf6ef] py-6"
    >
      <div className="flex w-max animate-marquee gap-4">
        {row.map((img, i) => (
          <div
            key={i}
            className="relative h-28 w-44 shrink-0 overflow-hidden rounded-xl shadow-md sm:h-36 sm:w-56"
          >
            <img
              src={img.thumb}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fbf6ef] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fbf6ef] to-transparent" />
    </section>
  );
}
