"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
      className="flex flex-col gap-5 "
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border border-accent-0 px-[30px] py-[22px] ", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex lg:w-[647px]">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group data-[state=open]:pb-[14px]  flex flex-1 items-center justify-between gap-4 text-left  text-accent-700 transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          "data-[state=open]:border-b data-[state=open]:border-[#E5EFFF] data-[state=open]:text-primary-500",
          className
        )}
        {...props}
      >
        {children}
        <div
          className="p-2.5 rounded-full transition-colors duration-300 
      bg-[#FAFAFA] group-data-[state=open]:bg-primary-500"
        >
          <FaPlus className="size-4 text-primary-500 group-data-[state=open]:hidden" />
          <FaMinus className="size-4 text-white hidden group-data-[state=open]:block" />{" "}
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="pt-[14px] lg:w-[647px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-accent-500 leading-[1.5]"
      {...props}
    >
      <div className={cn("pt-0 pb-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
