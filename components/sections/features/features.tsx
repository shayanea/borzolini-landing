"use client";

import type { FC, SVGProps } from "react";

import { FeatureCard } from "./components";

interface Feature {
  icon: FC<SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
  linkText?: string;
  isHighlighted?: boolean;
  isComingSoon?: boolean;
  titleColor?: "white" | "purple";
}

const features: Feature[] = [
  {
    icon: null,
    title: "Pet Adoption & Matching",
    description:
      "Find pets that match your lifestyle with our smart matching algorithm.",
    linkText: "Learn more",
  },
  {
    icon: null,
    title: "AI Health Scanner",
    description:
      "Instant health checks using your phone camera to identify potential issues.",
    linkText: "Learn more",
    isHighlighted: true,
  },
  {
    icon: null,
    title: "Weight & Health Tracking",
    description:
      "Monitor weight trends, set health goals, and visualize progress over time.",
    linkText: "Learn more",
  },
  {
    icon: null,
    title: "Training Resources",
    description:
      "Step-by-step guides, video tutorials, and progress tracking for every skill.",
    linkText: "Learn more",
  },
  {
    icon: null,
    title: "Pet Care Library",
    description:
      "Evidence-based care information with breed-specific guidance and tips.",
    linkText: "Learn more",
  },
  {
    icon: null,
    title: "Pet Name Generator",
    description:
      "AI-powered name suggestions filtered by style, origin, and personality.",
    linkText: "Learn more",
  },
  {
    icon: null,
    title: "Nearby Vet Clinics",
    description:
      "Find clinics by service type, read reviews, and check availability.",
    linkText: "Learn more",
  },
  {
    icon: null,
    title: "Appointments & Home Visits",
    description:
      "Book video consultations and schedule home veterinary visits.",
    isComingSoon: true,
    titleColor: "purple",
  },
];

export function Features() {
  return (
    <section className="px-6 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          {/* Label */}
          <p className="mb-4 text-sm font-medium tracking-wider text-[#9c5cf6] uppercase">
            Features
          </p>

          {/* Title */}
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Everything your pet needs
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            A comprehensive toolkit designed for modern pet owners
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              isHighlighted={feature.isHighlighted}
              isComingSoon={feature.isComingSoon}
              titleColor={feature.titleColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
