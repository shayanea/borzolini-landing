"use client";

import {
  Apple,
  ArrowRight,
  Clock,
  Heart,
  Play,
  ShieldCheck,
} from "lucide-react";

import { SectionWrapper } from "@/components/ui";

export function FinalCTA() {
  return (
    <SectionWrapper
      maxWidth="4xl"
      customClassName="overflow-hidden"
      backdrop={
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9c5cf6]/10 blur-[150px]" />
      }
    >
      <div className="relative text-center">
        {/* Main Heading */}
        <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to give your pet the care they deserve?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
          Download Borzolini today and join thousands of pet owners who&apos;ve
          made caring for their companions simpler.
        </p>

        {/* Download Buttons */}
        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          {/* iOS Download Button */}
          <button className="group focus-visible:ring-ring inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 text-base font-semibold whitespace-nowrap text-[#17171c] shadow transition-colors hover:bg-slate-100 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            <Apple className="h-5 w-5" />
            Download for iOS
            <ArrowRight className="-ml-4 h-4 w-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
          </button>

          {/* Android Download Button */}
          <button className="group hover:text-accent-foreground focus-visible:ring-ring inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-transparent px-8 text-base font-semibold whitespace-nowrap text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            <Play className="h-5 w-5" />
            Download for Android
            <ArrowRight className="-ml-4 h-4 w-4 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
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
        </div>
      </div>
    </SectionWrapper>
  );
}
