"use client";

import * as motion from "framer-motion/client";

import { Quote, Star } from "lucide-react";

import type { ReactElement } from "react";
import type { Variants } from "framer-motion";

export interface Testimonial {
  quote: string;
  name: string;
  petName?: string;
  petBreed?: string;
  avatar?: string;
  clinic?: string;
  rating?: number;
  verifiedPurchase?: boolean;
  isProfessional?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  variants?: Variants;
}

export function TestimonialCard({
  testimonial,
  variants,
}: TestimonialCardProps): ReactElement {
  return (
    <motion.div
      variants={variants}
      className={`rounded-2xl border ${
        !testimonial?.isProfessional ? "border-slate-800" : "border-primary-500"
      } bg-[#1f1f26] p-6 transition-all hover:border-slate-700`}
    >
      <Quote className="text-primary-500/30 mb-4 h-8 w-8" />

      <p className="mb-6 leading-relaxed text-slate-300">{testimonial.quote}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="from-primary-500/30 to-primary-500/10 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br">
            <span className="text-sm font-medium text-white">
              {testimonial.name?.[0]}
            </span>
          </div>

          <div>
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-slate-500">
              {testimonial.petName ?? testimonial.clinic}
            </p>
          </div>
        </div>

        {testimonial.rating && (
          <div className="flex">
            {Array.from({ length: testimonial.rating ?? 0 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
