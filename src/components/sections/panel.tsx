import Image from "next/image";
import { Heart } from "lucide-react";

const panels = [
  { name: "Kotra Pharma", file: "Kotra-Pharma-logo.png" },
  { name: "We Care", file: "We-care-Logo.png" },
  { name: "Al-Khairi", file: "alkhairi.webp" },
  { name: "HealthConnect", file: "healthconnect.jpg" },
  { name: "HealthMetric", file: "healtmetric.png" },
  { name: "KPSB", file: "kpsb.jpg" },
  { name: "MedKad", file: "medkad.png" },
  { name: "Melaka Bekal", file: "melakabekal.png" },
  { name: "MPHTJ", file: "mphtj.png" },
  { name: "Pekab 40", file: "pekab40.png" },
  { name: "PMCare", file: "pmcare.png" },
  { name: "PruBSN", file: "prubsn.png" },
  { name: "Putra Hospital", file: "putrahospital.png" },
  { name: "Red Alert", file: "redalert.png" },
  { name: "Sehati PERKESO", file: "sehatiperkeso.jpg" },
];

export function Panel() {
  return (
    <section id="panel" className="bg-secondary/60 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="rounded-full border border-border bg-white px-4 py-1 text-xs font-semibold text-primary shadow-sm">
            Panel
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Panel Klinik Kami
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Kami menerima panel insurans dan korporat yang berikut. Hubungi
            kami untuk maklumat lanjut.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {panels.map(({ name, file }) => (
            <div
              key={file}
              className="rounded-2xl border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/PanelKlinik/${file}`}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 18vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="inline-flex items-start gap-3 rounded-3xl border border-border bg-white px-4 py-3 text-center text-xs text-muted-foreground shadow-sm sm:items-center sm:rounded-full sm:px-5 sm:text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-3 w-3 fill-current" />
            </span>
            <span className="text-left sm:text-center">
              Tidak pasti sama ada panel anda diterima? Hubungi kami untuk
              pengesahan.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
