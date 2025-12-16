"use client";

import { motion } from "framer-motion";

interface LegalSubsection {
  title: string;
  content: string;
  items?: string[];
}

interface LegalSectionProps {
  title: string;
  content?: string;
  subsections?: LegalSubsection[];
  items?: string[];
  index: number;
}

export function LegalSection({
  title,
  content,
  subsections,
  items,
  index,
}: LegalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-10"
    >
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      {content && (
        <p className="mb-4 leading-relaxed text-slate-300">{content}</p>
      )}

      {items && items.length > 0 && (
        <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-300">
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}

      {subsections && subsections.length > 0 && (
        <div className="mt-6 space-y-6">
          {subsections.map((subsection, idx) => (
            <div key={idx} className="ml-4">
              <h3 className="mb-3 text-xl font-semibold text-white">
                {subsection.title}
              </h3>
              <p className="mb-3 leading-relaxed text-slate-300">
                {subsection.content}
              </p>
              {subsection.items && subsection.items.length > 0 && (
                <ul className="ml-6 list-disc space-y-2 text-slate-300">
                  {subsection.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
