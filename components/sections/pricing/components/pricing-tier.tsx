"use client";

import { Button } from "@/components/ui";
import * as motion from "framer-motion/client";
import { Check, X } from "lucide-react";
import type { FC, SVGProps } from "react";

interface FeatureItem {
  icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
}

interface PricingTierProps {
  badge: string;
  price: string;
  features: (string | FeatureItem)[];
  ctaText: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

export const PricingTier: FC<PricingTierProps> = ({
  badge,
  price,
  features,
  ctaText,
  highlighted = false,
  onCtaClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl border p-8 transition-all hover:scale-105 ${
        highlighted
          ? "border-[#9c5cf6] bg-linear-to-b from-[#9c5cf6]/10 to-[#1f1f26] shadow-lg shadow-[#9c5cf6]/20"
          : "border-slate-800 bg-[#1f1f26] hover:border-slate-700"
      }`}
    >
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-block rounded-full bg-[#9c5cf6]/20 px-3 py-1 text-sm font-medium text-[#9c5cf6]">
          {badge}
        </span>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="text-4xl font-bold text-white">{price}</div>
      </div>

      {/* Features */}
      <div className="mb-8 space-y-3">
        {features.map((feature, index) => {
          // Handle new icon format
          if (typeof feature === "object" && "icon" in feature) {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <IconComponent className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">{feature.text}</span>
              </div>
            );
          }

          // Handle old string format with emojis/prefixes
          const featureStr = feature as string;
          return (
            <div key={index} className="flex items-center gap-3">
              {featureStr.startsWith("✅") ? (
                <Check className="h-5 w-5 text-green-400" />
              ) : featureStr.startsWith("❌") ? (
                <X className="h-5 w-5 text-red-400" />
              ) : (
                <span className="text-lg">•</span>
              )}
              <span className="text-slate-300">
                {featureStr.replace(/^✅|^❌/, "")}
              </span>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <Button
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        className="w-full"
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </motion.div>
  );
};
