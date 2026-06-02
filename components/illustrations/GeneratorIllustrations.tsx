"use client";

import { motion, useReducedMotion } from "motion/react";

const RFC_SEGMENTS = [
  { label: "Base", color: "bg-emerald-100 text-emerald-800 ring-emerald-200/80" },
  { label: "Fecha", color: "bg-sky-100 text-sky-800 ring-sky-200/80" },
  { label: "Homo", color: "bg-violet-100 text-violet-800 ring-violet-200/80" },
  { label: "DV", color: "bg-amber-100 text-amber-800 ring-amber-200/80" },
] as const;

function LetterTiles({ letters, accent = "emerald" }: { letters: string[]; accent?: "emerald" | "sky" }) {
  const tileClass =
    accent === "emerald"
      ? "border-emerald-200/70 bg-gradient-to-b from-white to-emerald-50 text-emerald-900 shadow-[0_2px_8px_rgba(16,185,129,0.12)]"
      : "border-sky-200/70 bg-gradient-to-b from-white to-sky-50 text-sky-900 shadow-[0_2px_8px_rgba(14,165,233,0.12)]";

  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {letters.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className={`flex h-10 w-9 items-center justify-center rounded-lg border font-mono text-base font-bold sm:h-11 sm:w-10 sm:text-lg ${tileClass}`}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}

function RfcResultFooter({ compact = false }: { compact?: boolean }) {
  if (!compact) {
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-1 font-mono text-lg font-bold tracking-wide xl:text-xl">
          <span className="rounded-md bg-emerald-100/90 px-1.5 py-0.5 text-emerald-800">GOLJ</span>
          <span className="rounded-md bg-sky-100/90 px-1.5 py-0.5 text-sky-800">900524</span>
          <span className="rounded-md bg-violet-100/90 px-1.5 py-0.5 text-violet-800">XXX</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          {RFC_SEGMENTS.map(({ label, color }) => (
            <span
              key={label}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${color}`}
            >
              {label}
            </span>
          ))}
          <span className="ml-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-md shadow-emerald-500/25">
            13 chars
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[10px] font-medium text-text-secondary">Full estimate</p>
          <p className="font-mono text-base font-bold tracking-wide text-text-primary">GOLJ900524XXX</p>
        </div>
        <span className="shrink-0 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 px-2.5 py-1 text-[10px] font-bold text-white">
          13
        </span>
      </div>
      <div className="mt-2 flex gap-1">
        {RFC_SEGMENTS.map(({ label }) => (
          <span
            key={label}
            className="flex-1 rounded-md bg-emerald-100/80 py-1 text-center text-[9px] font-semibold text-emerald-800"
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
}

/** RFC breakdown — compact on mobile/tablet, expanded flow on desktop */
export function RfcBreakdownIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-4 flex-1 lg:mt-5">
      {/* Mobile & tablet */}
      <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 p-4 lg:hidden">
        <svg viewBox="0 0 320 200" className="pointer-events-none absolute inset-0 h-full w-full opacity-90" aria-hidden>
          <defs>
            <linearGradient id="rfcLineGradMobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path
            d="M20 150 Q80 60 160 90 T300 70"
            fill="none"
            stroke="url(#rfcLineGradMobile)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>

        <motion.div
          className="absolute left-4 top-4 rounded-xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-lg"
          animate={reduce ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">Base</p>
          <p className="font-mono text-lg font-bold text-text-primary">G O L J</p>
        </motion.div>

        <motion.div
          className="absolute right-4 top-1/3 rounded-xl border border-emerald-100 bg-white/95 px-3 py-2 shadow-md"
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <p className="text-[10px] text-text-secondary">Date</p>
          <p className="font-mono text-sm font-bold text-emerald-800">900524</p>
        </motion.div>

        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-emerald-200/60 bg-white/95 px-4 py-3 shadow-xl">
          <RfcResultFooter compact />
        </div>
      </div>

      {/* Desktop (lg+) — step flow with letter tiles */}
      <div className="relative hidden min-h-[320px] flex-col overflow-hidden rounded-2xl border border-emerald-200/50 bg-gradient-to-b from-slate-50/80 via-white to-emerald-50/40 p-5 lg:flex xl:min-h-[360px] xl:p-6">
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-sky-400/10 blur-2xl"
          aria-hidden
        />

        <div className="relative flex flex-1 flex-col gap-0">
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2">
            <motion.div
              className="rounded-2xl border border-emerald-100/90 bg-white/95 p-4 shadow-[0_4px_20px_rgba(16,185,129,0.08)] ring-1 ring-emerald-50"
              animate={reduce ? undefined : { y: [0, -2, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-[11px] font-bold text-white">
                  1
                </span>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Base</p>
              </div>
              <div className="mt-3">
                <LetterTiles letters={["G", "O", "L", "J"]} accent="emerald" />
              </div>
              <p className="mt-3 text-center text-[11px] leading-snug text-text-secondary">
                4 letters from surnames & name
              </p>
            </motion.div>

            <div className="flex flex-col items-center justify-center px-0.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-bold text-white shadow-lg shadow-emerald-500/35 ring-4 ring-white">
                +
              </span>
            </div>

            <motion.div
              className="rounded-2xl border border-sky-100/90 bg-white/95 p-4 shadow-[0_4px_20px_rgba(14,165,233,0.08)] ring-1 ring-sky-50"
              animate={reduce ? undefined : { y: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500 text-[11px] font-bold text-white">
                  2
                </span>
                <p className="text-[11px] font-bold uppercase tracking-wider text-sky-700">Birth date</p>
              </div>
              <div className="mt-3">
                <LetterTiles letters={["9", "0", "0", "5", "2", "4"]} accent="sky" />
              </div>
              <p className="mt-3 text-center text-[11px] leading-snug text-text-secondary">YYMMDD segment</p>
            </motion.div>
          </div>

          <div className="relative flex justify-center py-3">
            <div className="flex flex-col items-center">
              <div className="h-5 w-px bg-gradient-to-b from-transparent via-emerald-400 to-emerald-500" />
              <span className="my-1 flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-white px-3 py-1 text-[10px] font-semibold text-emerald-800 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                SAT public algorithm
              </span>
              <div className="h-5 w-px bg-gradient-to-b from-emerald-500 to-emerald-600" />
            </div>
          </div>

          <motion.div
            className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-[0_12px_40px_rgba(16,185,129,0.12)] ring-1 ring-emerald-100/50"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-4 py-2.5">
              <p className="text-center text-xs font-semibold tracking-wide text-white">
                Step 3 · Complete RFC estimate
              </p>
            </div>
            <div className="bg-gradient-to-b from-white to-emerald-50/30 px-4 py-5 xl:px-5 xl:py-6">
              <RfcResultFooter />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/** Who needs RFC — pipeline funnel */
export function WhoNeedsIllustration() {
  const stages = [
    { label: "Employees", pct: 78, color: "#f97316" },
    { label: "Freelancers", pct: 62, color: "#8b5cf6" },
    { label: "Business", pct: 45, color: "#3b82f6" },
    { label: "Residents", pct: 55, color: "#10b981" },
  ];

  return (
    <div className="relative mt-5 min-h-[160px] flex-1 rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-white via-emerald-50/40 to-white p-4">
      <div className="flex h-full gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-emerald-400 to-transparent" />
          <div className="rounded-lg bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-800">RFC</div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          {stages.map((s) => (
            <div key={s.label}>
              <div className="mb-1 flex justify-between text-[11px] font-medium text-text-secondary">
                <span>{s.label}</span>
                <span>{s.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: s.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** SAT algorithm flow */
export function AlgorithmFlowIllustration() {
  const nodes = [
    { label: "Input", sub: "Names + DOB", grad: "from-violet-400 to-violet-600" },
    { label: "Process", sub: "SAT rules", grad: "from-amber-400 to-orange-500" },
    { label: "Output", sub: "13 chars", grad: "from-emerald-400 to-emerald-600" },
  ];

  return (
    <div className="relative mt-5 min-h-[130px] flex-1 overflow-hidden rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-slate-50 to-emerald-50/50 p-4">
      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
        <path d="M60 65 Q160 25 260 65" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" />
      </svg>
      <div className="relative flex items-center justify-between gap-2 pt-2">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex flex-1 flex-col items-center">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${node.grad} text-white shadow-lg`}
            >
              <span className="text-lg font-bold">{i + 1}</span>
            </div>
            <p className="mt-2 text-xs font-semibold text-text-primary">{node.label}</p>
            <p className="text-[10px] text-text-secondary">{node.sub}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {["AAAA", "YYMMDD", "XXX"].map((chip) => (
          <span key={chip} className="rounded-md bg-white px-2 py-1 font-mono text-[10px] font-semibold text-emerald-800 shadow-sm">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Official verification trust */
export function VerificationIllustration() {
  return (
    <div className="relative mt-5 min-h-[130px] flex-1 overflow-hidden rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-emerald-50/60 to-white p-4">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl shadow-emerald-500/35">
            <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-white">
            !
          </span>
        </div>
        <p className="mt-3 text-center text-xs font-medium text-text-secondary">Verify on SAT portal</p>
        <div className="mt-3 flex -space-x-2">
          {["A", "B", "C", "D"].map((letter, i) => (
            <span
              key={letter}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow-md"
              style={{
                background: ["#6366f1", "#f97316", "#22c55e", "#3b82f6"][i],
                zIndex: 4 - i,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
