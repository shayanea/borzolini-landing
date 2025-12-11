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
import type { FC, SVGProps } from "react";
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
    icon: Scan,
    title: "Emergency AI Triage",
    description:
      "Ate something toxic? Get urgency score + vet connection in 30 seconds",
    isHighlighted: true,
    iconBackgroundColor: "purple",
  },
  {
    icon: Camera,
    title: "Feces Analysis",
    description:
      "Photo-based stool analysis. Free vs competitors' $30 test kits",

    iconBackgroundColor: "red",
  },
  {
    icon: Tracking,
    title: "Medication Tracker",
    description: "Know if your pet's medication is actually working",
    iconBackgroundColor: "green",
  },
  {
    icon: HealthScore,
    title: "Pet Health Score",
    description:
      "Gamified health tracking. See if your pet is healthier than others",
    iconBackgroundColor: "yellow",
  },
  {
    icon: Genetic,
    title: "Breed-Specific AI",
    description:
      "Trained on British Shorthair patterns. Predicts issues before symptoms",
    iconBackgroundColor: "blue",
  },
  {
    icon: Product,
    title: "Smart Product Recommendations",
    description: "AI suggests supplements based on your pet's scans",
    iconBackgroundColor: "teal",
  },
  {
    icon: Telephone,
    title: "Instant Vet Access",
    description: "Video consultation in 2 minutes. $29-49 vs $150+ ER visit",
    iconBackgroundColor: "pink",
    isComingSoon: true,
  },
  {
    icon: Appointment,
    title: "Appointments & Home Visits",
    description: "Book video consultations and schedule home veterinary visits",
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
