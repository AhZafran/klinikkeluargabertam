"use client";

import { type RefObject, useRef } from "react";
import { addCollection, Icon } from "@iconify/react";
import medicalIcons from "@iconify-json/medical-icon/icons.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

addCollection(medicalIcons);

type Service = {
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "medical-icon:i-family-practice",
    title: "Rawatan Umum",
    description:
      "Demam, batuk, selsema, sakit sendi untuk dewasa dan kanak-kanak.",
  },
  {
    icon: "medical-icon:i-internal-medicine",
    title: "Penyakit Kronik 3 Serangkai",
    description:
      "Pengurusan diabetes, darah tinggi dan kolesterol secara berterusan.",
  },
  {
    icon: "medical-icon:i-laboratory",
    title: "Pemeriksaan Darah & Medical Check-Up",
    description:
      "Ujian darah dan medical check-up di klinik — ada mesin FBC sendiri.",
  },
  {
    icon: "medical-icon:i-womens-health",
    title: "Perancang Keluarga",
    description: "Pil perancang, Implanon dan IUCD oleh doktor berpengalaman.",
  },
  {
    icon: "medical-icon:i-pediatrics",
    title: "Kanak-Kanak & Vaksinasi",
    description:
      "Pemeriksaan bulanan kanak-kanak dengan vaksin wajib dan tambahan.",
  },
  {
    icon: "medical-icon:i-ultrasound",
    title: "Ultrasound",
    description:
      "Antenatal, breast, buah pinggang, hempedu, rahim dan ovari.",
  },
  {
    icon: "medical-icon:i-cardiology",
    title: "Pemeriksaan ECG",
    description:
      "Pemeriksaan jantung untuk pengesanan awal masalah kardiovaskular.",
  },
  {
    icon: "medical-icon:i-surgery",
    title: "Rawatan Luka & Minor Surgery",
    description: "Advanced wound dressing, cuci luka, jahitan dan glustitch.",
  },
  {
    icon: "medical-icon:i-first-aid",
    title: "Khatan",
    description:
      "Khidmat khatan lelaki dan perempuan dalam suasana selamat dan teliti.",
  },
  {
    icon: "medical-icon:i-immunizations",
    title: "Vaksinasi Dewasa",
    description:
      "Imunisasi untuk warga dewasa termasuk influenza, HPV dan hepatitis.",
  },
  {
    icon: "medical-icon:i-mental-health",
    title: "Saringan Kesihatan Mental",
    description:
      "Saringan awal dan rujukan untuk menjaga kesejahteraan mental anda.",
  },
  {
    icon: "medical-icon:i-nutrition",
    title: "Rawatan Obesiti",
    description:
      "Pengurusan berat badan dan saranan gaya hidup yang lebih sihat.",
  },
  {
    icon: "medical-icon:i-physical-therapy",
    title: "Rawatan Cagu Kuku",
    description: "Rawatan ingrown toenail (cagu kuku) dengan kemas dan steril.",
  },
  {
    icon: "medical-icon:i-health-education",
    title: "Saringan Pelajar & Pekerja",
    description:
      "Pakej saringan kesihatan untuk pelajar dan pekerja korporat.",
  },
];

const firstRow = services.slice(0, 7);
const secondRow = services.slice(7, 14);

function ServiceRow({
  items,
  innerRef,
}: {
  items: Service[];
  innerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={innerRef}
      className="snap-x snap-mandatory overflow-x-auto pb-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
    >
      <div className="flex gap-5">
        {items.map(({ icon, title, description }) => (
          <Card
            key={title}
            className="group min-w-0 shrink-0 basis-full snap-start border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
          >
            <CardContent className="p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon icon={icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const w = window.innerWidth;
    const visible = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
    const gap = 20;
    [row1.current, row2.current].forEach((el) => {
      if (!el) return;
      const cardWidth = (el.clientWidth - (visible - 1) * gap) / visible;
      el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
    });
  };

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
            Kami menyediakan rangkaian perkhidmatan klinikal untuk individu dan
            keluarga — dari rawatan harian sehingga pemeriksaan kesihatan
            korporat.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="space-y-5">
            <ServiceRow items={firstRow} innerRef={row1} />
            <ServiceRow items={secondRow} innerRef={row2} />
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll(-1)}
            className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
            className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
