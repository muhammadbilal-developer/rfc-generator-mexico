"use client";

import { FiZap } from "react-icons/fi";
import { AnimatedReveal } from "./AnimatedReveal";
import { LayoutContainer, SECTION_PADDING_Y } from "./LayoutContainer";
import { RfcGeneratorCard } from "./RfcGeneratorCard";

export function RfcGenerator() {
  return (
    <section id="generator" className={`relative overflow-hidden ${SECTION_PADDING_Y} bg-section-mint`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 0%, rgba(16, 185, 129, 0.12) 0%, transparent 42%),
            radial-gradient(circle at 90% 100%, rgba(52, 211, 153, 0.1) 0%, transparent 40%)`,
        }}
      />
      <LayoutContainer className="relative w-full">
        <AnimatedReveal className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-white/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
            <FiZap className="h-3.5 w-3.5" aria-hidden />
            RFC Generator · Free
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.5rem]">
            RFC Calculator Tool
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
            Enter your surnames, given names, and birth date. Get an instant SAT-format estimate with share, PDF, and
            WhatsApp options.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08} className="mt-8 md:mt-10">
          <div className="mx-auto w-full max-w-5xl md:px-2 lg:px-0">
            <RfcGeneratorCard />
          </div>
        </AnimatedReveal>
      </LayoutContainer>
    </section>
  );
}
