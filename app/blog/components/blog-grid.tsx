"use client";

import * as motion from "framer-motion/client";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts, type BlogPost } from "../lib/data";

export function BlogGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
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
