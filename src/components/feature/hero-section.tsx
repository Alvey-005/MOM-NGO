import React from "react";
import { Heading2, Paragraph } from "../typography/heading";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="overflow-hidden ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-10 md:pb-25">
        <div className="pl-4 md:pl-16 lg:pl-[100px] 2xl:pl-[120px] 3xl:pl-[330px] pt-10  lg:pt-42 justify-self-start order-2 lg:order-1">
          <Heading2 className="text-left">
            Caring Hands,
            <br /> Quality Home Care <br /> for Your Little One
          </Heading2>
          <Paragraph className="mt-4">
            Reliable child care is essential for single moms striving to balance
            work, family, and personal growth. It provides a safe and nurturing
            environment for children, allowing mothers to pursue their careers
            and goals with peace of mind. Access to trustworthy child care
            resources helps single mothers manage their busy lives more
            effectively.
          </Paragraph>{" "}
          <Button size="lg" className="mt-8">
            Book a Session
          </Button>
        </div>
        <div className="bg-secondary-500 w-full 3xl:w-[80%] h-full pt-75 md:pt-145 lg:pt-42 relative justify-self-end order-1 lg:order-2">
          <div className="absolute w-[85%] left-1/2 -bottom-[50px] -translate-x-1/2  z-10">
            <div className="relative lg:w-fit">
              <Image
                src="/images/hero-image.png"
                alt="Hero Image"
                width={599}
                height={489}
                className="w-full h-full lg:w-[599px] lg:h-[489px] object-cover"
              />
              <div className="absolute top-[-28px] left-[-28px]">
                <Image
                  src="/about-us-svg/hero-top-left.svg"
                  alt="svg"
                  width={28}
                  height={28}
                />
              </div>{" "}
              <div className="absolute bottom-[-45px] right-[-45px]">
                <Image
                  src="/about-us-svg/hero-bottom-right.svg"
                  alt="svg"
                  width={91}
                  height={91}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
