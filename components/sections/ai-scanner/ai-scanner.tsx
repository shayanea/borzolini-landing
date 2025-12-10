"use client";

import { SectionWrapper } from "@/components/ui";
import * as motion from "framer-motion/client";

export function AIScanner() {
  return (
    <SectionWrapper
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

                {/* Screen Content */}
                <div className="flex h-full flex-col px-4 pt-12">
                  {/* Header */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-medium text-white">
                      AI Health Scanner
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#9c5cf6]/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-[#9c5cf6]"
                      >
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                        <circle cx="12" cy="13" r="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Scanning Area */}
                  <div className="relative mb-4 flex-1 overflow-hidden rounded-2xl bg-slate-900/50">
                    {/* Corner Brackets */}
                    <div className="absolute inset-4">
                      {/* Top Left */}
                      <div className="absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-[#9c5cf6]" />
                      {/* Top Right */}
                      <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-[#9c5cf6]" />
                      {/* Bottom Left */}
                      <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-[#9c5cf6]" />
                      {/* Bottom Right */}
                      <div className="absolute right-0 bottom-0 h-8 w-8 rounded-br-lg border-r-2 border-b-2 border-[#9c5cf6]" />
                    </div>

                    {/* Scanning Line */}
                    <div className="animate-scan absolute right-4 left-4 h-0.5 bg-linear-to-r from-transparent via-[#9c5cf6] to-transparent" />

                    {/* Center Target Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-800/50">
                        <div className="h-20 w-20 rounded-full bg-slate-700/50" />
                      </div>
                    </div>
                  </div>

                  {/* Analysis Result Card */}
                  <div className="mb-4 rounded-xl bg-[#1f1f26] p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Analysis Complete
                        </p>
                        <p className="text-xs text-green-400">
                          No issues detected
                        </p>
                      </div>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-green-500"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Skin Health Card */}
            <div className="absolute -right-8 -bottom-4 hidden rounded-xl border border-slate-800 bg-[#1f1f26] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#9c5cf6]/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#9c5cf6]"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Skin Health</p>
                  <p className="text-sm text-[#9c5cf6]">98% healthy</p>
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
          {/* Powered by AI Tag */}
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#9c5cf6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            Powered by AI
          </span>

          {/* Main Heading */}
          <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
            Health insights in seconds
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Our AI-powered scanner uses advanced image recognition to help
            identify potential health concerns before they become serious
            problems.
          </p>

          {/* Feature Cards */}
          <div className="space-y-4">
            {/* Instant Analysis */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4 transition-colors hover:border-slate-700">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9c5cf6]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#9c5cf6]"
                >
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">
                  Instant Analysis
                </h3>
                <p className="text-sm text-slate-400">
                  Point, scan, and get results in under 10 seconds
                </p>
              </div>
            </div>

            {/* Photo History */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4 transition-colors hover:border-slate-700">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9c5cf6]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#9c5cf6]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">Photo History</h3>
                <p className="text-sm text-slate-400">
                  Track changes over time with automatic logging
                </p>
              </div>
            </div>

            {/* Care Recommendations */}
            <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4 transition-colors hover:border-slate-700">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#9c5cf6]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#9c5cf6]"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-medium text-white">
                  Care Recommendations
                </h3>
                <p className="text-sm text-slate-400">
                  Get personalized advice based on scan results
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
