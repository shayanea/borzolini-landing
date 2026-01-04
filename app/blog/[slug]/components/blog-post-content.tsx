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
  image?: string;
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
              className="hover:text-primary-400 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors"
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
            <span className="bg-primary-500/10 text-primary-300 mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
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

          {/* Hero Image */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 overflow-hidden rounded-2xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-xl max-w-none"
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mt-12 mb-8 text-4xl leading-tight font-bold tracking-tight text-white">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-12 mb-6 border-b border-slate-800 pb-4 text-3xl leading-snug font-bold tracking-tight text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-4 text-2xl leading-snug font-bold tracking-tight text-slate-200">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 text-lg leading-relaxed text-slate-300">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-[#d5992a] no-underline hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 space-y-2 leading-relaxed text-slate-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-6 space-y-2 leading-relaxed text-slate-300">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="my-2 text-lg leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-8 border-l-4 border-[#d5992a] pl-6 text-slate-400 italic">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-12 border-slate-800" />,
                code: ({ children }) => (
                  <code className="rounded bg-slate-800/50 px-2 py-1 text-sm text-[#d5992a]">
                    {children}
                  </code>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>

            {/* References Section */}
            <div className="mt-16 border-t border-slate-800 pt-8">
              <h2 className="mb-6 text-2xl font-bold text-white">References</h2>
              <ol className="space-y-3 text-sm text-slate-400">
                <li>
                  <a
                    href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/polycystic-kidney-disease"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d5992a] hover:underline"
                  >
                    Cornell University College of Veterinary Medicine -
                    Polycystic Kidney Disease in Cats
                  </a>
                </li>
                <li>
                  <a
                    href="https://journals.sagepub.com/doi/10.1177/1098612X15590867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d5992a] hover:underline"
                  >
                    Journal of Feline Medicine and Surgery - Hypertrophic
                    Cardiomyopathy in British Shorthair Cats
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.avma.org/resources/pet-owners/petcare/dental-care-cats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d5992a] hover:underline"
                  >
                    American Veterinary Medical Association - Dental Care for
                    Cats
                  </a>
                </li>
                <li>
                  <a
                    href="https://icatcare.org/advice/obesity-in-cats/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d5992a] hover:underline"
                  >
                    International Cat Care - Obesity in Cats
                  </a>
                </li>
                <li>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/26780732/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d5992a] hover:underline"
                  >
                    Journal of Veterinary Internal Medicine - Chronic Kidney
                    Disease in Cats
                  </a>
                </li>
              </ol>
              <p className="mt-6 text-xs text-slate-500">
                *This article is for informational purposes only and does not
                replace professional veterinary advice. Always consult your
                veterinarian for medical decisions.
              </p>
            </div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-primary-500/30 bg-primary-500/5 mt-16 rounded-2xl border p-8 text-center"
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
