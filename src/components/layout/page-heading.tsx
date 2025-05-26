import React from "react";
import { Heading2, Paragraph } from "../typography/heading";
import { cn } from "@/lib/utils";

const PageHeading = ({
  title,
  subTitle,
  className,
  ...props
}: {
  title: string;
  subTitle?: string;
  className?: string;
  [x: string]: any;
}) => {
  return (
    <div
      className={cn(
        `pt-8 pb-10 md:pt-[70px] md:pb-[100px] bg-page-heading-background space-y-3`,
        className
      )}
      {...props}
    >
      <Heading2> {title}</Heading2>
      <Paragraph className="text-center align-middle leading-[1.6] font-medium">{subTitle}</Paragraph>
    </div>
  );
};

export default PageHeading;
