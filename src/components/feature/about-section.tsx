import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Heading4,
  Paragraph,
  SectionName,
  SubHeading,
} from "../typography/heading";
import { cn } from "@/lib/utils";

export default function AboutSection({
  variant = "default",
  className,
}: {
  variant?: "default" | "alternative";
  className?: string;
  [x: string]: any;
}) {
  const awardValue = [
    { value: "180+", label: "Our complete Projects" },
    { value: "120+", label: "Happy Customer" },
    { value: "20+", label: "International Awards" },
  ];
  return (
    <section className={cn(`w-full  flex flex-col xl:flex-row items-center  
    gap-20 
    ${variant === 'alternative' && 'bg-about-us-background'}`, className)}>
      {/* Images Section */}
      <div className="relative flex-shrink-0 w-full lg:w-[unset] px-2 xl:ml-20">
        <div className="relative z-10 w-full flex justify-end">
          <Image
            src="/images/about-us-1.png"
            alt="Parent and child 1"
            width={425}
            height={485}
            className=" object-cover w-full md:size-[70%] lg:w-[425px] h-full  lg:h-[485px]"
          />
          <div className="absolute -right-6 -top-6 z-30 ">
            <Image
              src="/about-us-svg/about-us-top-right.svg"
              alt="svg"
              width={28}
              height={28}
            />
          </div>
        </div>
        <div className="absolute left-[-10px] md:left-[100px] lg:left-[-80px] bottom-[-45px] z-20">
          <div className="relative">
            <Image
              src="/images/about-us-2.png"
              alt="Parent and child 2"
              width={297}
              height={358}
              className="w-[200px] md:w-[297px] h-[240px] md:h-[358px] shadow-lg object-cover object-bottom"
            />
            <div className="absolute left-[-22px] bottom-[-22px] md:left-[-45px] md:bottom-[-45px] z-30 ">
              <Image
                src="/about-us-svg/about-us-bottom-left.svg"
                alt="svg"
                width={90}
                height={90}
                className="size-[45px] md:size-[90px]"
              />
            </div>
          </div>
        </div>
        {/* Decorative SVG (bottom left) */}
        {/* <svg
          className="absolute left-[-60px] bottom-[0px] z-30"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0v60M0 30h60M10 10l40 40M50 10L10 50"
            stroke="#FFD249"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg> */}
      </div>
      {/* Text Section */}
      <div className="flex-1  text-left">
        {variant === "default" && <SectionName>Our Mission</SectionName>}
        <Heading4>
          Finding Superior Care for <br /> Your Baby
        </Heading4>
        <Paragraph className="mt-4">
          Reliable child care is essential for single moms striving to balance
          work, family, and personal growth. It provides a safe and nurturing
          environment for children, allowing mothers to pursue their careers and
          goals with peace of mind. Access to trustworthy child care resources
          helps single mothers manage their busy lives more effectively.
        </Paragraph>
        <Button size="lg" className={`${variant === 'default' ? 'mt-16' : 'mt-10'}`}>
          Learn More
        </Button>
        {variant === "alternative" && (
          <div className="mt-9 grid grid-cols-2 gap-y-7">
            {awardValue.map((item, idx) => (
              <div key={idx} className="">
                <SubHeading>{item.value}</SubHeading>
                <Paragraph>{item.label}</Paragraph>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
