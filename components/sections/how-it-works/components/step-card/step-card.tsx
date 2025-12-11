"use client";

import { ReactNode } from "react";

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#202026] text-4xl transition-all duration-300 group-hover:bg-[#9c5cf6]/10">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold text-white group-hover:text-[#9c5cf6]">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
