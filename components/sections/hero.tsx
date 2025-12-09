"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-20">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-6 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          Welcome to Clinic
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 max-w-2xl text-xl text-gray-300 md:text-2xl"
          variants={itemVariants}
        >
          Your trusted healthcare partner. We provide exceptional medical care
          with a focus on your well-being.
        </motion.p>
        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <Button size="lg" variant="primary">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
