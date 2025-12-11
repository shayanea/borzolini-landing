"use client";

import * as motion from "framer-motion/client";

import { Eye, Quality, Stool } from "@/assets/icons";
import { MockHeader, MockResult } from "./components";

import { SectionWrapper } from "@/components/ui";

export function AIScanner() {
  return (
    <SectionWrapper
      sectionId="ai-scanner"
      maxWidth="6xl"
      backdrop={
        <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#9c5cf6]/5 blur-[100px]" />
      }
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Phone Mockup - Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative mx-auto max-w-[300px]">
            {/* Phone Frame */}
            <div className="relative rounded-[2.5rem] border border-slate-800 bg-[#1f1f26] p-2.5 shadow-2xl shadow-black/50">
              {/* Phone Screen */}
              <div className="relative aspect-9/19 w-full overflow-hidden rounded-4xl bg-[#17171c]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />

                {/* Screen Content - Poop Scan Result */}
                <div className="flex h-full flex-col px-4 pt-12">
                  <MockHeader />
                  <MockResult />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          {/* Badge */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium text-[#9c5cf6]">
            No Hardware Required
          </span>

          {/* Heading */}
          <h2 className="mb-8 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
            What our AI scans (competitors can&apos;t)
          </h2>

          {/* Feature List */}
          <div className="mb-8 space-y-4">
            {/* Eye Clarity */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9c5cf6]/10">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">Eye Clarity</h3>
                <p className="text-sm text-slate-400">
                  Cloudiness = early cataracts or kidney issues
                </p>
              </div>
            </div>

            {/* Coat Quality */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9c5cf6]/10">
                <Quality className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">Coat Quality</h3>
                <p className="text-sm text-slate-400">
                  Dullness = nutritional deficiency or thyroid
                </p>
              </div>
            </div>

            {/* Stool Analysis */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9c5cf6]/10">
                <Stool className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">Stool Analysis</h3>
                <p className="text-sm text-slate-400">
                  Blood, parasites, consistency issues
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-xl border border-slate-800 bg-[#1f1f26] p-4">
            <div className="space-y-3">
              {/* Header */}
              <div className="grid grid-cols-2 gap-4 border-b border-slate-700 pb-2">
                <span className="text-sm font-medium text-slate-400">
                  Product
                </span>
                <span className="text-sm font-medium text-slate-400">Cost</span>
              </div>

              {/* Rows */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <span className="text-sm text-slate-300">
                  Petnostics (urine kit)
                </span>
                <span className="text-sm text-slate-300">$45/kit</span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-2">
                <span className="text-sm text-slate-300">
                  Whistle GPS Collar
                </span>
                <span className="text-sm text-slate-300">$149 + $9/mo</span>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-lg bg-[#9c5cf6]/10 p-2">
                <span className="text-sm font-medium text-[#9c5cf6]">
                  Borzolini (all features)
                </span>
                <span className="text-sm font-medium text-[#9c5cf6]">
                  FREE or $9.99/mo
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
