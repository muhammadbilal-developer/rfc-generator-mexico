import type { Metadata } from "next";

/** Standard noindex metadata for legal and author pages. */
export const noindexMetadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};
