import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://calabix.vercel.app";

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/#services`, lastModified: new Date() },
    { url: `${base}/#work`, lastModified: new Date() },
    { url: `${base}/#contact`, lastModified: new Date() },
    { url: `${base}/#about`, lastModified: new Date() },
  ];
}
