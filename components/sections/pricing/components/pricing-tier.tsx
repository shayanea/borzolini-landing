"use client";

import * as motion from "framer-motion/client";

import type { FC, SVGProps } from "react";

import { Button } from "@/components/ui";
import CancelIcon from "@/assets/icons/cancel.png";
import CheckIcon from "@/assets/icons/check.png";
import Image from "next/image";

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
      className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all hover:scale-105 ${
        highlighted
          ? "border-primary-500 from-primary-500/10 shadow-primary-500/20 bg-linear-to-b to-[#1f1f26] shadow-lg"
          : "border-slate-800 bg-[#1f1f26] hover:border-slate-700"
      }`}
    >
      {/* Badge */}
      <div className="mb-6">
        <span className="bg-primary-500/20 text-primary-500 inline-block rounded-full px-3 py-1 text-sm font-medium">
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
                <Image
                  src={CheckIcon}
                  alt="Included"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              ) : featureStr.startsWith("❌") ? (
                <Image
                  src={CancelIcon}
                  alt="Not included"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
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
        className="mt-auto w-full"
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </motion.div>
  );
};
