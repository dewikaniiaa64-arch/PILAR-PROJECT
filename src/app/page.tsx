import HeroSection from "@/components/organisms/HeroSection";
//import ContactSection from "@/components/organisms/ContactSection";
//import PlaceSearchSection from "@/components/organisms/PlaceSearchSection";
import Tentang from "@/app/tentang/page";
import StepsSection from "@/components/organisms/StepsSection";
import FaqSection from "@/components/organisms/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <PlaceSearchSection /> */}
      <StepsSection />
      <FaqSection />
      <Tentang />
      {/* <ContactSection /> */}
    </>
  );
}