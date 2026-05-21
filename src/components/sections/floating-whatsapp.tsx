import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { buildWhatsAppLink } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        Chat with us
      </span>
    </a>
  );
}
