import { cn } from "@/lib/utils";
import React from "react";
import { Heading, SectionName } from "../typography/heading";
import Image from "next/image";

const CareGivers = ({ className }: { className?: string }) => {
  return (
    <section className={cn("w-full", className)}>
      <SectionName>Our</SectionName>
      <Heading>Care Givers</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[94px] mt-[70px]">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div className="relative group" key={idx}>
            <Image
              src="/images/Bessie Cooper.png"
              alt="care-givers"
              width={277}
              height={326}
              className="w-full h-full  object-cover"
            />
            <div
              className={`
              absolute right-1/2 translate-x-1/2 bottom-0 lg:-bottom-12 z-30 w-full lg:w-[80%] h-fit bg-primary-500 pt-3 pb-4 pl-4
              block
              lg:opacity-0 lg:pointer-events-none
              lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto
              transition-opacity
              `}
            >
              <div className="self-stretch justify-start text-white text-2xl font-semibold leading-9">
              Wade Warren
              </div>
              <div className="self-stretch justify-start text-white text-xl font-semibold leading-9">
              Volunteer
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default CareGivers;
