export const siteConfig = {
  name: "Klinik Keluarga Bertam Impian",
  shortName: "KKBI",
  tagline: "Klinik keluarga anda di Bertam Impian, Melaka",
  description:
    "Klinik Keluarga Bertam Impian menyediakan perkhidmatan rawatan keluarga, vaksinasi, kesihatan ibu & kanak-kanak, dan rawatan luka di Bertam Impian, Melaka.",
  url: "https://klinikkeluargabertamimpian.com",
  logo: "/logo/logo.png",

  phone: "06-274 2286",
  whatsappLink: "https://wa.link/npqbc5",
  email: "medicarebertam@gmail.com",

  address: {
    line1: "32 (GF), Jalan BI 17A",
    line2: "Taman Bertam Impian",
    city: "Bertam Impian",
    state: "Melaka",
    postcode: "76450",
    country: "Malaysia",
  },

  hoursSummary: "Isnin hingga Ahad: 8:00 pagi hingga 11:30 malam",

  hours: [
    {
      label: "Buka Setiap Hari",
      lines: ["Isnin hingga Ahad", "8:00 pagi hingga 11:30 malam"],
    },
    {
      label: "",
      lines: [
        "Cuti Umum: Waktu operasi mungkin berbeza.",
        "Sila hubungi klinik atau semak Google kami untuk maklumat terkini.",
      ],
    },
  ],

  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.625294814805!2d102.1725417!3d2.2924043999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1fb28eccfe3c9%3A0x16edaf6f8254092b!2sKLINIK%20KELUARGA%20(BERTAM%20IMPIAN%2C%20MELAKA)!5e0!3m2!1sen!2smy!4v1779382197228!5m2!1sen!2smy",
} as const;

export function buildWhatsAppLink() {
  return siteConfig.whatsappLink;
}
