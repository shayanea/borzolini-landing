"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

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

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950 px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm font-medium text-purple-300">
                Now available on iOS & Android
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-6xl leading-tight font-bold text-white">
              Everything you need for your pet.{" "}
              <span className="text-purple-500">In one place.</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-md text-base text-gray-400">
              From finding your new companion to daily care, health tracking,
              and emergency support — we&apos;re with you every step.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" variant="primary">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 13.5c-.91 0-1.64.7-1.7 1.6h3.4c-.06-.9-.79-1.6-1.7-1.6m-4.5 0c-.9 0-1.65.7-1.7 1.6h3.4c-.05-.9-.8-1.6-1.7-1.6M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 15.1h-3v-5.6h3v5.6zm6-7c-.5 1.6-2 2.7-3.7 2.7s-3.2-1.1-3.7-2.7H7V6h10v5.1z" />
                </svg>
                Download for iOS
              </Button>
              <Button size="lg" variant="outline">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.23-.86-.28-.17-.66-.04-.82.27l-1.96 3.46c-2.92-.92-7.26-.92-10.18 0L4.59 5.65c-.16-.31-.54-.44-.82-.27-.27.17-.39.55-.23.86L6.4 9.48C3.3 11.74 1.7 15.42 1.7 19.2h20.6c0-3.78-1.6-7.46-4.7-9.72zM7 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm10 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
                Download for Android
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative h-screen max-h-96 lg:max-h-full">
            {/* Health Check Card - Top Right */}
            <motion.div
              className="absolute top-0 right-0 w-64"
              variants={rightSlideVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="rounded-3xl border border-gray-700/50 bg-gray-900/40 p-5 backdrop-blur-md">
                {/* Header */}
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Good morning</p>
                    <p className="text-xl font-bold text-white">Welcome back</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-600/40 ring-2 ring-purple-500" />
                </div>

                {/* Health Check */}
                <div className="mb-5 flex items-center gap-3 rounded-2xl bg-gray-800/30 p-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div>
                    <p className="text-xs text-gray-500">Health Check</p>
                    <p className="text-sm font-semibold text-white">
                      All clear
                    </p>
                  </div>
                </div>

                {/* Pet Stats */}
                <div className="mb-5 grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-sm font-bold text-purple-400">28kg</p>
                    <p className="text-xs text-gray-500">Weight</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-purple-400">3y</p>
                    <p className="text-xs text-gray-500">Age</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-purple-400">2w</p>
                    <p className="text-xs text-gray-500">Next Vet</p>
                  </div>
                </div>

                {/* Pet Info */}
                <div className="flex items-center gap-3 rounded-xl bg-gray-800/20 p-3">
                  <div className="h-10 w-10 rounded-full bg-purple-600/30" />
                  <div>
                    <p className="text-sm font-bold text-white">Luna</p>
                    <p className="text-xs text-gray-500">Golden Retriever</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features Grid - Bottom Left */}
            <motion.div
              className="absolute bottom-0 left-0 w-72"
              variants={leftSlideVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="rounded-3xl border border-gray-700/50 bg-gray-900/40 p-4 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-700/30 bg-gray-800/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/20 text-lg">
                      📋
                    </div>
                    <p className="text-center text-xs font-medium text-gray-300">
                      AI Scanner
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-700/30 bg-gray-800/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/20 text-lg">
                      📍
                    </div>
                    <p className="text-center text-xs font-medium text-gray-300">
                      3 clinics nearby
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-700/30 bg-gray-800/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/20 text-lg">
                      📚
                    </div>
                    <p className="text-center text-xs font-medium text-gray-300">
                      Training
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-700/30 bg-gray-800/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/20 text-lg">
                      💡
                    </div>
                    <p className="text-center text-xs font-medium text-gray-300">
                      Care Tips
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
