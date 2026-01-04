"use client";

import * as motion from "framer-motion/client";

import {
  Appointment,
  Camera,
  Genetic,
  HealthScore,
  Product,
  Scan,
  Telephone,
  Tracking,
} from "@/assets/icons";
import { SectionHeader, SectionWrapper } from "@/components/ui";
import type { FC, SVGProps } from "react";

import { getIconColorConfig } from "@/lib/constants/icon-colors";
import type { IconBackgroundColor } from "@/lib/types/section";
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
    icon: Scan,
    title: "AI Health Scanning",
    description:
      "Snap a photo of skin issues, wounds, or unusual symptoms and get instant AI analysis",
    isHighlighted: true,
    iconBackgroundColor: "primary",
  },
  {
    icon: Camera,
    title: "Feces Analysis",
    description: "Photo-based stool analysis to monitor digestive health",

    iconBackgroundColor: "primary",
  },
  {
    icon: Tracking,
    title: "Weight Tracking",
    description:
      "Monitor your pet's weight trends with beautiful charts and insights",
    iconBackgroundColor: "primary",
  },
  {
    icon: HealthScore,
    title: "Training Programs",
    description:
      "Daily exercises and progress tracking to train your pet effectively",
    iconBackgroundColor: "primary",
  },
  {
    icon: Genetic,
    title: "Breed Encyclopedia",
    description:
      "50+ breeds with detailed health info, care guides, and breed-specific insights",
    iconBackgroundColor: "primary",
  },
  {
    icon: Product,
    title: "Toxicity Checker",
    description: "Search foods and plants to see if they're safe for your pet",
    iconBackgroundColor: "primary",
  },
  {
    icon: Telephone,
    title: "Vet Finder",
    description: "Find nearby veterinary clinics with ratings and contact info",
    iconBackgroundColor: "primary",
  },
  {
    icon: Appointment,
    title: "Advanced Training & Analytics",
    description:
      "Behavioral modification programs and advanced health analytics",
    isComingSoon: true,
    iconBackgroundColor: "primary",
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
    <SectionWrapper sectionId="features">
      <SectionHeader
        label="Features"
        title="Complete Pet Health Toolkit"
        subtitle="Professional-grade tools to help you care for your pet"
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
