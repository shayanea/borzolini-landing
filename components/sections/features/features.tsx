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
import { getIconColorConfig } from "@/lib/constants/icon-colors";
import type { IconBackgroundColor } from "@/lib/types/section";
import type { FC, SVGProps } from "react";

import { SectionHeader, SectionWrapper } from "@/components/ui";
import { FeatureCard } from "./components";

interface Feature {
  icon: FC<SVGProps<SVGSVGElement>> | null;
  title: string;
  description: string;
  linkText?: string;
  isHighlighted?: boolean;
  isComingSoon?: boolean;
  iconBackgroundColor?: IconBackgroundColor;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Pet Adoption & Matching",
    description:
      "Find pets that match your lifestyle with our smart matching algorithm.",
    iconBackgroundColor: "red",
  },
  {
    icon: Scan,
    title: "AI Health Scanner",
    description:
      "Instant health checks using your phone camera to identify potential issues.",
    isHighlighted: true,
    iconBackgroundColor: "purple",
  },
  {
    icon: Tracking,
    title: "Weight & Health Tracking",
    description:
      "Monitor weight trends, set health goals, and visualize progress over time.",
    iconBackgroundColor: "green",
  },
  {
    icon: Book,
    title: "Training Resources",
    description:
      "Step-by-step guides, video tutorials, and progress tracking for every skill.",
    iconBackgroundColor: "yellow",
  },
  {
    icon: Library,
    title: "Pet Care Library",
    description:
      "Evidence-based care information with breed-specific guidance and tips.",
    iconBackgroundColor: "blue",
  },
  {
    icon: Sparkle,
    title: "Pet Name Generator",
    description:
      "AI-powered name suggestions filtered by style, origin, and personality.",
    iconBackgroundColor: "pink",
  },
  {
    icon: Pin,
    title: "Nearby Vet Clinics",
    description:
      "Find clinics by service type, read reviews, and check availability.",
    iconBackgroundColor: "teal",
  },
  {
    icon: Appointment,
    title: "Appointments & Home Visits",
    description:
      "Book video consultations and schedule home veterinary visits.",
    isComingSoon: true,
    iconBackgroundColor: "purple",
  },
];

export function Features() {
  return (
    <SectionWrapper>
      <SectionHeader
        label="Features"
        title="Everything your pet needs"
        subtitle="A comprehensive toolkit designed for modern pet owners"
        titleSize="xl"
      />

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const colorConfig = getIconColorConfig(feature.iconBackgroundColor);
          return (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              isHighlighted={feature.isHighlighted}
              isComingSoon={feature.isComingSoon}
              iconColor={colorConfig?.color}
              iconBackgroundColor={feature.iconBackgroundColor}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
