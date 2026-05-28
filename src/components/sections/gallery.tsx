import Image from "next/image";

const items = [
  {
    title: "Bahagian hadapan klinik",
    span: "md:col-span-2 md:row-span-2",
    image: "/GaleriKlinik/clinic-1.jpg",
  },
  {
    title: "Kawasan menunggu",
    span: "",
    image: "/GaleriKlinik/clinic-2.jpg",
  },
  {
    title: "Bilik konsultasi",
    span: "",
    image: "/GaleriKlinik/clinic-3.jpg",
  },
  {
    title: "Bilik rawatan",
    span: "md:col-span-2",
    image: "/GaleriKlinik/clinic-4.jpg",
  },
  {
    title: "Pasukan kami",
    span: "",
    image: "/GaleriKlinik/clinic-5.jpg",
  },
  {
    title: "Kemudahan bersih",
    span: "",
    image: "/GaleriKlinik/clinic-6.jpg",
  },
  {
    title: "Suasana klinik",
    span: "md:col-span-2",
    image: "/GaleriKlinik/clinic-7.jpg",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Galeri Klinik
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lihat sekilas suasana klinik kami
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Ruang yang bersih, selesa dan mesra keluarga, direka untuk
            menenangkan setiap pesakit dari saat anda masuk.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 sm:mt-12 sm:auto-rows-[180px] sm:gap-4 md:auto-rows-[200px] md:grid-cols-4">
          {items.map(({ title, span, image }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-border ${span}`}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
