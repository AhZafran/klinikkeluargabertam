import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function TopBar() {
  const { address, email, phone, hoursSummary } = siteConfig;
  const addressLine = `${address.line1}, ${address.city}, ${address.state}`;
  const telHref = `tel:${phone.replace(/\s|-/g, "")}`;

  return (
    <div className="hidden bg-brand text-brand-foreground md:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-6 px-4 text-xs sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">{addressLine}</span>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">{hoursSummary}</span>
        </div>

        <a
          href={`mailto:${email}`}
          className="hidden items-center gap-2 transition-opacity hover:opacity-80 lg:flex"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">{email}</span>
        </a>

        <a
          href={telHref}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>{phone}</span>
        </a>
      </div>
    </div>
  );
}
