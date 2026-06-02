"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { IconType } from "react-icons";
import { FiArrowRight, FiGift, FiHash, FiMonitor, FiShield, FiZap } from "react-icons/fi";
import { SECTION_IDS } from "@/lib/hashNav";
import { HashLink } from "./HashLink";
import { HERO_SECTION_PADDING, LayoutContainer } from "./LayoutContainer";
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
    <section className="relative -mt-[var(--header-offset)] overflow-hidden border-b border-border bg-section-pearl pt-[var(--header-offset)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(52, 211, 153, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 80% 10%, rgba(16, 185, 129, 0.12) 0%, transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <LayoutContainer
        className={`relative grid min-h-0 items-center gap-8 ${HERO_SECTION_PADDING} lg:min-h-[calc(100dvh-var(--header-offset)-1px)] lg:grid-cols-2 lg:gap-16`}
      >
        <motion.div
          className="order-1 min-w-0"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 shadow-sm backdrop-blur-sm sm:px-4 sm:text-xs">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            RFC Generator Mexico
          </p>

          <h1 className="mt-4 text-[1.75rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
            RFC Generator for Mexico{" "}
            <span className="text-emerald-600">(SAT Official Format)</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-5 sm:text-lg">
            Estimate your RFC in seconds with public SAT logic—clear breakdown of base, date, homoclave, and
            verification digit before official validation.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <PrimaryLink
              sectionId={SECTION_IDS.generator}
              className="w-full justify-center gap-2 px-6 py-3.5 text-base sm:w-auto sm:px-7"
            >
              <FiZap className="h-5 w-5 shrink-0" aria-hidden />
              Generate RFC Now
            </PrimaryLink>
            <HashLink
              sectionId={SECTION_IDS.generator}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:hover:bg-transparent"
            >
              Open free calculator
              <FiArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </HashLink>
          </div>

          <div className="mt-6 border-t border-border/80 pt-4 md:mt-8 md:pt-8">
            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-emerald-100/80 bg-white px-1.5 py-2.5 text-center shadow-sm md:flex-row md:items-start md:gap-3 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-left md:shadow-none lg:flex-col lg:items-start lg:gap-2"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 ring-1 ring-emerald-200/70 md:h-10 md:w-10 md:rounded-2xl lg:h-11 lg:w-11">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 w-full">
                      <p className="text-[13px] font-bold leading-tight text-text-primary md:text-xl lg:text-2xl xl:text-[1.65rem]">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium leading-tight text-text-secondary md:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative order-2 min-w-0"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-emerald-400/20 via-transparent to-emerald-600/10 blur-2xl sm:-inset-4 sm:rounded-[36px]" />

          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white p-1.5 shadow-[0_24px_48px_-12px_rgba(16,185,129,0.25)] sm:rounded-[32px] sm:p-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted sm:aspect-[5/4] sm:rounded-[26px]">
              <Image
                src={HERO_IMAGE}
                alt="Tax documents and calculator on a professional desk"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-emerald-900/5 to-transparent" />
            </div>

            <motion.div
              className="absolute left-2 top-2 max-w-[calc(100%-1rem)] rounded-xl border border-white/40 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md sm:left-4 sm:top-4 sm:rounded-2xl sm:px-4 sm:py-3"
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-emerald-600 sm:text-[10px]">
                Live estimate
              </p>
              <p className="font-mono text-sm font-bold text-text-primary sm:text-base">GOLJ900524A1</p>
            </motion.div>

            <motion.div
              className="absolute right-2 top-[28%] hidden max-w-[180px] rounded-xl border border-white/40 bg-white/95 p-2.5 shadow-xl backdrop-blur-md min-[400px]:block sm:right-4 sm:max-w-[200px] sm:rounded-2xl sm:p-3"
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 sm:h-9 sm:w-9 sm:rounded-xl">
                  <FiShield className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] text-text-secondary sm:text-[10px]">SAT public format</p>
                  <p className="truncate text-[11px] font-semibold text-text-primary sm:text-xs">
                    Base · Fecha · Homoclave
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-2 left-2 right-2 rounded-xl border border-emerald-100 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:px-4 sm:py-3.5">
              <p className="text-[10px] font-medium text-text-secondary sm:text-xs">Estimated structure</p>
              <p className="font-mono text-sm font-bold tracking-wide text-emerald-800 sm:text-lg">
                AAAA · YYMMDD · XXX · DV
              </p>
            </div>
          </div>
        </motion.div>
      </LayoutContainer>
    </section>
  );
}
