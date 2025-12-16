"use client";

import { VetFinderContent, VetFinderMapCard } from "./components";

import { SectionWrapper } from "@/components/ui";
import type { ReactElement } from "react";

export function VetFinder(): ReactElement {
  return (
    <SectionWrapper
      sectionId="find-vets"
      maxWidth="6xl"
      backdrop={
        <div className="absolute inset-0 bg-linear-to-b from-[#17171c] via-[#1a1a21] to-[#17171c]" />
      }
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <VetFinderContent />
        <VetFinderMapCard />
      </div>
    </SectionWrapper>
  );
}
