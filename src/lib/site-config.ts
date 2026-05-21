export const siteConfig = {
  name: "Klinik Keluarga Medicare Bertam",
  shortName: "KKMB",
  tagline: "Klinik keluarga anda di Bertam, Melaka",
  description:
    "Klinik Keluarga Medicare Bertam menyediakan perkhidmatan rawatan keluarga, vaksinasi, kesihatan ibu & kanak-kanak, dan rawatan luka di Bertam, Melaka.",
  url: "https://klinikkeluargamedicarebertam.com",
  logo: "/logo/logo.png",

  // TODO: replace with real values
  phone: "+60 11-2345 6789",
  whatsappNumber: "60112345678", // international format, no +
  whatsappMessage:
    "Hi Klinik Keluarga Medicare Bertam, saya nak tanya pasal rawatan.",
  email: "hello@klinikkeluargamedicarebertam.com",

  address: {
    line1: "No. 1, Jalan Bertam Perdana",
    line2: "Taman Bertam Perdana",
    city: "Bertam",
    state: "Melaka",
    postcode: "75250",
    country: "Malaysia",
  },

  hours: [
    { day: "Isnin – Jumaat", time: "8:30 pagi – 10:00 malam" },
    { day: "Sabtu & Ahad", time: "9:00 pagi – 9:00 malam" },
    { day: "Cuti Umum", time: "10:00 pagi – 6:00 petang" },
  ],

  socials: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },

  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.625294814805!2d102.1725417!3d2.2924043999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1fb28eccfe3c9%3A0x16edaf6f8254092b!2sKLINIK%20KELUARGA%20(BERTAM%20IMPIAN%2C%20MELAKA)!5e0!3m2!1sen!2smy!4v1779382197228!5m2!1sen!2smy",
} as const;

export function buildWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
