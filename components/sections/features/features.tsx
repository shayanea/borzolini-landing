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
import * as motion from "framer-motion/client";
import { SectionHeader, SectionWrapper } from "@/components/ui";

import { FeatureCard } from "./components";
import type { IconBackgroundColor } from "@/lib/types/section";
import { getIconColorConfig } from "@/lib/constants/icon-colors";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => {
          const colorConfig = getIconColorConfig(feature.iconBackgroundColor);
          return (
            <motion.div key={feature.title} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                linkText={feature.linkText}
                isHighlighted={feature.isHighlighted}
                isComingSoon={feature.isComingSoon}
                iconColor={colorConfig?.color}
                iconBackgroundColor={feature.iconBackgroundColor}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
