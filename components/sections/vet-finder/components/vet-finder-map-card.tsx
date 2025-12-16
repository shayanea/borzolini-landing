"use client";

import * as motion from "framer-motion/client";

import dynamic from "next/dynamic";
import type { ReactElement } from "react";

const VetMap = dynamic(() => import("./vet-map"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#17171c]" />,
});

export function VetFinderMapCard(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="relative rounded-3xl border border-slate-800 bg-[#1f1f26] p-4 shadow-2xl">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#17171c]">
          <VetMap />
          <NearbyClinicsOverlay />
        </div>
      </div>
    </motion.div>
  );
}

function NearbyClinicsOverlay(): ReactElement {
  return (
    <div className="pointer-events-none absolute right-4 bottom-8 left-4 z-400">
      <div className="pointer-events-auto rounded-2xl border border-slate-800 bg-[#17171c]/95 p-4 backdrop-blur-lg">
        <p className="mb-3 font-medium text-white">Nearby Clinics</p>
        <div className="space-y-2">
          <ClinicListItem
            name="City Veterinary Center"
            rating="4.9"
            distance="0.8 km"
            status="Open"
            statusClassName="border-green-500/20 bg-green-500/10 text-green-400"
          />
          <ClinicListItem
            name="Pet Emergency 24/7"
            rating="4.8"
            distance="1.2 km"
            status="Open"
            statusClassName="border-green-500/20 bg-green-500/10 text-green-400"
          />
          <ClinicListItem
            name="Dental Pet Clinic"
            rating="4.7"
            distance="2.1 km"
            status="Closed"
            statusClassName="border-slate-500/20 bg-slate-500/10 text-slate-400"
          />
        </div>
      </div>
    </div>
  );
}

interface ClinicListItemProps {
  name: string;
  rating: string;
  distance: string;
  status: string;
  statusClassName: string;
}

function ClinicListItem({
  name,
  rating,
  distance,
  status,
  statusClassName,
}: ClinicListItemProps): ReactElement {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-xl bg-[#1f1f26] p-3 transition-colors hover:bg-slate-800/50">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-slate-400"
          >
            <path d="M11 2v2" />
            <path d="M5 2v2" />
            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
            <path d="M8 15a6 6 0 0 0 12 0v-3" />
            <circle cx="20" cy="10" r="2" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-amber-400"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              {rating}
            </span>
            <span>•</span>
            <span>{distance}</span>
          </div>
        </div>
      </div>
      <div
        className={`focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${statusClassName}`}
      >
        {status}
      </div>
    </div>
  );
}
