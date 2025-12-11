"use client";

import { Lightning, Pill, Pulse, Telephone } from "@/assets/icons";
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
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      {/* Free Tier */}
      <PricingTier
        badge="Free Forever"
        price="$0"
        features={[
          "✅ 5 AI scans/month",
          "✅ Basic breed info",
          "✅ Medication reminders",
          "✅ Community access",
          "❌ Poop/urine scanning",
          "❌ Health Score tracking",
        ]}
        ctaText="Get Started"
        onCtaClick={() => handleCtaClick("free")}
      />

      {/* Premium Tier */}
      <PricingTier
        badge="Most Popular"
        price="$9.99/month"
        features={[
          "✅ Unlimited AI scans",
          "✅ Poop + urine analysis",
          "✅ Pet Health Score",
          "✅ Medication effectiveness tracking",
          "✅ Priority vet chat",
          "✅ Monthly health reports",
        ]}
        ctaText="Start Free Trial"
        highlighted={true}
        onCtaClick={() => handleCtaClick("premium")}
      />

      {/* Emergency Tier */}
      <PricingTier
        badge="Pay-per-use"
        price="$29-49/call"
        features={[
          { icon: Telephone, text: "Emergency vet video call" },
          { icon: Pulse, text: "Available 24/7" },
          { icon: Lightning, text: "Response in 2 minutes" },
          { icon: Pill, text: "Prescription if needed" },
        ]}
        ctaText="Talk to Vet Now"
        onCtaClick={() => handleCtaClick("emergency")}
      />
    </motion.div>
  );
}
