"use client";

import { motion, useReducedMotion } from "motion/react";
import { FiLock, FiTrendingUp } from "react-icons/fi";

/** Document stack illustration */
export function HeroDocumentStack() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="absolute -right-2 bottom-[12%] z-20 hidden lg:block xl:-right-6"
      animate={reduce ? undefined : { y: [0, 6, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <div className="relative h-[88px] w-[72px]">
        <div className="absolute left-0 top-0 h-[76px] w-[60px] rotate-[-6deg] rounded-lg border border-slate-200/80 bg-white shadow-md" />
        <div className="absolute left-2 top-2 h-[76px] w-[60px] rotate-[3deg] rounded-lg border border-emerald-100 bg-emerald-50/90 shadow-lg">
          <div className="space-y-1.5 p-2.5">
            <div className="h-1 w-8 rounded-full bg-emerald-300/80" />
            <div className="h-1 w-10 rounded-full bg-slate-200" />
            <div className="h-1 w-6 rounded-full bg-slate-200" />
            <div className="mt-2 h-4 w-full rounded bg-emerald-100" />
          </div>
        </div>
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow">
          ✓
        </span>
      </div>
    </motion.div>
  );
}

/** Privacy / speed orb */
export function HeroPrivacyOrb() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="absolute right-[8%] top-[6%] z-20 hidden rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-sm lg:flex lg:items-center lg:gap-2"
      animate={reduce ? undefined : { y: [0, -5, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
        <FiLock className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-[10px] font-semibold text-text-primary">Private</p>
        <p className="text-[9px] text-text-secondary">Browser-only</p>
      </div>
    </motion.div>
  );
}

/** Algorithm nodes illustration */
export function HeroAlgorithmNodes() {
  const reduce = useReducedMotion();
  const nodes = ["AAAA", "YYMMDD", "XXX"];
  return (
    <motion.div
      className="absolute bottom-[22%] -left-6 z-10 hidden flex-col gap-2 lg:flex xl:-left-10"
      animate={reduce ? undefined : { x: [0, 4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {nodes.map((n, i) => (
        <span
          key={n}
          className="rounded-lg border border-emerald-200/80 bg-white/95 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-800 shadow-sm"
          style={{ marginLeft: i * 8 }}
        >
          {n}
        </span>
      ))}
    </motion.div>
  );
}

export function HeroGrowthBadge() {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/80 px-3 py-2">
      <FiTrendingUp className="h-4 w-4 text-emerald-600" aria-hidden />
      <p className="text-xs font-medium text-emerald-900">
        <span className="font-semibold">Instant</span> SAT-format estimate
      </p>
    </div>
  );
}
