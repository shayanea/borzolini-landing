"use client";

import { motion } from "framer-motion";

interface FutureConsiderationsProps {
  title: string;
  description: string;
  items: string[];
}

export function FutureConsiderations({
  title,
  description,
  items,
}: FutureConsiderationsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-slate-800 bg-slate-900/30 p-8"
    >
      <h2 className="mb-3 text-2xl font-semibold text-white">{title}</h2>
      <p className="mb-6 text-slate-400">{description}</p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-slate-300">
            <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-slate-600" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
