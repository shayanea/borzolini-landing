import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Borzolini",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#17171c",
    theme_color: "#9c5cf6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["medical", "health", "pets"],
    lang: "en-US",
    orientation: "portrait-primary",
  };
}
