import AboutSection from "@/components/feature/about-section";
import CareGivers from "@/components/feature/care-givers";
import MissionSection from "@/components/feature/mission-section";
import Testimonials from "@/components/feature/testimonials";
import PageHeading from "@/components/layout/page-heading";

export default function AboutUs() {
  return (
    <div className={`font-[family-name:var(--font-quicksand)] `}>
      <div className="bg-page-heading-background pt-22">
        <PageHeading
          title="About Us"
          subTitle="Welcome to Empowered Moms, a place dedicated to supporting "
        />
      </div>
        <AboutSection variant="alternative" className="core-container py-8 md:py-16 lg:py-25"/>
        <MissionSection className="core-container py-5 md:py-25"/>
        <Testimonials className="mt-[105px]  mb-[18px] core-container py-5"/>
        <CareGivers className="core-container my-[80px]"/>

    </div>
  );
}
