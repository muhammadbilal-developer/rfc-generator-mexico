"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { headingCase } from "@/lib/headingCase";
import { HeroBackground } from "./HeroBackground";
import { HeroInfoPanel } from "./HeroInfoPanel";
import { HeroScrollCta } from "./HeroScrollCta";
import { LayoutContainer } from "./LayoutContainer";

type ToolPageHeroProps = {
  title: string;
  lead: ReactNode;
  heroImage: string;
  heroImageAlt: string;
  heroImageTitle: string;
  backgroundVariant?: "default" | "subtle" | "vivid";
  sectionId?: string;
  ctaSectionId?: string;
  ctaLabel?: string;
  panelIntro?: ReactNode;
  /** Exact bullet copy from content — no paraphrasing. */
  bullets?: string[];
  aside?: ReactNode;
  tall?: boolean;
};

export function ToolPageHero({
  title,
  lead,
  heroImage,
  heroImageAlt,
  heroImageTitle,
  backgroundVariant = "subtle",
  sectionId = "hero",
  ctaSectionId = "generator",
  ctaLabel,
  panelIntro,
  bullets,
  aside,
  tall = false,
}: ToolPageHeroProps) {
  const reduce = useReducedMotion();
  const hasInfoPanel = Boolean(panelIntro || (bullets && bullets.length > 0));
  const hasRightColumn = Boolean(aside || hasInfoPanel);

  return (
    <section
      id={sectionId}
      className={`relative -mt-[var(--header-offset)] overflow-hidden border-b border-border/80 bg-page pt-[var(--header-offset)] ${
        tall ? "min-h-[26rem] sm:min-h-[30rem] lg:min-h-[34rem]" : "min-h-[22rem] sm:min-h-[26rem] lg:min-h-[30rem]"
      }`}
    >
      <HeroBackground
        src={heroImage}
        alt={heroImageAlt}
        title={heroImageTitle}
        priority
        variant={backgroundVariant}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-8 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
      />

      <LayoutContainer className="relative z-10 flex min-h-[inherit] flex-col justify-center py-10 sm:py-12 lg:py-16">
        <div
          className={
            hasRightColumn
              ? aside
                ? "grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,38rem)] xl:gap-14"
                : "grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14"
              : "mx-auto max-w-3xl"
          }
        >
          <motion.div
            className={`flex min-w-0 flex-col gap-5 lg:gap-6 ${hasRightColumn ? "lg:max-w-xl" : ""}`}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h1 className="text-[1.75rem] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-4xl lg:text-[2.65rem] xl:text-5xl xl:leading-[1.08]">
                {headingCase(title)}
              </h1>
              <div className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg [&_strong]:font-semibold [&_strong]:text-text-primary">
                {lead}
              </div>
            </div>

            {ctaLabel ? (
              <HeroScrollCta sectionId={ctaSectionId} className="shadow-emerald-600/20">
                {ctaLabel}
              </HeroScrollCta>
            ) : null}
          </motion.div>

          {hasRightColumn ? (
            <motion.div
              className="min-w-0 w-full lg:max-w-none"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {aside ? (
                aside
              ) : hasInfoPanel ? (
                <HeroInfoPanel intro={panelIntro} bullets={bullets ?? []} />
              ) : null}
            </motion.div>
          ) : null}
        </div>
      </LayoutContainer>
    </section>
  );
}
