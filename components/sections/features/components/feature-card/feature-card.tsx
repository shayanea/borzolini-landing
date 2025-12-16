"use client";

import type { FC, SVGProps } from "react";

import { getIconGradient } from "@/lib/constants/icon-colors";
import type { IconBackgroundColor } from "@/lib/types/section";

interface FeatureCardProps {
  icon: FC<SVGProps<SVGSVGElement>> | null;
  iconColor?: string;
  title: string;
  description: string;
  linkText?: string;
  isHighlighted?: boolean;
  isComingSoon?: boolean;
  titleColor?: "white" | "purple";
  iconBackgroundColor?: IconBackgroundColor;
}

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
      className={`group relative flex h-full flex-col rounded-2xl bg-[#202026] p-6 transition-all duration-300 ${
        isHighlighted
          ? "border-primary-500/40 border"
          : "border border-slate-800 hover:border-slate-700"
      }`}
    >
      {/* Coming Soon Tag */}
      {isComingSoon && (
        <div className="border-primary-500 bg-primary-500/10 text-primary-500 absolute top-4 right-4 rounded-full border px-3 py-1 text-[9px] font-medium uppercase">
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
      <h3 className="group-hover:text-primary-500 mb-2 text-lg font-bold text-white">
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
