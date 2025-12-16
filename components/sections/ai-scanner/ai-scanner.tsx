"use client";

import { PhoneMock, ScannerContent } from "./components";

import { SectionWrapper } from "@/components/ui";
import type { ReactElement } from "react";

export function AIScanner(): ReactElement {
  return (
    <SectionWrapper
      sectionId="ai-scanner"
      maxWidth="6xl"
      backdrop={
        <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#9c5cf6]/5 blur-[100px]" />
      }
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <PhoneMock />
        <ScannerContent />
      </div>
    </SectionWrapper>
  );
}
