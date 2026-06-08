const reasons = [
  {
    title: "Doktor dan Staf Yang Komited",
    description:
      "Setiap pesakit akan diberi perhatian dan penjagaan yang terbaik.",
  },
  {
    title: "Klinik bersih dan selesa",
    description:
      "Persekitaran yang sentiasa bersih dan selesa untuk anda dan keluarga.",
  },
  {
    title: "Menghargai Masa Anda",
    description:
      "Kami berusaha menguruskan masa menunggu dengan baik supaya anda mendapat rawatan yang berkualiti tanpa perlu menunggu lama.",
  },
  {
    title: "Tempat Letak Kereta Yang Luas",
    description:
      "Kemudahan letak kereta yang mencukupi untuk keselesaan pesakit dan keluarga.",
  },
  {
    title: "Pelbagai Rangkaian Panel",
    description:
      "Kami bekerjasama dengan pelbagai syarikat panel untuk memudahkan akses rawatan anda.",
  },
  {
    title: "Harga berpatutan",
    description:
      "Caj konsultasi dan ubat yang berpatutan, tanpa caj tersembunyi.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-background py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 sm:gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Kenapa Pilih Kami
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Klinik yang mengutamakan kesihatan pesakit
            </h2>
          </div>
          <p className="text-base text-muted-foreground lg:max-w-md">
            Kami percaya pengalaman klinik yang baik bukan sahaja tentang
            rawatan, tetapi juga tentang masa, layanan dan kepercayaan. Inilah
            yang membezakan kami.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {reasons.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
