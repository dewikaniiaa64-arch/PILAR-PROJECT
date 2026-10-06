import HeroSection from "@/components/organisms/HeroSection";
import Pencarian from "@/app/pencarian/page";
//import PlaceSearchSection from "@/components/organisms/PlaceSearchSection";
//import ContactSection from "@/components/organisms/ContactSection";
import Tentang from "@/app/tentang/page";
import StepsSection from "@/components/organisms/StepsSection";
import FaqSection from "@/components/organisms/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Pencarian />
      <StepsSection />
      <FaqSection />
      <Tentang />
      {/* <ContactSection /> */}
    </>
  );
}