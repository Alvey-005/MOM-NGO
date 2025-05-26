import React, { ElementType, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";

/**
 * Props for the PictureOverlay component.
 */
type PictureOverlayProps = {
  /**
   * The HTML element or React component to render as the root wrapper.
   * @default "div"
   */
  as?: ElementType;

  /**
   * Additional class names for the root container.
   */
  className?: string;

  /**
   * Child content to render as overlay on the image.
   */
  children?: ReactNode;

  /**
   * Direction in which the image is placed relative to the overlay.
   * @default "left"
   */
  pictureDirection?: "left" | "right";

  /**
   * Source path of the image.
   */
  pictureSrc: string;

  /**
   * Alternative text for the image.
   */
  pictureAlt: string;

  /**
   * Native width of the image (for layout purposes).
   */
  width: number;

  /**
   * Native height of the image (for layout purposes).
   */
  height: number;

  /**
   * Additional class names for the `<Image />` element.
   */
  imageClassName?: string;

  /**
   * Additional class names for the overlay content container.
   */
  overlayClassName?: string;
};

/**
 * `PictureOverlay` is a reusable component that displays a responsive image with
 * content overlaid either on the left or right side (desktop only).
 * Useful for marketing sections, hero banners, or feature callouts.
 *
 * @example
 * ```tsx
 * <PictureOverlay
 *   pictureSrc="/hero.jpg"
 *   pictureAlt="Hero Image"
 *   pictureDirection="right"
 *   width={800}
 *   height={600}
 *   overlayClassName="p-8 bg-white shadow-lg"
 * >
 *   <h2 className="text-xl font-bold">Welcome!</h2>
 * </PictureOverlay>
 * ```
 */
const PictureOverlay = ({
  as: Component = "div",
  className,
  children,
  pictureDirection = "left",
  pictureSrc,
  pictureAlt,
  width,
  height,
  imageClassName,
  overlayClassName,
  ...props
}: PictureOverlayProps) => {
  return (
    <Component
      className={clsx(
        "lg:relative flex",
        pictureDirection === "left" ? "justify-start" : "justify-end",
        className
      )}
      {...props}
    >
      <div className="hidden lg:block ">
        <Image
          src={pictureSrc}
          alt={pictureAlt}
          width={width}
          height={height}
          className={cn("object-cover", "3xl:scale-125", imageClassName)}
          style={{ maxWidth: "100%", height: "auto" }}
          sizes="(min-width: 1920px) 75vw, (min-width: 1024px) 50vw, 100vw"        />
      </div>
      <div
        className={clsx(
          "lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:z-30",
          pictureDirection === "left" ? "lg:right-0" : "lg:left-0",
          overlayClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
};

export default PictureOverlay;
