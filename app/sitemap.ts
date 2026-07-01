import type { MetadataRoute } from "next";
import { NOINDEX_ROUTES, ROUTES } from "@/lib/routes";
import { SITE_URL } from "@/lib/jsonLd";

const INDEXABLE_ROUTES = [
  ROUTES.home,
  ROUTES.consultarRfc,
  ROUTES.rfcConHomoclave,
  ROUTES.sobreNosotros,
  ROUTES.contacto,
].filter((route) => !NOINDEX_ROUTES.includes(route as (typeof NOINDEX_ROUTES)[number]));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === ROUTES.home ? "weekly" : "monthly",
    priority: route === ROUTES.home ? 1 : 0.8,
  }));
}
