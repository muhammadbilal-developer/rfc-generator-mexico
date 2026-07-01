import type { Metadata } from "next";

/** Favicon assets in /public — do not generate; update files in public only. */
export const FAVICON_PATHS = {
  svg: "/favicon.svg",
  png96: "/favicon-96x96.png",
  apple: "/apple-touch-icon.png",
  manifest192: "/web-app-manifest-192x192.png",
  manifest512: "/web-app-manifest-512x512.png",
} as const;

export const siteIcons: NonNullable<Metadata["icons"]> = {
  icon: [
    { url: FAVICON_PATHS.svg, type: "image/svg+xml" },
    { url: FAVICON_PATHS.png96, type: "image/png", sizes: "96x96" },
  ],
  apple: [{ url: FAVICON_PATHS.apple, sizes: "180x180", type: "image/png" }],
};

export const manifestIcons = [
  {
    src: FAVICON_PATHS.manifest192,
    sizes: "192x192",
    type: "image/png",
    purpose: "maskable",
  },
  {
    src: FAVICON_PATHS.manifest512,
    sizes: "512x512",
    type: "image/png",
    purpose: "maskable",
  },
] as const;
