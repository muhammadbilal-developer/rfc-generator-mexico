"use client";

import dynamic from "next/dynamic";

const RfcGeneratorCard = dynamic(
  () => import("./RfcGeneratorCard").then((mod) => mod.RfcGeneratorCard),
  {
    loading: () => (
      <div
        aria-hidden
        className="min-h-[320px] animate-pulse rounded-xl border border-emerald-100/80 bg-white/90 shadow-[0_16px_40px_rgba(16,185,129,0.08)] sm:min-h-[360px]"
      />
    ),
  },
);

export function HeroGeneratorPanel() {
  return <RfcGeneratorCard compact variant="home" className="w-full" />;
}
