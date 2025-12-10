"use client";

import { Heart, Home, Pulse, Search, Training, Vet } from "@/assets/icons";
import type { FC, SVGProps } from "react";
import * as motion from "framer-motion/client";

import { SectionHeader, SectionWrapper } from "@/components/ui";
import { ProcessCard } from "./components";

interface ProcessStep {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Finding a Pet",
    description: "Discover your perfect match",
  },
  {
    icon: Home,
    title: "Bringing Them Home",
    description: "Prepare for the arrival",
  },
  {
    icon: Heart,
    title: "Daily Care",
    description: "Nutrition & wellness",
  },
  {
    icon: Pulse,
    title: "Health Monitoring",
    description: "Track their wellbeing",
  },
  {
    icon: Training,
    title: "Training",
    description: "Build good habits",
  },
  {
    icon: Vet,
    title: "Vet Access",
    description: "Professional care",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

export function CompanionJourney() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Your companion through every moment"
        subtitle="From the first search to years of companionship, we're here at every stage"
        titleSize="lg"
      />

      {/* Process Cards with Connecting Line */}
      <div className="relative">
        {/* Continuous Dashed Line - positioned at center of icons (h-24 = 96px, center = 48px = top-12) */}
        <div className="absolute top-12 right-0 left-0 z-0 hidden lg:block">
          <div className="mx-auto h-px w-full max-w-[calc(100%-8rem)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full border-t border-dashed border-[#4F4F55]"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-4"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProcessCard
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
