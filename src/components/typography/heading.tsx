import { cn } from "@/lib/utils";
import Image from "next/image";

const Heading1 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        `text-primary-500 font-bold text-[60px] leading-[1.4]`,
        className
      )}
    >
      {children}
    </h1>
  );
};
const Heading2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        `text-accent-900 font-bold text-[32px] lg:text-[56px] leading-[1.4] tracking-tight text-center align-middle`,
        className
      )}
    >
      {children}
    </h2>
  );
};

const Heading4 = ({
    children,
    className,
    showImage = false,
}: {
    children: React.ReactNode;
    className?: string;
    showImage?: boolean;
}) => {
    return (
        <h4
            className={cn(
                `text-accent-900 font-extrabold text-2xl md:text-4xl md:text-[42px] leading-[1.4] relative w-fit`,
                className
            )}
        >
            {children}
            {showImage && (
                <div className="absolute -right-6 top-0 z-30 hidden sm:block">
                    <Image
                        src="/about-us-svg/about-us-top-right.svg"
                        alt="svg"
                        width={28}
                        height={28}
                    />
                </div>
            )}
        </h4>
    );
};

const SectionName = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h6 className={cn(`text-primary-500 font-bold text-lg`, className)}>
      {children}
    </h6>
  );
};

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        `text-accent-900 font-bold text-3xl lg:text-[42px] leading-[1.4]`,
        className
      )}
    >
      {children}
    </h2>
  );
};

const SubHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h6
      className={cn(
        `text-accent-900 font-bold text-[32px] leading-[1.4]`,
        className
      )}
    >
      {children}
    </h6>
  );
};

const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn(`text-accent-400 text-base leading-[1.5]`, className)}>
      {children}
    </p>
  );
};
export {
  Heading1,
  Heading2,
  Heading4,
  Heading,
  SectionName,
  SubHeading,
  Paragraph,
};
