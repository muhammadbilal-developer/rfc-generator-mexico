import { SECTION_IDS } from "./hashNav";

export const SITE_NAME = "RFC Generator Mexico";
export const SITE_LOGO_PATH = "/images/brand/logo.webp";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://icalcularrfc.mx";

export function getSiteUrl(): string {
  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }
  return SITE_URL;
}

export function getSiteDisplayUrl(): string {
  return getSiteUrl().replace(/^https?:\/\//, "");
}

export function getGeneratorUrl(): string {
  return `${getSiteUrl()}/#${SECTION_IDS.generator}`;
}
