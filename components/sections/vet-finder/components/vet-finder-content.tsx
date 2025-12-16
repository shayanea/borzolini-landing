"use client";

import * as motion from "framer-motion/client";
import type { ReactElement } from "react";

export function VetFinderContent(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <VetFinderHeader />
      <VetFinderTitle />
      <VetFinderDescription />
      <VetFinderServiceFilters />
      <VetFinderStats />
    </motion.div>
  );
}

function VetFinderHeader(): ReactElement {
  return (
    <span className="text-primary-500 mb-4 inline-flex items-center gap-2 text-sm font-medium">
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
        className="h-4 w-4"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      Find Care Nearby
    </span>
  );
}

function VetFinderTitle(): ReactElement {
  return (
    <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
      Connect with trusted veterinary clinics
    </h2>
  );
}

function VetFinderDescription(): ReactElement {
  return (
    <p className="mb-8 text-lg leading-relaxed text-slate-400">
      Find the right care when you need it. Search by service type, read
      verified reviews, and check real-time availability.
    </p>
  );
}

function VetFinderServiceFilters(): ReactElement {
  return (
    <div className="mb-8">
      <p className="mb-3 text-sm text-slate-500">Filter by service</p>
      <div className="flex flex-wrap gap-2">
        <VetFilterButton
          label="Vaccination"
          className="border-blue-500/20 bg-blue-500/10 text-blue-400"
          icon={
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
              className="h-4 w-4"
            >
              <path d="m18 2 4 4" />
              <path d="m17 7 3-3" />
              <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
              <path d="m9 11 4 4" />
              <path d="m5 19-3 3" />
              <path d="m14 4 6 6" />
            </svg>
          }
        />

        <VetFilterButton
          label="Dental"
          className="border-amber-500/20 bg-amber-500/10 text-amber-400"
          icon={
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
              className="h-4 w-4"
            >
              <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
            </svg>
          }
        />

        <VetFilterButton
          label="Emergency"
          className="border-red-500/20 bg-red-500/10 text-red-400"
          icon={
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
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          }
        />

        <VetFilterButton
          label="Surgery"
          className="border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
          icon={
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
              className="h-4 w-4"
            >
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

interface VetFilterButtonProps {
  label: string;
  className: string;
  icon: ReactElement;
}

function VetFilterButton({
  label,
  className,
  icon,
}: VetFilterButtonProps): ReactElement {
  return (
    <button
      type="button"
      className={`hover:bg-opacity-20 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function VetFinderStats(): ReactElement {
  return (
    <div className="grid grid-cols-3 gap-4">
      <VetStatCard value="500+" label="Partner Clinics" />
      <VetStatCard value="24/7" label="Emergency Access" />
      <VetStatCard value="4.8" label="Avg. Rating" />
    </div>
  );
}

interface VetStatCardProps {
  value: string;
  label: string;
}

function VetStatCard({ value, label }: VetStatCardProps): ReactElement {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#1f1f26] p-4 text-center">
      <p className="mb-1 text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
