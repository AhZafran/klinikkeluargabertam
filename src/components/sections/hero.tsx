import Image from "next/image";
import {
  ArrowRight,
  Baby,
  Bandage,
  HeartPulse,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

const heroServices = [
  { icon: Stethoscope, label: "Konsultasi Am" },
  { icon: Syringe, label: "Vaksinasi" },
  { icon: Baby, label: "Ibu & Kanak-kanak" },
  { icon: HeartPulse, label: "Pemeriksaan Kesihatan" },
  { icon: Bandage, label: "Rawatan Luka" },
  { icon: Pill, label: "Farmasi Dalaman" },
];

const heroStats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "7", label: "Hari Seminggu" },
  { value: "8+", label: "Perkhidmatan Utama" },
  { value: "5★", label: "Maklum Balas Pesakit" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-secondary via-secondary/40 to-background"
    >
      <Image
        src="/HeroSection/clinic-bg.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover opacity-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 sm:gap-12 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-28">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Penjagaan kesihatan keluarga yang{" "}
            <span className="text-primary">mesra & dipercayai</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
            Dari rawatan harian, vaksinasi, kesihatan ibu & kanak-kanak hingga
            rawatan luka — pasukan kami di {siteConfig.name} sedia membantu anda
            dan keluarga 7 hari seminggu.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-[var(--whatsapp)]/90 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Klinik
            </a>
            <a
              href="#services"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-6 text-base font-medium text-primary transition-colors hover:bg-secondary sm:w-auto"
            >
              Lihat Perkhidmatan <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

        <div className="relative">
          <div className="absolute inset-x-6 top-6 h-full rounded-3xl bg-primary/10" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
            <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-secondary via-white to-secondary">
              <Image
                src="/HeroSection/doctor.png"
                alt="Doktor di Klinik Keluarga Bertam"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-bottom"
              />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm ring-1 ring-primary/10 backdrop-blur">
                <Stethoscope className="h-4 w-4" />
                Doktor bertugas hari ini
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-border backdrop-blur">
                <p className="text-sm font-semibold text-foreground">
                  Dr Adelin
                </p>
                <p className="text-xs text-muted-foreground">
                  Family Medicine Doctor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {heroServices.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-3 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:gap-3 sm:p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <p className="text-xs font-medium text-foreground sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-y-5 rounded-3xl bg-primary px-4 py-6 text-center text-primary-foreground shadow-xl sm:mt-6 sm:grid-cols-4 sm:gap-y-6 sm:px-10 sm:py-8">
          {heroStats.map(({ value, label }) => (
            <div key={label}>
              <dt className="text-2xl font-bold sm:text-4xl">{value}</dt>
              <dd className="mt-1 text-[11px] text-primary-foreground/80 sm:text-sm">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
