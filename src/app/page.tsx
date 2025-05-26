import AboutSection from "@/components/feature/about-section";
import FAQ from "@/components/feature/faq";
import HealYourSelf from "@/components/feature/heal-yourself";
import HeroSection from "@/components/feature/hero-section";
import MissionSection from "@/components/feature/mission-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  return (
    <div className={` min-h-screen
     pb-20  font-[family-name:var(--font-quicksand)] 
     `}>
      {/* <MissionSection/> */}
      <HeroSection />
      <AboutSection className="core-container py-5 md:py-25"/>
      <MissionSection className="core-container py-5 md:py-25"/>
      <FAQ className="core-container py-5 md:py-25"/>
      <HealYourSelf className="core-container-left py-5 md:py-25"/>
    </div>
  );
}
