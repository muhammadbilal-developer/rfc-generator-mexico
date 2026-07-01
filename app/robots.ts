import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/jsonLd";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/autor", "/politica-de-privacidad", "/terminos-y-condiciones", "/descargo-de-responsabilidad"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
