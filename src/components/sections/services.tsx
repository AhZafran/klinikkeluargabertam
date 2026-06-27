"use client";

import { addCollection, Icon } from "@iconify/react";
import medicalIcons from "@iconify-json/medical-icon/icons.json";

import { Card, CardContent } from "@/components/ui/card";

addCollection(medicalIcons);

type Expertise = {
  icon: string;
  title: string;
  description: string;
};
type OtherService = {
  icon: string;
  title: string;
};

const expertise: Expertise[] = [
  {
    icon: "medical-icon:i-ultrasound",
    title: "Pemeriksaan Ultrasound Antenatal",
    description:
      "Pemeriksaan ultrasound komprehensif untuk memantau kesihatan ibu dan bayi sepanjang kehamilan.",
  },
  {
    icon: "medical-icon:i-womens-health",
    title: "Kesihatan Wanita",
    description:
      "Perkhidmatan kesihatan yang menyeluruh untuk wanita di semua peringkat kehidupan.",
  },
  {
    icon: "medical-icon:i-nursery",
    title: "Postnatal Laktasi & Penyusuan Ibu",
    description:
      "Sokongan dan bimbingan penyusuan susu ibu untuk memastikan kesihatan bayi dan ibu.",
  },
  {
    icon: "medical-icon:i-labor-delivery",
    title: "Penjagaan Ibu Mengandung",
    description:
      "Rawatan dan pemantauan menyeluruh untuk kesihatan ibu dan bayi sepanjang kehamilan.",
  },
  {
    icon: "medical-icon:i-internal-medicine",
    title: "Masalah Haid & Hormon",
    description:
      "Diagnosis dan rawatan untuk masalah hormon wanita termasuk ketidakseimbangan hormon.",
  },
  {
    icon: "medical-icon:i-surgery",
    title: "Pembedahan Kecil & Prosedur",
    description:
      "Perkhidmatan pembedahan kecil dan prosedur perubatan yang selamat dan berkualiti.",
  },
  {
    icon: "medical-icon:i-pediatrics",
    title: "Pediatrik & Vaksinasi",
    description:
      "Perkhidmatan kesihatan kanak-kanak termasuk vaksinasi dan pemeriksaan berkala.",
  },
  {
    icon: "medical-icon:i-health-services",
    title: "Saringan Kesihatan",
    description:
      "Pemeriksaan pencegahan dan saringan kesihatan untuk pengesanan awal penyakit.",
  },
];

const otherServices: OtherService[] = [
  { icon: "medical-icon:i-outpatient", title: "Rawatan Am & Akut" },
  { icon: "medical-icon:i-medical-records", title: "Medical Checkup Pelajar / Prapekerjaan" },
  { icon: "medical-icon:i-laboratory", title: "Ujian Darah, Air Kencing & ECG" },
  { icon: "medical-icon:i-infectious-diseases", title: "Rawatan Denggi, COVID-19 & Influenza" },
  { icon: "medical-icon:i-nursery", title: "Pemeriksaan Kuning Bayi (Jaundis)" },
  { icon: "medical-icon:i-respiratory", title: "Nebuliser & Sedut Kahak" },
  { icon: "medical-icon:i-first-aid", title: "Rawatan Cuci Luka" },
  { icon: "medical-icon:i-immunizations", title: "Suntikan Vaksin Dewasa dan Kanak-kanak" },
  { icon: "medical-icon:i-mental-health", title: "Kesihatan Mental & Kaunseling" },
  { icon: "medical-icon:i-dermatology", title: "Pembedahan Ketuat dan Ketumbuhan Kulit" },
  { icon: "medical-icon:i-pediatrics", title: "Khatan Kanak-kanak" },
  { icon: "medical-icon:i-surgery", title: "Khatan Dewasa (Adult Circumcision)" },
  { icon: "medical-icon:i-physical-therapy", title: "Suntikan Sendi (Intraarticular Injection)" },
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

        {/* Kepakaran Kami */}
        <div className="mt-14 sm:mt-16">
          <h3 className="text-center text-xl font-bold text-foreground sm:text-2xl">
            Kepakaran Kami
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:mt-10">
            {expertise.map(({ icon, title, description }) => (
              <Card
                key={title}
                className="group h-full border-border bg-white p-0 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary shadow-sm ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon icon={icon} className="h-7 w-7" />
                  </span>
                  <p className="mt-4 text-base font-semibold leading-snug text-foreground">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lain-lain Perkhidmatan Kami */}
        <div className="mt-14 sm:mt-16">
          <h3 className="text-center text-xl font-bold text-foreground sm:text-2xl">
            Lain-lain Perkhidmatan Kami
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-10">
            {otherServices.map(({ icon, title }) => (
              <Card
                key={title}
                className="group border-border bg-white p-0 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon icon={icon} className="h-6 w-6" />
                  </span>
                  <p className="text-sm font-semibold leading-snug text-foreground">
                    {title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
