"use client";

import { motion, useReducedMotion } from "motion/react";

type StepIllustrationProps = {
  step: 1 | 2 | 3;
};

export function StepIllustration({ step }: StepIllustrationProps) {
  const reduce = useReducedMotion();

  if (step === 1) {
    return (
      <div className="relative mt-6 min-h-[180px] overflow-hidden rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-violet-50/80 via-white to-emerald-50/40 p-4">
        <motion.div
          className="absolute right-3 top-3 rounded-lg bg-white px-2 py-1 text-[10px] font-semibold text-violet-600 shadow-sm"
          animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Step 1
        </motion.div>
        <div className="space-y-2.5 pt-2">
          {[
            { label: "Paternal surname", value: "Gómez", w: "85%" },
            { label: "Maternal surname", value: "López", w: "70%" },
            { label: "Given name(s)", value: "Juan Carlos", w: "90%" },
            { label: "Birth date", value: "1990-05-24", w: "75%" },
          ].map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2 shadow-sm"
            >
              <p className="text-[10px] font-medium text-text-secondary">{field.label}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">{field.value}</span>
                <span className="h-1.5 rounded-full bg-emerald-200" style={{ width: field.w }} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 text-white shadow-lg">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="relative mt-6 min-h-[180px] overflow-hidden rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/40 p-4">
        <div className="flex h-full flex-col items-center justify-center">
          <div className="relative h-24 w-24">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-emerald-100"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-emerald-500 text-white shadow-xl">
              <span className="text-xs font-bold">SAT</span>
            </div>
          </div>
          <div className="mt-4 grid w-full grid-cols-4 gap-1.5">
            {["G", "O", "L", "J"].map((char, i) => (
              <motion.span
                key={char}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                className="flex aspect-square items-center justify-center rounded-lg bg-white font-mono text-sm font-bold text-emerald-800 shadow-md"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <p className="mt-3 text-center text-[10px] font-medium text-text-secondary">Computing homoclave + DV…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-6 min-h-[180px] overflow-hidden rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-100/30 p-4">
      <motion.div
        className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-900 to-emerald-800 p-4 text-center shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-[10px] font-medium text-emerald-200">Your RFC</p>
        <p className="mt-1 font-mono text-xl font-bold tracking-widest text-white md:text-2xl">GOLJ900524A1</p>
        <div className="mt-3 flex justify-center gap-2">
          <span className="rounded-full bg-emerald-500/30 px-3 py-1 text-[10px] font-semibold text-emerald-100">
            Ready to copy
          </span>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg"
        animate={reduce ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-emerald-400 to-emerald-600 text-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </span>
        <span className="text-xs font-semibold text-emerald-700">Copied!</span>
      </motion.div>
    </div>
  );
}
