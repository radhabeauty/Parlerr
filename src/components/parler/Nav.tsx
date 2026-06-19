import { Phone } from "lucide-react";
import { telLink } from "./data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reels", label: "Reels" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/40 bg-white/70 px-4 py-2.5 backdrop-blur-md shadow-luxe md:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-gradient text-[#3a0a18] font-display text-lg font-bold">
            S
          </span>
          <span className="truncate font-display text-lg leading-none text-[#3a0a18] sm:text-xl">
            Sister&apos;s <span className="text-gold-gradient">Beauty Hub</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#3a0a18]/80 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#3a0a18] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={telLink}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#3a0a18] px-3.5 py-2 text-xs font-semibold text-[#fbf6ef] hover:bg-[#5a1428] transition-colors sm:text-sm sm:px-4"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Call</span> 8103994349
        </a>
      </div>
    </header>
  );
}
