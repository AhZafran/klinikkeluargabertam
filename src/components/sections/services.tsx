"use client";

import * as React from "react";
import Image from "next/image";
import { addCollection, Icon } from "@iconify/react";
import medicalIcons from "@iconify-json/medical-icon/icons.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

addCollection(medicalIcons);

type Item = {
  title: string;
  subtitle: string;
  image?: string;
  imagePosition?: string;
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
      "Rawatan pesakit luar harian, saringan menyeluruh dan ujian makmal di bawah satu bumbung.",
    items: [
      {
        title: "Rawatan Pesakit Luar",
        subtitle: "Demam, batuk, selsema, sakit tekak & cirit-birit",
        image: "/rawatanumum/demam.jpg",
      },
      {
        title: "Pemeriksaan Pantas",
        subtitle: "FBC, ujian air kencing, swab Influenza & Denggi",
        image: "/rawatanumum/swabtest.webp",
      },
      {
        title: "Pakej Saringan Kesihatan",
        subtitle: "Bermula RM65 untuk BMI, BP, gula darah",
        image: "/rawatanumum/bp.avif",
      },
      {
        title: "Ujian Makmal Lanjutan",
        subtitle: "HbA1c, Vitamin D, fungsi hati & buah pinggang",
        image: "/rawatanumum/hba1c.jpeg",
      },
      {
        title: "Saringan Jangkitan",
        subtitle: "STD, HIV, Hepatitis A/B/C, allergy & urine dadah",
        image: "/rawatanumum/HIVtest.jpeg",
        imagePosition: "right",
      },
    ],
  },
  {
    icon: "medical-icon:i-womens-health",
    title: "Kesihatan Wanita & Ibu Mengandung",
    description:
      "Penjagaan menyeluruh dari merancang keluarga hinggalah penyusuan.",
    items: [
      {
        title: "Pemeriksaan Antenatal",
        subtitle: "Pemeriksaan kehamilan & ujian MGTT",
        image: "/kesihatanwanita/Pemeriksaankehamilan.jpeg",
      },
      {
        title: "Vaksin Ibu Mengandung",
        subtitle: "TDaP, Influenza & RSV untuk ibu dan bayi",
        image: "/kesihatanwanita/vaksinibumengandung.jpeg",
      },
      {
        title: "Perancang Keluarga",
        subtitle: "Pil, Depo Provera, Implanon & IUCD",
        image: "/kesihatanwanita/perancangkeluarga.avif",
      },
      {
        title: "Saringan Kanser Serviks",
        subtitle: "Pap Smear & HPV DNA test",
        image: "/kesihatanwanita/saringanpapsmear.webp",
      },
      {
        title: "Scan Kehamilan 2D/3D/4D",
        subtitle: "Untuk memantau perkembangan bayi",
        image: "/kesihatanwanita/UltrasoundKehamilan.webp",
      },
      {
        title: "Kaunseling Penyusuan",
        subtitle: "Oleh Lactation Counsellor bertauliah",
        image: "/kesihatanwanita/kaunselingpenyusuan.jpg",
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
        title: "Penilaian Tumbesaran",
        subtitle: "Tinggi, berat, BMI & graf perkembangan",
        image: "/kesihatankanak2/penilaiantumbesaran.webp",
      },
      {
        title: "Vaksin Jadual Imunisasi",
        subtitle: "Vaksin bayi mengikut JIK Kementerian Kesihatan",
        image: "/kesihatankanak2/vaksinkanak2.jpeg",
      },
      {
        title: "Vaksin Tambahan",
        subtitle: "Influenza, Rotavirus & Chicken Pox",
        image: "/kesihatankanak2/vaksintambahankanak2.jpg",
      },
      {
        title: "Rawatan Nebulizer",
        subtitle: "Nebulizer & sedut kahak untuk anak",
        image: "/kesihatankanak2/nebulizerkanak2.jpg",
      },
    ],
  },
  {
    icon: "medical-icon:i-immunizations",
    title: "Vaksinasi Dewasa",
    description:
      "Perlindungan tambahan untuk warga dewasa dan jemaah Umrah / Haji.",
    items: [
      {
        title: "Vaksin Influenza",
        subtitle: "Perlindungan tahunan",
        image: "/vaksinasi/vaksininfluenza.jpg",
      },
      {
        title: "Vaksin Pneumococcal",
        subtitle: "Pencegahan jangkitan paru-paru",
        image: "/vaksinasi/VaksinPneumococcal.webp",
      },
      {
        title: "Vaksin Typhoid",
        subtitle: "Untuk perlindungan demam kepialu",
        image: "/vaksinasi/VaksinTyphoid.jpeg",
      },
      {
        title: "Vaksin Hepatitis B",
        subtitle: "Perlindungan jangka panjang",
        image: "/vaksinasi/VaksinHepatitisB.jpg",
      },
      {
        title: "Vaksin Meningococcal",
        subtitle: "Untuk jemaah Umrah & Haji",
        image: "/vaksinasi/VaksinMeningococcal.webp",
      },
    ],
  },
  {
    icon: "medical-icon:i-surgery",
    title: "Minor Surgery & Rawatan Luka",
    description:
      "Prosedur minor di klinik dengan pemantauan doktor dan dressing moden.",
    items: [
      {
        title: "Pembuangan Lipoma",
        subtitle: "Pembuangan lipoma kecil di klinik",
        image: "/minorsurgery/PembuanganLipoma.webp",
      },
      {
        title: "Rawatan Bisul",
        subtitle: "Pembedahan kecil dan dressing",
        image: "/minorsurgery/RawatanBisul.webp",
      },
      {
        title: "Jahitan Luka",
        subtitle: "Jahitan & penggunaan skin glue",
        image: "/minorsurgery/JahitanLuka.avif",
      },
      {
        title: "Cuci Luka Diabetes",
        subtitle: "Rawatan berkala untuk luka kronik",
        image: "/minorsurgery/CuciLukaDiabetes.webp",
      },
      {
        title: "Rawatan Luka Terbakar",
        subtitle: "Advanced dressing untuk penyembuhan cepat",
        image: "/minorsurgery/RawatanLukaTerbakar.jpeg",
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
        {items.map(({ title: itemTitle, subtitle, image, imagePosition }) => (
          <Card
            key={itemTitle}
            className="group shrink-0 basis-[calc(50%-0.5rem)] snap-start overflow-hidden border-border bg-white p-0 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:shrink sm:basis-auto"
          >
            <CardContent className="flex h-full flex-col p-0">
              {image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={itemTitle}
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectPosition: imagePosition ?? "center" }}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-gradient-to-br from-secondary via-white to-secondary py-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon icon={icon} className="h-7 w-7" />
                  </span>
                </div>
              )}
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
