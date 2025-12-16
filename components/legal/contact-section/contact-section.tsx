"use client";

import { motion } from "framer-motion";

interface ContactSectionProps {
  email: string;
  phone: string;
  address: string;
}

export function ContactSection({ email, phone, address }: ContactSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-slate-800 bg-slate-900/50 p-6"
    >
      <h3 className="mb-4 text-xl font-semibold text-white">Contact Us</h3>
      <div className="space-y-3 text-slate-300">
        <div>
          <span className="font-medium text-white">Email:</span>{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-400 transition-colors hover:text-blue-300"
          >
            {email}
          </a>
        </div>
        <div>
          <span className="font-medium text-white">Phone:</span>{" "}
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-blue-400 transition-colors hover:text-blue-300"
          >
            {phone}
          </a>
        </div>
        <div>
          <span className="font-medium text-white">Address:</span>{" "}
          <span>{address}</span>
        </div>
      </div>
    </motion.div>
  );
}
