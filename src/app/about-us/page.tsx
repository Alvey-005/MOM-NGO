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
        <AboutSection variant="alternative" className="py-25"/>
        <MissionSection className="px-[120px] py-25"/>
        <Testimonials className="mt-[105px] px-[120px] mb-[18px]"/>
        <CareGivers className="px-[120px] my-[80px]"/>

    </div>
  );
}
