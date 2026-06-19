import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink } from "./data";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#d4a574]/40 bg-[#3a0a18]/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-px">
        <a
          href={telLink}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#fbf6ef]"
        >
          <Phone className="h-4 w-4 text-[#e8c48a]" /> Call
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25d366] py-3.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
