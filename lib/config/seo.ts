import type { Metadata } from "next";
import { siteConfig } from "./site";

export const seoSiteConfig = {
  ...siteConfig,
  ogImage: "/og-image.jpg",
} as const;

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  keywords,
  author,
  publishedTime,
  modifiedTime,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const metaTitle = title
    ? `${title} | ${seoSiteConfig.name}`
    : seoSiteConfig.name;
  const metaDescription = description || seoSiteConfig.description;
  const metaImage = image || `${seoSiteConfig.url}${seoSiteConfig.ogImage}`;
  const metaKeywords = keywords || [...seoSiteConfig.keywords];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: author ? [{ name: author }] : [{ name: seoSiteConfig.name }],
    creator: seoSiteConfig.name,
    publisher: seoSiteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [{ url: "/icon.png" }],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: seoSiteConfig.url,
      siteName: seoSiteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      type: "website",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@borzi",
      site: "@borzi",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
    category: "Pet Health",
    classification: "Veterinary Services",
  };
}
