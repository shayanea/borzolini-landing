"use client";

import {
  Appointment,
  Book,
  Heart,
  Library,
  Pin,
  Scan,
  Sparkle,
  Tracking,
} from "@/assets/icons";
import type { FC, SVGProps } from "react";

import { FeatureCard } from "./components";

interface Feature {
  icon: FC<SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
  linkText?: string;
  isHighlighted?: boolean;
  isComingSoon?: boolean;
  iconColor?: string;
  iconBackgroundColor?:
    | "red"
    | "purple"
    | "green"
    | "yellow"
    | "blue"
    | "pink"
    | "teal";
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Pet Adoption & Matching",
    description:
      "Find pets that match your lifestyle with our smart matching algorithm.",
    linkText: "Learn more",
    iconBackgroundColor: "red",
    iconColor: "#FB7185",
  },
  {
    icon: Scan,
    title: "AI Health Scanner",
    description:
      "Instant health checks using your phone camera to identify potential issues.",
    linkText: "Learn more",
    isHighlighted: true,
    iconBackgroundColor: "purple",
    iconColor: "#9C5CF6",
  },
  {
    icon: Tracking,
    title: "Weight & Health Tracking",
    description:
      "Monitor weight trends, set health goals, and visualize progress over time.",
    linkText: "Learn more",
    iconBackgroundColor: "green",
    iconColor: "#35D399",
  },
  {
    icon: Book,
    title: "Training Resources",
    description:
      "Step-by-step guides, video tutorials, and progress tracking for every skill.",
    linkText: "Learn more",
    iconBackgroundColor: "yellow",
    iconColor: "#FBBF23",
  },
  {
    icon: Library,
    title: "Pet Care Library",
    description:
      "Evidence-based care information with breed-specific guidance and tips.",
    linkText: "Learn more",
    iconBackgroundColor: "blue",
    iconColor: "#60A5FA",
  },
  {
    icon: Sparkle,
    title: "Pet Name Generator",
    description:
      "AI-powered name suggestions filtered by style, origin, and personality.",
    linkText: "Learn more",
    iconBackgroundColor: "pink",
    iconColor: "#F472B6",
  },
  {
    icon: Pin,
    title: "Nearby Vet Clinics",
    description:
      "Find clinics by service type, read reviews, and check availability.",
    linkText: "Learn more",
    iconBackgroundColor: "teal",
    iconColor: "#22D3EE",
  },
  {
    icon: Appointment,
    title: "Appointments & Home Visits",
    description:
      "Book video consultations and schedule home veterinary visits.",
    isComingSoon: true,
    iconBackgroundColor: "purple",
    iconColor: "#A78BFA",
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
          <h2 className="mb-4 text-xl font-bold text-white sm:text-5xl lg:text-6xl">
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
              iconColor={feature.iconColor}
              iconBackgroundColor={feature.iconBackgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
