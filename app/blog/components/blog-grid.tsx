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
    slug: "early-kidney-disease-detection",
    title: "Early Kidney Disease Detection in British Shorthairs",
    excerpt:
      "Learn how AI-powered monitoring can detect kidney issues months before symptoms appear. Essential reading for British Shorthair owners.",
    date: "2025-12-20",
    readTime: "5 min read",
    category: "Health",
  },
  {
    slug: "nutrition-guide-british-shorthair",
    title: "Complete Nutrition Guide for British Shorthairs",
    excerpt:
      "Discover the optimal diet for your British Shorthair, including portion sizes, supplements, and foods to avoid.",
    date: "2025-12-13",
    readTime: "7 min read",
    category: "Nutrition",
  },
  {
    slug: "ai-health-monitoring-benefits",
    title: "How AI Health Monitoring Saves Lives",
    excerpt:
      "Real stories from pet owners who caught serious health issues early using AI-powered health scanning.",
    date: "2025-12-06",
    readTime: "6 min read",
    category: "Technology",
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
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <Link href={`/blog/${post.slug}`} className="block p-6">
        {/* Category Badge */}
        <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
          {post.category}
        </span>

        {/* Title */}
        <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
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
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 transition-opacity group-hover:opacity-100">
          Read More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  );
}
