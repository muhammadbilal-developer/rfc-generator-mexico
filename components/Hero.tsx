"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiGift,
  FiHash,
  FiMonitor,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { SECTION_IDS } from "@/lib/hashNav";
import { HashLink } from "./HashLink";
import {
  HeroAlgorithmNodes,
  HeroDocumentStack,
  HeroGrowthBadge,
  HeroPrivacyOrb,
} from "./illustrations/HeroDecorations";
import { LayoutContainer } from "./LayoutContainer";
import { PrimaryLink } from "./PrimaryButton";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=90";

const heroStats: { value: string; label: string; icon: IconType }[] = [
  { value: "13 chars", label: "Format", icon: FiHash },
  { value: "In-browser", label: "Processing", icon: FiMonitor },
  { value: "Free", label: "Cost", icon: FiGift },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative -mt-[var(--header-offset)] flex min-h-[100dvh] flex-col overflow-hidden border-b border-border/80 bg-gradient-to-b from-white via-emerald-50/50 to-page pt-[var(--header-offset)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 55% at 10% 25%, rgba(52, 211, 153, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 65% 50% at 92% 20%, rgba(16, 185, 129, 0.16) 0%, transparent 48%),
            radial-gradient(ellipse 55% 45% at 50% 95%, rgba(167, 243, 208, 0.25) 0%, transparent 42%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <LayoutContainer className="relative flex min-h-[calc(100dvh-var(--header-offset))] flex-1 flex-col justify-center py-6 sm:py-8">
        <div className="grid min-h-0 flex-1 items-center gap-8 lg:grid-cols-[1fr_1.08fr] lg:gap-10 xl:gap-14">
          <motion.div
            className="flex min-w-0 flex-col justify-center gap-5 lg:gap-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/90 bg-white/95 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-[0_2px_12px_rgba(16,185,129,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              RFC Generator Mexico
            </p>

            <div>
              <h1 className="text-[1.85rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]">
                RFC Generator for Mexico{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  (SAT Official Format)
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                Estimate your RFC in seconds with public SAT logic—clear breakdown of base, date, homoclave, and
                verification digit before official validation.
              </p>
            </div>

            <HeroGrowthBadge />

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryLink
                sectionId={SECTION_IDS.generator}
                className="w-full justify-center gap-2 px-7 py-3.5 text-base shadow-emerald-500/30 sm:w-auto"
              >
                <FiZap className="h-5 w-5 shrink-0" aria-hidden />
                Generate RFC Now
              </PrimaryLink>
              <HashLink
                sectionId={SECTION_IDS.generator}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-emerald-700 transition hover:gap-2.5 hover:text-emerald-800 sm:justify-start"
              >
                View generator details
                <FiArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </HashLink>
            </div>

            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border/70 bg-white/80 p-3 shadow-sm backdrop-blur-sm sm:gap-3 sm:p-4 lg:grid-cols-3">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1.5 rounded-xl bg-emerald-50/50 px-1 py-2 text-center sm:flex-row sm:items-center sm:gap-2 sm:px-2 sm:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:text-left"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-white text-emerald-600 ring-1 ring-emerald-200/60 sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-text-primary sm:text-sm lg:text-base">{stat.value}</p>
                      <p className="text-[10px] font-medium text-text-secondary">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[280px] items-stretch sm:min-h-[320px] lg:min-h-[420px] lg:max-h-[min(540px,68vh)]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroDocumentStack />
            <HeroPrivacyOrb />
            <HeroAlgorithmNodes />

            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-emerald-400/30 via-emerald-300/10 to-transparent blur-2xl lg:-inset-5" />

            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/90 p-1.5 shadow-[0_32px_72px_-20px_rgba(16,185,129,0.35)] ring-1 ring-emerald-100/60 backdrop-blur-sm sm:rounded-[32px] sm:p-2">
              <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-[22px] bg-muted sm:min-h-[300px] sm:rounded-[26px] lg:min-h-[400px] lg:max-h-[min(540px,68vh)]">
                <Image
                  src={HERO_IMAGE}
                  alt="Tax documents and calculator on a professional desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-900/15 to-emerald-900/5" />
              </div>

              <motion.div
                className="absolute left-3 top-3 rounded-2xl border border-white/50 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:left-5 sm:top-5"
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">Live estimate</p>
                <p className="font-mono text-base font-bold text-text-primary sm:text-lg">GOLJ900524A1</p>
              </motion.div>

              <motion.div
                className="absolute right-3 top-[28%] max-w-[min(220px,46%)] rounded-2xl border border-white/50 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:right-5 sm:p-3.5"
                animate={reduce ? undefined : { y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 sm:h-10 sm:w-10">
                    <FiShield className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium text-text-secondary">SAT public format</p>
                    <p className="text-xs font-semibold text-text-primary">Base · Fecha · Homoclave</p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-emerald-100/90 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:py-3.5">
                <p className="text-xs font-medium text-text-secondary">Estimated structure</p>
                <p className="font-mono text-base font-bold tracking-wide text-emerald-800 sm:text-lg">
                  AAAA · YYMMDD · XXX · DV
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </LayoutContainer>
    </section>
  );
}
