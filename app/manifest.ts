import { siteConfig } from "@/lib/config/site";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Borzi",
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
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["medical", "health", "pets"],
    lang: "en-US",
    orientation: "portrait-primary",
  };
}
