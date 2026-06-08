import Image from "next/image";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { FacebookIcon, InstagramIcon } from "@/components/icons/socials";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Panel", href: "#panel" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a1126] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="#top"
              aria-label={siteConfig.name}
              className="inline-flex items-center rounded-2xl bg-white px-4 py-2 shadow-sm"
            >
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={1609}
                height={432}
                className="h-10 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              {siteConfig.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppLink()}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[var(--whatsapp)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navigasi</p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Waktu operasi</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {siteConfig.hours.map((h, i) => (
                <li key={h.label || `hours-${i}`}>
                  {h.label && (
                    <span className="block text-white">{h.label}</span>
                  )}
                  {h.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Hubungi kami</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                {siteConfig.address.postcode} {siteConfig.address.city},{" "}
                {siteConfig.address.state}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s|-/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/60 sm:mt-12 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Hak cipta
            terpelihara.
          </p>
          <p>
            Dibina dengan ❤ untuk komuniti {siteConfig.address.city}.
          </p>
        </div>
      </div>
    </footer>
  );
}
