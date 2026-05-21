"use client";

import { motion } from "motion/react";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Doc Adelin sgt professional, friendly. Anak-anak mak-mak satu family smua rse selesa dtg ke sini — pengalaman berkhatan anak lgsung xnangis, cepat sembuh. Kos rawatan juga sgt berbaloi.",
    name: "Aysha Abd Aziz",
    role: "Berkhatan anak",
    initial: "A",
  },
  {
    text: "Klinik ini sangat bagus! Staff yang ramah dan profesional, doktor yang berpengalaman dan mesra kanak-kanak. Saya sangat puas hati dengan rawatan yang diberikan. Terima kasih dr n staff.",
    name: "Hafiz Khalid",
    role: "Ulasan Google",
    initial: "H",
  },
  {
    text: "Superb clinic — highly recommended. Professional doctors, friendly staff, clean and comfortable clinic, and the treatment results are very satisfying. The doctors explain everything clearly and make you feel safe and confident.",
    name: "Noor Sha",
    role: "Ulasan Google",
    initial: "N",
  },
  {
    text: "Service sangat tip top. Doktor dan staf sangat ramah & profesional, klinik sangat bersih & selesa. Harga berpatutan dan sangat berpuas hati dengan rawatan yang diberikan. Amat disyorkan.",
    name: "Romli",
    role: "Local Guide",
    initial: "R",
  },
  {
    text: "The front staff & Doctor (Adelin & Shakira) were very friendly! Treatment given was very satisfying and the price charged was so reasonable too. Clinic is clean & I love the ambiance — keep it up my favourite clinic!",
    name: "Sarah Syazwani Abdul Latiff",
    role: "Pesakit setia",
    initial: "S",
  },
  {
    text: "Doktor anak pertama saya dari babu sampai 5 tahun. Sekarang sambung adik dia pulak. Doktor yang peramah, staf kaunter yang lembut. Checkup baby tak pergi tempat lain — dari abang ke adik memang dengan Dr Adelin.",
    name: "Sha Effa",
    role: "Ibu kepada 2 anak",
    initial: "S",
  },
  {
    text: "Klinik paling mesra, doctor & staff mesra. Bagi consultation pun kita faham, tanya banyak soalan pun doktor jawab sampai kita faham. Alhamdulillah.",
    name: "Sharifah Fairus Al Idrus",
    role: "Ulasan Google",
    initial: "S",
  },
  {
    text: "CONSULTATIONS TERBAIK, staff dan Dr. teramat peramah, pasti akan datang lagi 👍",
    name: "Yusof Yahaya",
    role: "Ulasan Google",
    initial: "Y",
  },
  {
    text: "This is my second time coming to this clinic. The doctor is very kind and explains everything clearly. The receptionist is also friendly. The clinic is clean and comfortable. Highly recommended!",
    name: "Nrfqa Z",
    role: "Lawatan kedua",
    initial: "N",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="relative bg-secondary/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimoni Pesakit
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apa kata mereka yang pernah datang
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Kepercayaan pesakit adalah segala-galanya buat kami. Ini sebahagian
            kecil daripada maklum balas yang kami terima.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[560px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] sm:mt-12 sm:max-h-[740px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
