import type { SectionHeaderProps } from "@/lib/types/section";
import { cn } from "@/lib/utils/cn";

const titleSizeClasses = {
  sm: "text-xl sm:text-2xl lg:text-3xl",
  md: "text-2xl sm:text-3xl lg:text-4xl",
  lg: "text-3xl sm:text-4xl lg:text-5xl",
  xl: "text-xl sm:text-5xl lg:text-6xl",
};

export function SectionHeader({
  label,
  title,
  subtitle,
  titleSize = "lg",
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("mb-16", align === "center" ? "text-center" : "text-left")}
    >
      {/* Label */}
      {label && (
        <p className="mb-4 text-sm font-medium tracking-wider text-[#9c5cf6] uppercase">
          {label}
        </p>
      )}

      {/* Title */}
      <h2
        className={cn("mb-4 font-bold text-white", titleSizeClasses[titleSize])}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "text-lg text-slate-400",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
