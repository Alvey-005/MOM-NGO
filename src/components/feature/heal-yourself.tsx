import { cn } from "@/lib/utils";
import React from "react";
import PictureOverlay from "../layout/picture-overlay";
import { Heading4, Paragraph } from "../typography/heading";
import { FaCheck } from "react-icons/fa6";

const HealYourSelf = ({
  className,
}: {
  className?: string;
  [x: string]: any;
}) => {
  const healYourSelfData = [
    {
      title: "Emotional Healing",
      description:
        "Our content explores the developmental stages of children and supports their emotional and social growth.",
    },
    {
      title: "Self-Care",
      description:
        "We offer practical tips and strategies to help single parents navigate the challenges of childcare.",
    },
    {
      title: "Mindset and Empowerment",
      description:
        "We teach children to see challenges as opportunities and to always keep learning and growing.",
    },
    {
      title: "Relationship & Boundaries",
      description:
        "Establishing healthy routines and setting clear expectations can help your child feel safe and secure.",
    },
  ];
  return (
    <section className={cn("", className)}>
      <PictureOverlay
        pictureDirection="right"
        pictureSrc="/images/heal-yourself.png"
        pictureAlt="Heal Yourself Image"
        height={811}
        width={818}
      >
        <div className="py-8 px-0 lg:px-11 bg-white  lg:border-l-[14px] border-page-heading-background space-y-[30px] w-full lg:w-[673px]">
          <div className="py-5 space-y-4 border-b border-gray-0">
            <Heading4>Heal Yourself</Heading4>
            <Paragraph>
              Our mission is to nurture your child's holistic development. We
              provide a range of resources and guidance to support their
              physical, cognitive, emotional, and social growth.
            </Paragraph>
          </div>
          <div className="space-y-6">
            {healYourSelfData.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheck className="size-4 lg:size-8 bg-primary-500 text-white p-1.5 rounded-lg" />
                <div className="space-y-3 lg:w-[409px]">
                  <div className="text-xl font-bold text-accent-500">
                    {item.title}
                  </div>
                  <Paragraph>{item.description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PictureOverlay>
    </section>
  );
};

export default HealYourSelf;
