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
        <div className="relative">
          <Image
            src="/images/Bessie Cooper.png"
            alt="care-givers"
            width={277}
            height={326}
            className=""
          />
          <div className="absolute right-1/2 translate-x-1/2 -bottom-6 z-30 w-[80%] h-9 bg-primary-500">
            <div className="self-stretch  justify-start text-white text-2xl font-semibold leading-9">Wade Warren</div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/Bessie Cooper.png"
            alt="care-givers"
            width={277}
            height={326}
            className=""
          />
          <div className="absolute right-1/2 translate-x-1/2 -bottom-6 z-30 w-[80%] h-9 bg-primary-500">
            <div className="self-stretch  justify-start text-white text-2xl font-semibold leading-9">Wade Warren</div>
          </div>    
        </div>{" "}
        <div className="relative">
          <Image
            src="/images/Bessie Cooper.png"
            alt="care-givers"
            width={277}
            height={326}
            className=""
          />
        </div>{" "}
        <div className="relative">
          <Image
            src="/images/Bessie Cooper.png"
            alt="care-givers"
            width={277}
            height={326}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default CareGivers;
