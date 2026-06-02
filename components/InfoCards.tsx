"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  AlgorithmFlowIllustration,
  RfcBreakdownIllustration,
  VerificationIllustration,
  WhoNeedsIllustration,
} from "./illustrations/GeneratorIllustrations";
import { AnimatedReveal } from "./AnimatedReveal";
import { LayoutContainer } from "./LayoutContainer";

function BentoCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/85 p-5 shadow-[0_12px_40px_rgba(16,185,129,0.08)] backdrop-blur-md sm:rounded-[24px] sm:p-6 md:p-5 lg:rounded-[28px] lg:p-7 ${className}`}
    >
      {children}
    </article>
  );
}

export function InfoCards() {
  const reduce = useReducedMotion();

  return (
    <section
      id="generator-info"
      className="relative overflow-hidden border-y border-emerald-100/50 bg-section-fog py-12 md:py-14 lg:py-[70px]"
    >
      <LayoutContainer className="relative">
        <AnimatedReveal className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-emerald-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
            Generator Information
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-2xl font-bold tracking-tight text-text-primary sm:mt-5 sm:text-3xl md:text-[1.75rem] lg:mt-5 lg:text-4xl xl:text-[2.5rem]">
            Everything You Need to Understand RFC in Mexico
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-1 text-sm text-text-secondary sm:mt-4 sm:text-base">
            Clear guidance on what RFC is, who needs it, how our generator works, and what to verify with SAT.
          </p>
        </AnimatedReveal>

        {/* Mobile: 1 col · Tablet (md–lg): 2 col · Desktop (lg+): bento */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-5 lg:mt-10 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
          <motion.div
            className="md:min-h-0 lg:col-span-4 lg:row-span-2"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BentoCard className="h-full">
              <h3 className="text-base font-semibold text-text-primary sm:text-lg">What is RFC?</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                RFC is Mexico&apos;s federal taxpayer registry code used to identify individuals in tax, invoicing, and
                compliance workflows.
              </p>
              <div className="mt-3 flex min-h-0 flex-1 flex-col md:max-h-[220px] md:overflow-hidden lg:max-h-none lg:overflow-visible">
                <RfcBreakdownIllustration />
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            className="lg:col-span-8 lg:row-span-1"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <BentoCard className="h-full">
              <h3 className="text-base font-semibold text-text-primary sm:text-lg">Who needs an RFC?</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary lg:max-w-2xl">
                Employees, freelancers, business owners, and residents handling formal invoicing or tax filings
                typically need an RFC for official processes.
              </p>
              <div className="mt-3 md:max-h-[180px] md:overflow-hidden lg:max-h-none lg:overflow-visible">
                <WhoNeedsIllustration />
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:row-span-1"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <BentoCard className="h-full">
              <h3 className="text-base font-semibold text-text-primary sm:text-lg">Public SAT algorithm</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                We apply documented rules for base letters, birth date, homoclave, and verification digit.
              </p>
              <div className="mt-3 md:max-h-[160px] md:overflow-hidden lg:max-h-none lg:overflow-visible">
                <AlgorithmFlowIllustration />
              </div>
            </BentoCard>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:row-span-1"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <BentoCard className="h-full">
              <h3 className="text-base font-semibold text-text-primary sm:text-lg">Official SAT verification</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                This is not an official SAT tool. Always verify your final RFC through SAT channels before legal use.
              </p>
              <div className="mt-3 md:max-h-[160px] md:overflow-hidden lg:max-h-none lg:overflow-visible">
                <VerificationIllustration />
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </LayoutContainer>
    </section>
  );
}
