"use client";

import { RoadmapPhase } from "@/lib/content/roadmap-content";
import { motion } from "framer-motion";

interface RoadmapTimelineProps {
  phases: RoadmapPhase[];
}

function StatusBadge({ status }: { status: RoadmapPhase["status"] }) {
  const styles = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    upcoming: "bg-slate-500/20 text-slate-400 border-slate-500/30",
  };

  const labels = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function TimelineConnector({ isLast }: { isLast: boolean }) {
  if (isLast) return null;

  return (
    <div className="absolute top-16 left-6 h-full w-px bg-gradient-to-b from-slate-700 to-transparent" />
  );
}

function PhaseCard({
  phase,
  index,
  isLast,
}: {
  phase: RoadmapPhase;
  index: number;
  isLast: boolean;
}) {
  const dotStyles = {
    completed: "bg-green-500 shadow-green-500/50",
    "in-progress": "bg-amber-500 shadow-amber-500/50 animate-pulse",
    upcoming: "bg-slate-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-16"
    >
      {/* Timeline dot */}
      <div
        className={`absolute top-1 left-4 h-4 w-4 rounded-full shadow-lg ${dotStyles[phase.status]}`}
      />

      {/* Connector line */}
      <TimelineConnector isLast={isLast} />

      {/* Card content */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{phase.timeline}</p>
          </div>
          <StatusBadge status={phase.status} />
        </div>

        <p className="mb-4 text-slate-300">{phase.description}</p>

        <ul className="space-y-2">
          {phase.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-start text-sm text-slate-400"
            >
              <span className="bg-primary-500 mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  return (
    <div className="space-y-12">
      {phases.map((phase, index) => (
        <PhaseCard
          key={index}
          phase={phase}
          index={index}
          isLast={index === phases.length - 1}
        />
      ))}
    </div>
  );
}
