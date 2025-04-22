import Faq from "@/components/Faq";
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
    </>
  );
}
