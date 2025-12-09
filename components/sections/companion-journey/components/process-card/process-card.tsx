"use client";

import type { FC, SVGProps } from "react";

interface ProcessCardProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export function ProcessCard({
  icon: Icon,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* Icon Container */}
      <div className="relative z-10 mb-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-[#1f1f26] transition-all duration-300 group-hover:border-[#9c5cf6]/50 group-hover:shadow-lg group-hover:shadow-[#9c5cf6]/10">
        <Icon className="h-8 w-8 fill-slate-400 transition-colors duration-300 group-hover:fill-[#9c5cf6]" />
      </div>

      {/* Title */}
      <h3 className="mb-1 font-semibold text-white">{title}</h3>

      {/* Description */}
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
}
