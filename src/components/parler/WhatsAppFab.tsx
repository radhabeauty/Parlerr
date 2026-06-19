import { MessageCircle } from "lucide-react";
import { waLink } from "./data";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-luxe transition hover:scale-110 sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
