import { cn } from "@/lib/utils";
import React from "react";
import { Heading, SectionName } from "../typography/heading";
import { Button } from "../ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import SingleTestimonial from "../ui/singe-testimonial";
import Image from "next/image";

const Testimonials = ({ className }: { className?: string }) => {
  return (
    <section className={cn("", className)}>
      <div className="flex flex-col md:flex-row justify-start  md:justify-between md:items-center mb-[70px] gap-4">
        <div className="space-y-3">
          <SectionName>Testimonial</SectionName>
          <Heading className="relative"><span>What our Clients say About us</span>
                    <div className="absolute -right-5 top-0 z-30 hidden md:block">
            <Image
              src="/about-us-svg/about-us-top-right.svg"
              alt="svg"
              width={28}
              height={28}
            />
          </div>
            
          </Heading>
        </div>
        <Button variant="outline" size="lg" className="h-fit">
          View More <FaArrowRightLong />{" "}
        </Button>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[94px]">
      {Array.from({ length: 7 }).map((_, idx) => (
        <SingleTestimonial
        key={idx}
        name="John Doe"
        testimonial={`<span class='font-bold'>"Exceptional Care and Support" </span> We couldn't be happier with the childcare service! The staff are incredibly attentive and caring, always ensuring that our child feels safe and loved.`}
        imgSrc="/images/testimonals-1.png"
        desigantion="Consultant"
        companyName="Interventional Cardiologist"
        rating={5}
        />
      ))}
    </div>
    </section>
  );
};

export default Testimonials;
