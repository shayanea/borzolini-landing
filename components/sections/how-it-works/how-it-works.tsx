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
    icon: <Camera className="h-8 w-8" fill="#9c5cf6" />,
    title: "Scan Your Pet",
    description:
      "Take a photo of your cat's eyes, coat, poop, or urine. AI analyzes in 10 seconds.",
  },
  {
    icon: <Analyzed className="h-8 w-8" fill="#9c5cf6" />,
    title: "Get Urgency Score",
    description:
      "Low priority? Monitor at home. High priority? Connect to vet instantly.",
  },
  {
    icon: <Ambulance className="h-8 w-8" fill="#9c5cf6" />,
    title: "Take Action",
    description:
      "$29 video consultation or book in-person visit. AI provides vet with full health history.",
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
    <SectionWrapper>
      <SectionHeader
        title="How Borzolini saves lives"
        subtitle="From panic to peace in 3 steps"
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
