import type { MetadataRoute } from "next";
export const dynamic = "force-static";

import { brand } from "@/lib/brand";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }], sitemap: `${brand.url}/sitemap.xml` };
}
