import Image from "next/image";
import { Heart, UserRound } from "lucide-react";

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
            Rawatan Berkualiti{" "}
            <span className="text-primary">Perkhidmatan Lebih Mesra</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:mt-5 sm:text-lg">
            Kami menyediakan rawatan untuk seisi keluarga anda dengan layanan
            yang mesra dan penjagaan yang menyeluruh setiap hari.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/15 via-secondary to-primary/10 blur-xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl sm:h-32 sm:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-primary/15 blur-2xl sm:h-36 sm:w-36"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-secondary via-white to-secondary shadow-xl ring-1 ring-primary/10">
            <div className="relative aspect-[5/6] w-full">
              <Image
                src="/HeroSection/doctor.png"
                alt="Dr Adelin Zin di Klinik Keluarga Bertam Impian"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          <div className="absolute right-2 top-[58%] -translate-y-1/2 inline-flex max-w-[14rem] items-center gap-2.5 rounded-2xl bg-white/95 px-2.5 py-1.5 shadow-lg ring-1 ring-border backdrop-blur sm:-right-4 sm:max-w-[16rem] sm:gap-3 sm:px-3.5 sm:py-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-10 sm:w-10">
              <UserRound className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <div className="min-w-0 pr-1">
              <p className="text-[11px] font-bold uppercase leading-tight tracking-wide text-foreground">
                Dr Adelin Zin
              </p>
              <p className="text-[10px] leading-tight text-muted-foreground sm:text-[11px]">
                MD Ukrida · General Practitioner
              </p>
            </div>
          </div>

          <div className="absolute left-2 bottom-6 inline-flex max-w-[14rem] items-center gap-2.5 rounded-2xl bg-white/95 px-2.5 py-1.5 shadow-lg ring-1 ring-border backdrop-blur sm:-left-4 sm:bottom-10 sm:max-w-[16rem] sm:gap-3 sm:px-3.5 sm:py-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--whatsapp)]/90 text-white sm:h-10 sm:w-10">
              <Heart className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
            </span>
            <div className="min-w-0 pr-1">
              <p className="text-[11px] font-bold uppercase leading-tight tracking-wide text-foreground">
                Kesihatan Keluarga
              </p>
              <p className="text-[10px] leading-tight text-muted-foreground sm:text-[11px]">
                Rawatan Harian & Susulan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 sm:pb-20 lg:pb-24" />
    </section>
  );
}
