import { SECTION_IDS } from "./hashNav";

export const SITE_NAME = "RFC Generator Mexico";

export function getSiteUrl(): string {
  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://rfc-generator-mexico.vercel.app";
}

export function getGeneratorUrl(): string {
  return `${getSiteUrl()}/#${SECTION_IDS.generator}`;
}
