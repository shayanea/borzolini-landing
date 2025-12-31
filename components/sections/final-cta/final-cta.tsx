"use client";

import * as motion from "framer-motion/client";

import { Clock, Heart, ShieldCheck } from "lucide-react";

import { SectionWrapper, WaitlistForm } from "@/components/ui";

export function FinalCTA() {
  return (
    <SectionWrapper
      maxWidth="4xl"
      customClassName="overflow-hidden"
      backdrop={
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9c5cf6]/10 blur-[150px]"
        />
      }
    >
      <div className="relative text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Ready to give your pet the care they deserve?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-lg text-slate-400"
        >
          Join thousands of pet owners who are waiting to make caring for their
          companions simpler.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-center sm:flex-row"
        >
          <WaitlistForm
            className="mx-auto"
            placeholder="Enter your email to get early access"
          />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          {/* Secure & Private */}
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            Secure & Private
          </span>

          <span className="hidden text-slate-700 sm:inline">•</span>

          {/* Free to Start */}
          <span className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#9c5cf6]" />
            Free to Start
          </span>

          <span className="hidden text-slate-700 sm:inline">•</span>

          {/* Loved by Pets */}
          <span className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-amber-400" />
            Loved by Pets
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
