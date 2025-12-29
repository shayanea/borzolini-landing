"use client";

import * as motion from "framer-motion/client";

import { Ambulance, Analyzed, Camera } from "@/assets/icons";
import { SectionHeader, SectionWrapper } from "@/components/ui";

import { StepCard } from "./components";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Camera className="h-8 w-8" fill="var(--color-primary)" />,
    title: "Scan Your Pet",
    description:
      "Take a photo of your pet's skin, eyes, coat, or stool. AI analyzes in seconds.",
  },
  {
    icon: <Analyzed className="h-8 w-8" fill="var(--color-primary)" />,
    title: "Get AI Insights",
    description:
      "Receive detailed analysis with confidence scores and health recommendations.",
  },
  {
    icon: <Ambulance className="h-8 w-8" fill="var(--color-primary)" />,
    title: "Track & Monitor",
    description:
      "Monitor weight trends, track training progress, and find trusted vets nearby when needed.",
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

export function HowItWorks() {
  return (
    <SectionWrapper sectionId="how-it-works">
      <SectionHeader
        title="How Borzi works"
        subtitle="Track your pet's health in 3 simple steps"
      />

      {/* Steps Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-12 md:grid-cols-3"
      >
        {steps.map((step) => (
          <motion.div key={step.title} variants={itemVariants}>
            <StepCard
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
