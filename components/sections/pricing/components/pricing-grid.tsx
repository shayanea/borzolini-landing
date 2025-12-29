"use client";

import * as motion from "framer-motion/client";

import { PricingTier } from "./pricing-tier";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function PricingGrid() {
  const handleCtaClick = (tier: string) => {
    // TODO: Implement analytics tracking and navigation
    console.log(`CTA clicked for ${tier} tier`);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2"
    >
      {/* Free Tier */}
      <PricingTier
        badge="Free Forever"
        price="$0"
        features={[
          "✅ 2 AI health scans/month",
          "✅ Weight tracking",
          "✅ Basic training programs",
          "✅ Breed encyclopedia (50+ breeds)",
          "✅ Toxicity checker",
          "✅ Vet finder",
          "❌ Unlimited AI scans",
          "❌ Feces analysis",
        ]}
        ctaText="Get Started"
        onCtaClick={() => handleCtaClick("free")}
      />

      {/* Premium Tier */}
      <PricingTier
        badge="Most Popular"
        price="$4.99/month"
        features={[
          "✅ Unlimited AI health scans",
          "✅ Feces analysis",
          "✅ Advanced weight analytics",
          "✅ Advanced training programs",
          "✅ Priority support",
          "✅ Monthly health reports",
          "✅ All free features",
        ]}
        ctaText="Start Free Trial"
        highlighted={true}
        onCtaClick={() => handleCtaClick("premium")}
      />
    </motion.div>
  );
}
