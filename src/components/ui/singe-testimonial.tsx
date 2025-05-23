import Image from "next/image";
import React from "react";

const SingleTestimonial = ({
  imgSrc,
  name,
  desigantion,
  testimonial,
  companyName,
  rating,
}: {
  imgSrc: string;
  name: string;
  desigantion: string;
  testimonial: string;
  companyName: string;
  rating: number;
}) => {
  return (
    <div className="p-[14px] border border-accent-0 flex felx-row gap-[22px]">
      <Image
        src={imgSrc}
        alt="Testimonial"
        width={222}
        height={251}
        className=""
      />
      <div className="">
        <Image
          src="/testimonial-svg/testimonials-top.svg"
          alt="Quote"
          width={37}
          height={32}
        />
        <div dangerouslySetInnerHTML={{ __html: testimonial }} />
        <div className="flex items-center gap-1 my-3">
          {Array.from({ length: rating }).map((_, idx) => (
            <Image
              key={idx}
              src="/testimonial-svg/Star.svg"
              alt="Star"
              width={24}
              height={24}
            />
          ))}
        </div>
        <hr className="h-px bg-gray-200 border-0" />
        <div className="my-2.5 text-[#333333]">
          <div>
            <span className="font-semibold">{name}</span>{" "}
            <span>{desigantion}</span>
          </div>
          <div>{companyName}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
