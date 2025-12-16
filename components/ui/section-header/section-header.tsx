"use client";

import * as motion from "framer-motion/client";

import type { SectionHeaderProps } from "@/lib/types/section";
import { cn } from "@/lib/utils/cn";

const titleSizeClasses = {
  sm: "text-xl sm:text-2xl lg:text-3xl",
  md: "text-2xl sm:text-3xl lg:text-4xl",
  lg: "text-3xl sm:text-4xl lg:text-5xl",
  xl: "text-xl sm:text-5xl lg:text-6xl",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function SectionHeader({
  label,
  title,
  subtitle,
  titleSize = "lg",
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("mb-16", align === "center" ? "text-center" : "text-left")}
    >
      {/* Label */}
      {label && (
        <motion.p
          variants={itemVariants}
          className="text-primary-500 mb-4 text-sm font-medium tracking-wider uppercase"
        >
          {label}
        </motion.p>
      )}

      {/* Title */}
      <motion.h2
        variants={itemVariants}
        className={cn("mb-4 font-bold text-white", titleSizeClasses[titleSize])}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-lg text-slate-400",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
