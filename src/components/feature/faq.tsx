import React from "react";
import { Heading4 } from "../typography/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import PictureOverlay from "../layout/picture-overlay";

const FAQ = ({ className }: { className?: string; [x: string]: any }) => {
  return (
    <section className={cn("", className)}>
      <PictureOverlay
        pictureDirection="right"
        pictureSrc="/images/faq-big.png"
        pictureAlt="FAQ Image"
        imageClassName="object-cover w-full h-full lg:w-[801px] lg:h-[710px]"
        height={801}
        width={710}
      >
        <div className="p-5 md:p-10 bg-white border border-gray-0">
          <div className="text-lg font-bold  text-primary-500 mb-2"> FAQ </div>
          <Heading4 showImage>Frequently Asked Questions</Heading4>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-[647px]">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What age groups do you provide childcare for ?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How do I register my child for childcare services ?
                </AccordionTrigger>
                <AccordionContent>
                  To register your child for our childcare services, simply
                  visit our website and fill out the online registration form.
                  You will need to provide basic information about your child,
                  including their age, medical history, and any special
                  requirements. After submitting the form, our team will contact
                  you to confirm availability and discuss any further details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </PictureOverlay>
    </section>
  );
};

export default FAQ;
