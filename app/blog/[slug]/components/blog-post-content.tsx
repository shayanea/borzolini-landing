"use client";

import * as motion from "framer-motion/client";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <article className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-purple-400"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300">
              {post.category}
            </span>

            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg prose-headings:text-white prose-p:text-slate-300 prose-a:text-purple-400 prose-strong:text-white prose-ul:text-slate-300 prose-ol:text-slate-300 max-w-none"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 text-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              Ready to monitor your pet&apos;s health?
            </h3>
            <p className="mb-6 text-slate-400">
              Download Borzi and get AI-powered health insights for your British
              Shorthair.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-slate-900 transition-colors hover:bg-slate-100">
                Download for iOS
              </button>
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-transparent px-6 font-semibold text-white transition-colors hover:bg-slate-800">
                Download for Android
              </button>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
