"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React from "react";

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
      duration: 0.6,
    },
  },
};

const leftSlideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

const rightSlideVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

interface PhoneCardProps {
  title: string;
  icon: React.ReactNode;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ title, icon }) => (
  <div className="flex flex-col items-center gap-3 rounded-2xl border border-gray-800 bg-linear-to-b from-gray-900/50 to-gray-900/20 p-6 backdrop-blur-sm">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-2xl">
      {icon}
    </div>
    <p className="text-center text-sm font-medium text-gray-300">{title}</p>
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-2 backdrop-blur-sm"
              variants={itemVariants}
            >
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm font-medium text-purple-300">
                Now available on iOS & Android
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="mb-6 text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-5xl">
                Everything you need for your pet.{" "}
                <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  In one place.
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="mb-8 max-w-lg text-lg text-gray-400"
              variants={itemVariants}
            >
              From finding your new companion to daily care, health tracking,
              and emergency support — we&apos;re with you every step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              <Button
                size="lg"
                variant="primary"
                className="flex items-center justify-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                Download for iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center justify-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Download for Android
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Top Right Card - Health Check */}
            <motion.div
              className="absolute -top-12 right-0 z-20 w-64"
              variants={rightSlideVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900/80 to-gray-900/40 p-4 backdrop-blur-xl">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Welcome back</p>
                    <p className="text-lg font-bold text-white">Good morning</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-500/30 ring-2 ring-purple-500/50" />
                </div>

                {/* Health Status */}
                <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gray-800/30 p-3">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div>
                    <p className="text-xs text-gray-500">Health Check</p>
                    <p className="text-sm font-semibold text-white">
                      All clear
                    </p>
                  </div>
                </div>

                {/* Pet Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <p className="font-bold text-purple-300">28kg</p>
                    <p className="text-gray-500">Weight</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-300">3y</p>
                    <p className="text-gray-500">Age</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-300">2w</p>
                    <p className="text-gray-500">Next Vet</p>
                  </div>
                </div>

                {/* Pet Name */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-gray-800/20 p-2">
                  <div className="h-8 w-8 rounded-full bg-purple-600/30" />
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-white">Luna</p>
                    <p className="text-xs text-gray-500">Golden Retriever</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left Card - Features Grid */}
            <motion.div
              className="absolute -bottom-16 left-0 z-10 w-72"
              variants={leftSlideVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="rounded-3xl border border-gray-800 bg-linear-to-br from-gray-900/80 to-gray-900/40 p-4 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-3">
                  <PhoneCard title="AI Scanner" icon="🔍" />
                  <PhoneCard title="3 clinics nearby" icon="📍" />
                  <PhoneCard title="Training" icon="📚" />
                  <PhoneCard title="Care Tips" icon="💡" />
                </div>
              </div>
            </motion.div>

            {/* Center Phone Frame */}
            <div className="relative z-0 mx-auto w-full max-w-xs">
              <div className="rounded-3xl border-8 border-gray-900 bg-black shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 z-10 h-6 w-40 -translate-x-1/2 rounded-b-3xl bg-black" />

                {/* Phone Content */}
                <div className="aspect-[9/19.5] rounded-2xl bg-linear-to-b from-gray-900 to-gray-950 p-4">
                  <div className="h-full rounded-xl bg-linear-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
