import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://estudioroco.com.ar";
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#servicios`, lastModified, priority: 0.8 },
    { url: `${base}/#nosotros`, lastModified, priority: 0.7 },
    { url: `${base}/#equipo`, lastModified, priority: 0.6 },
    { url: `${base}/#contacto`, lastModified, priority: 0.7 },
  ];
}
