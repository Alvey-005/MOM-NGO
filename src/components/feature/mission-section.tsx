import { Button } from "@/components/ui/button"
import { FaLightbulb, FaUsers, FaCog, FaBullhorn } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading } from "../typography/heading";

export default function MissionSection({
  className
}:{
  className?: string;
}) {
  return (
    <section className={cn("w-full", className)}>
      <div className="grid md:grid-cols-2 gap-18 items-center">
        <div className="space-y-2 xl:pr-18">
          <h2 className="text-primary font-medium text-lg">Our Mission</h2>
          <Heading>
            Building a Brighter  Future for Reliable ChildCare
          </Heading>
          <p className="text-accent-500 leading-[1.5] mt-2 ">
            We are dedicated to helping Child thrive, succeed, and find fulfillment in all aspects of their lives.
          </p>
            <Button size='lg' className="mt-8">
              Learn More
            </Button>
        </div>
        {/** Mission Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: "/Empowerment.svg",
              alt: "Empowerment",
              title: "Empowerment",
              titleClass: "text-accent-900 font-bold",
              desc: "Empower them by providing the knowledge, guidance, and support necessary to overcome challenges.",
              descClass: "text-accent-500",
            },
            {
              icon: "/community_building.svg",
              alt: "Community Building",
              title: "Community Building",
              titleClass: "text-gray-900 font-semibold",
              desc: "Build a supportive community where childcare providers can connect, share best practices.",
              descClass: "text-gray-600",
            },
            {
              icon: "/community_building.svg",
              alt: "Personalized Approach",
              title: "Personalized Approach",
              titleClass: "text-gray-900 font-semibold",
              desc: "Every child's journey is unique. Our mission is to provide personalized childcare solutions and consulting.",
              descClass: "text-gray-600",
            },
            {
              icon: "/community_building.svg",
              alt: "Advocacy and Awareness",
              title: "Advocacy and Awareness",
              titleClass: "text-gray-900 font-semibold",
              desc: "Our mission extends beyond caring for children to building stronger, healthier communities.",
              descClass: "text-gray-600",
            },
          ].map((item, idx) => (
            <div className="space-y-4" key={idx}>
              <div className="bg-primary p-[14px] w-fit rounded-full flex items-center justify-center mb-5">
            <Image src={item.icon} alt={item.alt} width={24} height={24} />
              </div>
              <h3 className={`text-xl ${item.titleClass}`}>{item.title}</h3>
              <p className={item.descClass}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
