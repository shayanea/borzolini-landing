"use client";

import { SectionHeader, SectionWrapper } from "@/components/ui";

import { PricingGrid } from "./components/pricing-grid";

export function PricingSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Choose your plan"
        subtitle="Free core features. Premium for power users."
        titleSize="xl"
      />

      <PricingGrid />
    </SectionWrapper>
  );
}
