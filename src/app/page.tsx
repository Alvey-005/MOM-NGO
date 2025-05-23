import AboutSection from "@/components/feature/about-section";
import MissionSection from "@/components/feature/mission-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  return (
    <div className={` min-h-screen
     pb-20 px-[120px]  font-[family-name:var(--font-quicksand)] mt-[90px]
     `}>
      {/* <MissionSection/> */}
      <AboutSection/>
    </div>
  );
}
