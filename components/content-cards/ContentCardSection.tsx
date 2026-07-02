"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AnimatedReveal } from "../AnimatedReveal";
import { LayoutContainer } from "../LayoutContainer";
import { headingCase } from "@/lib/headingCase";
import { getSectionBackground } from "@/lib/sectionBackgrounds";

type ContentCardSectionProps = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  sectionIndex: number;
  intro?: ReactNode;
  children: ReactNode;
};

const introClass =
  "mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base [&_a]:font-semibold [&_a]:text-emerald-700 [&_a]:underline-offset-2 hover:[&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-text-primary [&_ul]:space-y-2";

const SECTION_COLOR_VAR: Record<string, string> = {
  "bg-section-fog": "var(--color-section-fog)",
  "bg-section-pearl": "var(--color-section-pearl)",
  "bg-section-mint": "var(--color-section-mint)",
};

function AnimatedCardCell({
  children,
  index,
  className = "min-h-0 h-full",
}: {
  children: ReactNode;
  index: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export function ContentCardSection({
  id,
  title,
  image,
  imageAlt,
  sectionIndex,
  intro,
  children,
}: ContentCardSectionProps) {
  const bgClass = getSectionBackground(sectionIndex);
  const sectionColor = SECTION_COLOR_VAR[bgClass] ?? "var(--color-section-mint)";

  return (
    <section id={id} className={`relative overflow-hidden py-10 md:py-12 lg:py-14 ${bgClass}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.2] sm:opacity-[0.26] lg:opacity-[0.3]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${sectionColor} 0%, color-mix(in srgb, ${sectionColor} 72%, transparent) 50%, color-mix(in srgb, ${sectionColor} 58%, transparent) 100%)`,
        }}
      />

      <LayoutContainer className="relative z-10">
        <AnimatedReveal>
          <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
            {headingCase(title)}
          </h2>
          {intro ? <div className={introClass}>{intro}</div> : null}
          <div
            className={`${intro ? "mt-6" : "mt-5"} [&_h3]:!mt-0 [&_li]:ml-5 [&_li]:list-disc [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_strong]:font-semibold [&_strong]:text-text-primary [&_ul]:space-y-2`}
          >
            {children}
          </div>
        </AnimatedReveal>
      </LayoutContainer>

      <span className="sr-only">{imageAlt}</span>
    </section>
  );
}

export function ContentCardsGrid({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);

  if (items.length === 3) {
    return (
      <div className="content-cards grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] sm:items-stretch sm:gap-5">
        <AnimatedCardCell index={0} className="min-h-0 h-full sm:row-span-2">
          {items[0]}
        </AnimatedCardCell>
        <AnimatedCardCell index={1}>{items[1]}</AnimatedCardCell>
        <AnimatedCardCell index={2} className="min-h-0 h-full sm:col-start-2 sm:row-start-2">
          {items[2]}
        </AnimatedCardCell>
      </div>
    );
  }

  return (
    <div className="content-cards grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch sm:gap-5">
      {items.map((child, index) => (
        <AnimatedCardCell key={index} index={index}>
          {child}
        </AnimatedCardCell>
      ))}
    </div>
  );
}
