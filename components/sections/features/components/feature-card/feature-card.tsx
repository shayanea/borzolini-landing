"use client";

import type { FC, SVGProps } from "react";

interface FeatureCardProps {
  icon: FC<SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
  linkText?: string;
  isHighlighted?: boolean;
  isComingSoon?: boolean;
  titleColor?: "white" | "purple";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  linkText,
  isHighlighted = false,
  isComingSoon = false,
  titleColor = "white",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-[#2A2A3A] p-6 transition-all duration-300 ${
        isHighlighted
          ? "border-2 border-[#9c5cf6]"
          : "border border-transparent hover:border-slate-700"
      }`}
    >
      {/* Coming Soon Tag */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 rounded-full bg-[#9c5cf6] px-3 py-1 text-xs font-medium text-white">
          Coming Soon
        </div>
      )}

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
        {Icon && <Icon className="h-6 w-6" />}
      </div>

      {/* Title */}
      <h3
        className={`mb-2 text-lg font-bold ${
          titleColor === "purple" ? "text-[#9c5cf6]" : "text-white"
        }`}
      >
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
          <span className="text-[#9c5cf6]">&gt;</span>
        </a>
      )}
    </div>
  );
}
