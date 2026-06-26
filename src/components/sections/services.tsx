"use client";

import * as React from "react";
import { addCollection, Icon } from "@iconify/react";
import medicalIcons from "@iconify-json/medical-icon/icons.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

addCollection(medicalIcons);

type Item = {
  title: string;
  subtitle: string;
  icon?: string;
};
type Category = {
  icon: string;
  title: string;
  description: string;
  items: Item[];
};

const categories: Category[] = [
  {
    icon: "medical-icon:i-family-practice",
    title: "Rawatan Umum & Saringan Kesihatan",
    description:
      "Rawatan harian, ujian diagnostik dan saringan kesihatan untuk membantu anda menjaga kesihatan dengan lebih baik.",
    items: [
      {
        title: "Rawatan Pesakit Luar",
        subtitle: "Pemeriksaan dan rawatan untuk masalah kesihatan harian untuk seisi keluarga.",
        icon: "medical-icon:i-outpatient",
      },
      {
        title: "Ujian Pantas Di Klinik",
        subtitle: "Ujian darah FBC, Swab Test dan Urine Test tersedia bagi membantu doktor membuat penilaian dan rawatan dengan segera.",
        icon: "medical-icon:i-laboratory",
      },
      {
        title: "Pakej Saringan Kesihatan",
        subtitle: "Pemeriksaan kesihatan berkala untuk pengesanan awal, mengenalpasti faktor risiko dan pemantauan tahap kesihatan anda.",
        icon: "medical-icon:i-health-services",
      },
      {
        title: "Ujian Makmal Komprehensif",
        subtitle: "Pelbagai ujian darah dan makmal lanjutan yang diintegrasi terus ke sistem klinik kami.",
        icon: "medical-icon:i-pathology",
      },
    ],
  },
  {
    icon: "medical-icon:i-pediatrics",
    title: "Kesihatan Kanak-Kanak & Bayi",
    description:
      "Pemantauan tumbesaran, vaksinasi dan rawatan khas untuk si manja anda.",
    items: [
      {
        title: "Pemantauan Tumbesaran",
        subtitle: "Memastikan perkembangan si manja mengikut tahap usia yang sihat.",
        icon: "medical-icon:i-pediatrics",
      },
      {
        title: "Suntikan Vaksinasi Wajib",
        subtitle: "Perlindungan penting mengikut Jadual Imunisasi Kebangsaan.",
        icon: "medical-icon:i-immunizations",
      },
      {
        title: "Suntikan Vaksinasi Tambahan",
        subtitle: "Vaksin Influenza, Rotavirus dan Chicken Pox untuk perlindungan yang lebih menyeluruh.",
        icon: "medical-icon:i-infectious-diseases",
      },
      {
        title: "Rawatan Nebulizer",
        subtitle: "Membantu anak bernafas dengan lebih selesa dan memberikan kelegaan untuk si manja.",
        icon: "medical-icon:i-respiratory",
      },
    ],
  },
  {
    icon: "medical-icon:i-immunizations",
    title: "Vaksinasi Dewasa",
    description:
      "Kurangkan risiko jangkitan dan komplikasi penyakit melalui vaksinasi yang sesuai dengan keperluan anda.",
    items: [
      {
        title: "Vaksin Influenza",
        subtitle: "Perlindungan terhadap selsema bermusim dan komplikasinya.",
        icon: "medical-icon:i-immunizations",
      },
      {
        title: "Vaksin Pneumococcal",
        subtitle: "Perlindungan daripada jangkitan paru-paru dan penyakit serius berkaitan.",
        icon: "medical-icon:i-respiratory",
      },
      {
        title: "Vaksin Typhoid",
        subtitle: "Perlindungan daripada demam kepialu untuk individu dan pengendali makanan.",
        icon: "medical-icon:i-infectious-diseases",
      },
      {
        title: "Vaksin Hepatitis B",
        subtitle: "Perlindungan jangka panjang terhadap jangkitan Hepatitis B.",
        icon: "medical-icon:i-internal-medicine",
      },
      {
        title: "Vaksin Meningococcal",
        subtitle: "Disyorkan untuk jemaah umrah, haji dan individu berisiko.",
        icon: "medical-icon:i-neurology",
      },
    ],
  },
  {
    icon: "medical-icon:i-surgery",
    title: "Minor Surgery & Rawatan Luka",
    description:
      "Daripada luka harian hingga penjagaan luka kronik, kami membantu proses penyembuhan dengan pemantauan yang berterusan.",
    items: [
      {
        title: "Pembuangan Lipoma",
        subtitle: "Prosedur kecil untuk membuang lipoma yang mengganggu keselesaan anda.",
        icon: "medical-icon:i-surgery",
      },
      {
        title: "Rawatan Luka Terbakar",
        subtitle: "Dressing moden untuk membantu proses penyembuhan luka terbakar.",
        icon: "medical-icon:i-emergency",
      },
      {
        title: "Rawatan Bisul",
        subtitle: "Rawatan bisul dengan prosedur yang sesuai untuk membantu penyembuhan.",
        icon: "medical-icon:i-dermatology",
      },
      {
        title: "Jahitan Luka",
        subtitle: "Rawatan luka dengan jahitan atau glu mengikut kesesuaian.",
        icon: "medical-icon:i-first-aid",
      },
      {
        title: "Rawatan Luka Kronik",
        subtitle: "Penjagaan luka diabetes untuk membantu penyembuhan dan mencegah komplikasi.",
        icon: "medical-icon:i-diabetes-education",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Perkhidmatan Kami
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Penjagaan kesihatan menyeluruh di bawah satu bumbung
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Rangkaian rawatan klinikal kami dikategorikan mengikut keperluan
            anda dan keluarga, daripada rawatan harian hinggalah prosedur khas.
          </p>
        </div>

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          {categories.map(({ icon, title, description, items }) => (
            <div key={title}>
              <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                  <Icon icon={icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>

              <ItemsCarousel icon={icon} items={items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItemsCarousel({ icon, items }: { icon: string; items: Item[] }) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative mt-7 sm:mt-9">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 xl:grid-cols-4"
      >
        {items.map(({ title: itemTitle, subtitle, icon: itemIcon }) => (
          <Card
            key={itemTitle}
            className="group shrink-0 basis-[calc(50%-0.5rem)] snap-start overflow-hidden border-border bg-white p-0 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:shrink sm:basis-auto"
          >
            <CardContent className="flex h-full flex-col p-0">
              <div className="flex items-center justify-center bg-gradient-to-br from-secondary via-white to-secondary py-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon icon={itemIcon ?? icon} className="h-8 w-8" />
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-primary px-4 py-4 text-primary-foreground">
                <p className="text-base font-semibold leading-snug sm:text-sm">
                  {itemTitle}
                </p>
                <p className="mt-1 text-sm leading-snug text-primary-foreground/80 sm:text-xs">
                  {subtitle}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByDir(-1)}
        aria-label="Sebelumnya"
        className="absolute left-1 top-[40%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-primary shadow-md ring-1 ring-border backdrop-blur transition-colors hover:bg-white active:scale-95 sm:hidden"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByDir(1)}
        aria-label="Seterusnya"
        className="absolute right-1 top-[40%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-primary shadow-md ring-1 ring-border backdrop-blur transition-colors hover:bg-white active:scale-95 sm:hidden"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
