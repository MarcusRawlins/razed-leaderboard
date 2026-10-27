import type { MetadataRoute } from "next";
export const dynamic = "force-static";

import { brand } from "@/lib/brand";
import { kits } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/shop", "/chromatones", "/science", "/business", "/about", "/snapshot", "/faq", "/contact", "/shipping-returns", ...kits.map((k) => `/shop/${k.slug}`)];
  return paths.map((p) => ({ url: `${brand.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
