import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { DesktopNav } from "@/components/Nav";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <>
      <DesktopNav />
      <Hero />
      <Teams />
      <Faq />
      <About />
      <Footer />
    </>
  );
}
