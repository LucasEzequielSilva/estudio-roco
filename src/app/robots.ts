import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://estudioroco.com.ar/sitemap.xml",
    host: "https://estudioroco.com.ar",
  };
}
