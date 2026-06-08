import * as React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/60 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Kami sedia membantu anda. Hubungi kami untuk sebarang pertanyaan
            atau tempahan temu janji.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-primary">
              Maklumat Perhubungan
            </h3>

            <ul className="mt-6 space-y-5">
              <InfoRow
                icon={Phone}
                title="Telefon"
                lines={[siteConfig.phone]}
              />
              <InfoRow
                icon={Mail}
                title="Email"
                lines={[siteConfig.email]}
              />
              <InfoRow
                icon={MapPin}
                title="Alamat"
                lines={[
                  siteConfig.address.line1,
                  siteConfig.address.line2,
                  `${siteConfig.address.postcode} ${siteConfig.address.city}, ${siteConfig.address.state}`,
                ]}
              />
              <InfoRow
                icon={Clock}
                title="Waktu Operasi"
                lines={siteConfig.hours.flatMap((h) =>
                  h.label ? [h.label, ...h.lines] : h.lines,
                )}
              />
            </ul>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--whatsapp)]/90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Whatsapp Kami Sekarang
            </a>
          </div>

          <div className="h-full min-h-[20rem] overflow-hidden rounded-3xl border border-border bg-white shadow-sm sm:min-h-[28rem]">
            <iframe
              title={`Lokasi ${siteConfig.name}`}
              src={siteConfig.mapEmbedUrl}
              className="block h-full min-h-[20rem] w-full sm:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-primary">{title}</p>
        <div className="mt-0.5 space-y-0.5 text-sm text-muted-foreground">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </li>
  );
}
