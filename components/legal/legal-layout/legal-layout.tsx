"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          <p className="text-sm text-slate-400">Last Updated: {lastUpdated}</p>
        </motion.div>

        <div className="space-y-8">{children}</div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 border-t border-slate-800 pt-8"
        >
          <p className="text-center text-sm text-slate-400">
            For questions or concerns, please contact us at{" "}
            <a
              href="mailto:legal@Borzi.app"
              className="text-blue-400 transition-colors hover:text-blue-300"
            >
              legal@Borzi.app
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
