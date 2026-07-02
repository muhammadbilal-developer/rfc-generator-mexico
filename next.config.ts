import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [360, 480, 520, 640, 750, 828, 1080, 1200],
    imageSizes: [32, 48, 64, 96, 128, 256, 360, 480],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "motion", "zod"],
    inlineCss: true,
  },
};

export default nextConfig;
