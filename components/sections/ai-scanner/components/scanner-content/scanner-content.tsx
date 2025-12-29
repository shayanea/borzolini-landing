import * as motion from "framer-motion/client";

import { Eye, Quality, Stool } from "@/assets/icons";

import type { ReactElement } from "react";

export function ScannerContent(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="order-1 lg:order-2"
    >
      <ScannerBadge />
      <ScannerHeading />
      <ScannerFeatureList />
      <ScannerComparisonTable />
    </motion.div>
  );
}

function ScannerBadge(): ReactElement {
  return (
    <span className="text-primary-500 mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium">
      No Hardware Required
    </span>
  );
}

function ScannerHeading(): ReactElement {
  return (
    <h2 className="mb-8 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
      What our AI scans (competitors can&apos;t)
    </h2>
  );
}

function ScannerFeatureList(): ReactElement {
  return (
    <div className="mb-8 space-y-4">
      <ScannerFeatureItem
        icon={<Eye className="h-6 w-6" />}
        title="Eye Clarity"
        description="Cloudiness = early cataracts or kidney issues"
      />

      <ScannerFeatureItem
        icon={<Quality className="h-6 w-6" />}
        title="Coat Quality"
        description="Dullness = nutritional deficiency or thyroid"
      />

      <ScannerFeatureItem
        icon={<Stool className="h-6 w-6" />}
        title="Stool Analysis"
        description="Blood, parasites, consistency issues"
      />
    </div>
  );
}

interface ScannerFeatureItemProps {
  icon: ReactElement;
  title: string;
  description: string;
}

function ScannerFeatureItem({
  icon,
  title,
  description,
}: ScannerFeatureItemProps): ReactElement {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-[#1f1f26] p-4">
      <div className="bg-primary-500/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 font-medium text-white">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}

function ScannerComparisonTable(): ReactElement {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#1f1f26] p-4">
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4 border-b border-slate-700 pb-2">
          <span className="text-sm font-medium text-slate-400">Product</span>
          <span className="text-sm font-medium text-slate-400">Cost</span>
        </div>

        <ScannerComparisonRow product="Petnostics (urine kit)" cost="$45/kit" />
        <ScannerComparisonRow
          product="Whistle GPS Collar"
          cost="$149 + $9/mo"
        />

        <div className="bg-primary-500/10 grid grid-cols-2 gap-4 rounded-lg p-2">
          <span className="text-primary-500 text-sm font-medium">
            Borzi (all features)
          </span>
          <span className="text-primary-500 text-sm font-medium">
            FREE or $9.99/mo
          </span>
        </div>
      </div>
    </div>
  );
}

interface ScannerComparisonRowProps {
  product: string;
  cost: string;
}

function ScannerComparisonRow({
  product,
  cost,
}: ScannerComparisonRowProps): ReactElement {
  return (
    <div className="grid grid-cols-2 gap-4 py-2">
      <span className="text-sm text-slate-300">{product}</span>
      <span className="text-sm text-slate-300">{cost}</span>
    </div>
  );
}
