"use client";

import * as motion from "framer-motion/client";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9c5cf6]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            Weekly Updates
          </span>

          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Pet Health Insights
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Expert advice, AI-powered insights, and the latest in pet health
            care. Stay informed about your British Shorthair&apos;s wellness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
