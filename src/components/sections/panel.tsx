import Image from "next/image";

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

// Duplicate the list so the keyframe (0 → -50%) loops seamlessly.
const track = [...panels, ...panels];

export function Panel() {
  return (
    <section id="panel" className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Panel Insurans & Korporat Kami
        </p>
      </div>

      <div
        className="group relative mt-6 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <ul
          className="flex w-max items-center gap-4 sm:gap-6 motion-reduce:animate-none"
          style={{
            animation: "marquee-rtl 45s linear infinite",
            animationPlayState: "running",
          }}
        >
          {track.map(({ name, file }, i) => (
            <li
              key={`${file}-${i}`}
              className="relative h-28 w-56 shrink-0 sm:h-36 sm:w-72"
            >
              <Image
                src={`/PanelKlinik/${file}`}
                alt={name}
                fill
                sizes="288px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
