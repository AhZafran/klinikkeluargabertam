import Image from "next/image";
import { ShieldCheck, Users } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Berlesen & dipercayai",
    description:
      "Berdaftar dengan KKM (Kementerian Kesihatan Malaysia) & MMC. Standard klinikal yang konsisten.",
  },
  {
    icon: Users,
    title: "Pasukan mesra",
    description:
      "Doktor dan jururawat berpengalaman yang mengambil masa untuk benar-benar mendengar.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mx-auto mb-16 w-full max-w-sm sm:mb-20 sm:max-w-md lg:mb-0">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary/70" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/MengenaiKami/bertam1.webp"
              alt={`Pasukan ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 20vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-bottom-12 sm:w-[80%] sm:p-5">
            <p className="text-sm font-semibold text-primary">
              &ldquo;Doktor & staf yang sangat caring. Anak saya selesa setiap
              kali datang.&rdquo;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Puan Aisyah, pesakit tetap
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Mengenai Kami
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Doktor keluarga di {siteConfig.address.city}, untuk keluarga anda
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {siteConfig.name} telah berkhidmat kepada komuniti{" "}
            {siteConfig.address.city} dan sekitarnya selama lebih satu dekad.
            Kami percaya rawatan yang baik bermula dengan hubungan yang baik,
            jadi setiap konsultasi diuruskan dengan penuh perhatian, tanpa
            tergesa-gesa.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Kemudahan klinik kami merangkumi bilik konsultasi, bilik rawatan,
            farmasi dalaman, ujian darah ringkas, ECG, dan rawatan luka. Kami
            juga menerima panel insurans dan korporat utama.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
