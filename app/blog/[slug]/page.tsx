import { siteConfig } from "@/lib/config/site";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "./components/blog-post-content";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

import { blogPosts } from "../lib/constants";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Borzi Blog`,
    description: post.excerpt,
    keywords: [post.category, "pet health", "British Shorthair", "cat care"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
