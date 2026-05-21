import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { Panel } from "@/components/sections/panel";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Panel />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
