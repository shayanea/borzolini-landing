"use client";

import * as motion from "framer-motion/client";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

// Sample blog posts - replace with your actual data source
const blogPosts: BlogPost[] = [
  {
    slug: "5-silent-killers-british-shorthairs",
    title:
      "5 Silent Killers in British Shorthairs (And How AI Detects Them Early)",
    excerpt:
      "Discover the hidden health threats that affect British Shorthairs and learn how AI-powered monitoring can detect them months before symptoms appear.",
    date: "2025-12-29",
    readTime: "8 min read",
    category: "Health",
    image: "/blog/5-silent-killers-hero.webp",
  },
  // {
  // 	slug: "early-kidney-disease-detection",
  // 	title: "Early Kidney Disease Detection in British Shorthairs",
  // 	excerpt:
  // 		"Learn how AI-powered monitoring can detect kidney issues months before symptoms appear. Essential reading for British Shorthair owners.",
  // 	date: "2025-12-20",
  // 	readTime: "5 min read",
  // 	category: "Health",
  // },
  // {
  // 	slug: "nutrition-guide-british-shorthair",
  // 	title: "Complete Nutrition Guide for British Shorthairs",
  // 	excerpt:
  // 		"Discover the optimal diet for your British Shorthair, including portion sizes, supplements, and foods to avoid.",
  // 	date: "2025-12-13",
  // 	readTime: "7 min read",
  // 	category: "Nutrition",
  // },
  {
    slug: "ai-health-monitoring-benefits",
    title: "How AI Health Monitoring Saves Lives",
    excerpt:
      "Real stories from pet owners who caught serious health issues early using AI. These stories changed how I think about pet care.",
    date: "2026-02-05",
    readTime: "12 min read",
    category: "Technology",
    image: "/blog/ai-health-monitoring-hero.webp",
  },
];

export function BlogGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            More articles coming soon. Subscribe to our newsletter to stay
            updated!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-[#d5992a]/50 hover:shadow-lg hover:shadow-[#d5992a]/10"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        {post.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          </div>
        )}

        <div className="p-6">
          {/* Category Badge */}
          <span className="mb-4 inline-block rounded-full bg-[#d5992a]/10 px-3 py-1 text-xs font-medium text-[#d5992a]">
            {post.category}
          </span>

          {/* Title */}
          <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#d5992a]">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-sm text-slate-400">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          {/* Read More Arrow */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#d5992a] opacity-0 transition-opacity group-hover:opacity-100">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
