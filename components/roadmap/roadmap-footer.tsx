"use client";

import { motion } from "framer-motion";

interface RoadmapFooterProps {
  title: string;
  description: string;
  email: string;
}

export function RoadmapFooter({
  title,
  description,
  email,
}: RoadmapFooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-16 border-t border-slate-800 pt-12 text-center"
    >
      <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
      <p className="mb-4 text-slate-400">{description}</p>
      <a
        href={`mailto:${email}`}
        className="bg-primary-500 hover:bg-primary-600 hover:shadow-primary-500/20 inline-flex items-center rounded-lg px-6 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}
