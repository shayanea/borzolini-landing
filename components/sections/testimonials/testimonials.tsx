"use client";

import * as motion from "framer-motion/client";

import { Quote, Star } from "lucide-react";
import { SectionHeader, SectionWrapper } from "@/components/ui";

interface Testimonial {
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

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    petName: "Luna (British Shorthair, 4yrs)",
    avatar: "/testimonials/sarah.jpg",
    quote:
      "Borzolini's AI detected early kidney markers 6 months before my vet did. The bloodwork confirmed it. This app saved Luna's life.",
    rating: 5,
    verifiedPurchase: true,
  },
  {
    name: "James K.",
    petName: "Oliver (Persian, 2yrs)",
    quote:
      "My cat ate a lily plant at 11 PM. Borzolini said 'RUSH TO VET NOW' and connected me to an emergency vet in 2 minutes. $29 call saved me a $2,000 ER visit.",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen, DVM",
    clinic: "Pedo Vet Clinic",
    quote:
      "I recommend Borzolini to all my clients. The AI catches things between visits that I would miss. It's like having a health monitor at home.",
    isProfessional: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Testimonials() {
  return (
    <SectionWrapper maxWidth="6xl">
      <SectionHeader
        title="Trusted by pet owners"
        subtitle="Join thousands who've simplified their pet care journey"
        titleSize="lg"
      />

      {/* Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`rounded-2xl border ${!testimonial?.isProfessional ? "border-slate-800" : "border-[#9c5cf6]"} bg-[#1f1f26] p-6 transition-all hover:border-slate-700`}
          >
            {/* Quote Icon */}
            <Quote className="mb-4 h-8 w-8 text-[#9c5cf6]/30" />

            {/* Quote Text */}
            <p className="mb-6 leading-relaxed text-slate-300">
              {testimonial.quote}
            </p>

            {/* User Info and Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#9c5cf6]/30 to-[#9c5cf6]/10">
                  <span className="text-sm font-medium text-white">
                    {testimonial.name?.[0]}
                  </span>
                </div>

                {/* Name and Role */}
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.petName ?? testimonial.clinic}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              {testimonial.rating && (
                <div className="flex">
                  {Array.from({ length: testimonial.rating ?? 0 }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
