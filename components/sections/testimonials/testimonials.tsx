"use client";

import { SectionHeader, SectionWrapper } from "@/components/ui";

import type { ReactElement } from "react";
import type { Testimonial } from "./components";
import { TestimonialsGrid } from "./components";

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    petName: "Luna (British Shorthair, 4yrs)",
    avatar: "/testimonials/sarah.jpg",
    quote:
      "Borzi's AI detected early kidney markers 6 months before my vet did. The bloodwork confirmed it. This app saved Luna's life.",
    rating: 5,
    verifiedPurchase: true,
  },
  {
    name: "James K.",
    petName: "Oliver (Persian, 2yrs)",
    quote:
      "Borzi's weight tracking helped me notice Oliver was losing weight gradually. Turned out to be early diabetes. Caught it before it became serious!",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen, DVM",
    clinic: "Pedo Vet Clinic",
    quote:
      "I recommend Borzi to all my clients. The AI catches things between visits that I would miss. It's like having a health monitor at home.",
    isProfessional: true,
  },
];

export function Testimonials(): ReactElement {
  return (
    <SectionWrapper maxWidth="6xl">
      <SectionHeader
        title="Trusted by pet owners"
        subtitle="Join thousands who've simplified their pet care journey"
        titleSize="lg"
      />
      <TestimonialsGrid testimonials={testimonials} />
    </SectionWrapper>
  );
}
