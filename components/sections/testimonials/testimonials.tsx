"use client";

import { Quote, Star } from "lucide-react";

import { SectionHeader, SectionWrapper } from "@/components/ui";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The AI scanner gave me peace of mind when I noticed something on my dog's skin. Within seconds, I knew it wasn't serious and got care tips.",
    name: "Sarah M.",
    role: "Dog Owner",
    initial: "S",
    rating: 5,
  },
  {
    quote:
      "Finding a specialized vet used to take hours. Now I can filter by exactly what my cat needs and book in minutes.",
    name: "James K.",
    role: "Cat Owner",
    initial: "J",
    rating: 5,
  },
  {
    quote:
      "As a new pet parent, the care library and training guides have been invaluable. Everything I need is in one place.",
    name: "Maria L.",
    role: "First-time Pet Owner",
    initial: "M",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <SectionWrapper maxWidth="6xl">
      <SectionHeader
        title="Trusted by pet owners"
        subtitle="Join thousands who've simplified their pet care journey"
        titleSize="lg"
      />

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-[#1f1f26] p-6 transition-all hover:border-slate-700"
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
                    {testimonial.initial}
                  </span>
                </div>

                {/* Name and Role */}
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
