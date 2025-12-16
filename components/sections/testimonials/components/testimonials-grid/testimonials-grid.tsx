"use client";

import * as motion from "framer-motion/client";

import type { ReactElement } from "react";
import type { Testimonial } from "../testimonial-card/testimonial-card";
import { TestimonialCard } from "../testimonial-card/testimonial-card";

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TestimonialsGrid({
  testimonials,
}: TestimonialsGridProps): ReactElement {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:grid-cols-3"
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimonial={testimonial}
          variants={itemVariants}
        />
      ))}
    </motion.div>
  );
}
