import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2
   whitespace-nowrap  text-sm font-medium transition-all 
   disabled:pointer-events-none disabled:opacity-50 
   [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 
   outline-none
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
  {
    variants: {
      variant: {
        default: "bg-green-500 text-white-0",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-green-500 bg-transparent text-green-500",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-green-500  relative after:content-[''] after:absolute after:bottom-[25%] after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 hover:after:w-full",
      },
      size: {
        default: "px-[18px] py-[14px] text-sm font-bold gap-1.5 ",
        lg: "px-8 py-4  text-base font-bold has-[>svg]:px-4 gap-3",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "default",
        class: "border-[0.578px]",
      },
      {
        variant: "outline",
        size: "lg",
        class: "border",
      },
    ],
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
