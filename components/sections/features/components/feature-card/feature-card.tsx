"use client";

import type { FC, SVGProps } from "react";

interface FeatureCardProps {
  icon: FC<SVGProps<SVGSVGElement>> | null;
  iconColor?: string;
  title: string;
  description: string;
  linkText?: string;
  isHighlighted?: boolean;
  isComingSoon?: boolean;
  titleColor?: "white" | "purple";
  iconBackgroundColor?:
    | "red"
    | "purple"
    | "green"
    | "yellow"
    | "blue"
    | "pink"
    | "teal";
}

const getIconGradient = (
  color?: "red" | "purple" | "green" | "yellow" | "blue" | "pink" | "teal"
) => {
  const gradients: Record<
    "red" | "purple" | "green" | "yellow" | "blue" | "pink" | "teal",
    string
  > = {
    red: "from-[#FF69B4]/30 to-[#FF69B4]/10",
    purple: "from-[#9c5cf6]/30 to-[#9c5cf6]/10",
    green: "from-[#00FF00]/30 to-[#00FF00]/10",
    yellow: "from-[#FFA500]/30 to-[#FFA500]/10",
    blue: "from-[#00BFFF]/30 to-[#00BFFF]/10",
    pink: "from-[#FF00FF]/30 to-[#FF00FF]/10",
    teal: "from-[#00FFFF]/30 to-[#00FFFF]/10",
  };
  return color ? gradients[color] : "from-slate-800 to-slate-800";
};

export function FeatureCard({
  icon: Icon,
  iconColor,
  iconBackgroundColor,
  title,
  description,
  linkText,
  isHighlighted = false,
  isComingSoon = false,
}: FeatureCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-[#202026] p-6 transition-all duration-300 ${
        isHighlighted
          ? "border border-[#9c5cf6]/40"
          : "border border-slate-800 hover:border-slate-700"
      }`}
    >
      {/* Coming Soon Tag */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 rounded-full border border-[#9c5cf6] bg-[#9c5cf6]/10 px-3 py-1 text-[9px] font-medium text-[#9c5cf6] uppercase">
          Coming Soon
        </div>
      )}

      {/* Icon */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${getIconGradient(iconBackgroundColor)}`}
      >
        {Icon && (
          <Icon fill={iconColor} className={`h-7 w-7 ${iconBackgroundColor}`} />
        )}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold text-white group-hover:text-[#9c5cf6]">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      {/* Link */}
      {linkText && (
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-slate-300"
        >
          {linkText}
        </a>
      )}
    </div>
  );
}
