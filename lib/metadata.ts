import type { Metadata } from "next";

/** Standard noindex metadata for legal and author pages. */
export const noindexMetadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

/** Self-referencing canonical for a route path (e.g. `/consultar-rfc`). */
export function pageCanonical(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: { canonical: path },
  };
}

/** Bypasses the root layout title template — for short utility/legal page titles. */
export function absoluteTitle(title: string): Pick<Metadata, "title"> {
  return { title: { absolute: title } };
}
