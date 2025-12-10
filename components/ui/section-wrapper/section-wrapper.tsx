import type { SectionWrapperProps } from "@/lib/types/section";
import { cn } from "@/lib/utils/cn";

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

export function SectionWrapper({
  children,
  backdrop,
  customClassName,
  maxWidth = "7xl",
}: SectionWrapperProps) {
  return (
    <section
      className={cn("relative px-6 py-24 sm:px-6 lg:px-8", customClassName)}
    >
      {backdrop && (
        <div className="pointer-events-none absolute inset-0">{backdrop}</div>
      )}
      <div className={cn("relative mx-auto", maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </section>
  );
}
