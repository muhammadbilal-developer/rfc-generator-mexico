"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedReveal } from "./AnimatedReveal";
import { LayoutContainer } from "./LayoutContainer";
import { StepIllustration } from "./illustrations/HowItWorksIllustrations";

const steps = [
  {
    step: 1 as const,
    title: "Enter Personal Details",
    text: "Add paternal surname, optional maternal surname, given name(s), and birth date.",
    accent: "from-violet-500 to-violet-600",
  },
  {
    step: 2 as const,
    title: "System Applies SAT Algorithm",
    text: "The app computes base letters, date segment, homoclave, and verification digit.",
    accent: "from-blue-500 to-emerald-500",
  },
  {
    step: 3 as const,
    title: "Get Your RFC Instantly",
    text: "Review your 13-character RFC estimate and copy it in one click.",
    accent: "from-emerald-400 to-emerald-600",
  },
];

export function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-section-pearl py-12 md:py-14 lg:py-[70px]">
      <LayoutContainer className="relative">
        <AnimatedReveal className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-emerald-200/80 bg-white/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
            How It Works
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-[1.75rem] lg:text-4xl">
            Three Simple Steps to Your RFC Estimate
          </h2>
          <p className="mx-auto mt-3 max-w-lg px-2 text-sm text-text-secondary sm:text-base">
            A guided flow from your details to a complete RFC breakdown you can copy instantly.
          </p>
        </AnimatedReveal>

        {/* Mobile: 1 col · Tablet: 2 col (step 3 full width) · Desktop: 3 col */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:grid-cols-3 lg:gap-6">
          {steps.map(({ step, title, text, accent }, idx) => (
            <motion.article
              key={title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className={`group overflow-hidden rounded-2xl border border-white/70 bg-white/85 shadow-[0_12px_40px_rgba(16,185,129,0.1)] backdrop-blur-md transition-shadow hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] ${
                idx === 2 ? "md:col-span-2 md:max-w-xl md:justify-self-center lg:col-span-1 lg:max-w-none" : ""
              }`}
            >
              <div className="border-b border-emerald-100/80 bg-gradient-to-r from-white to-emerald-50/50 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex items-start gap-3 sm:items-center">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br sm:h-10 sm:w-10 sm:rounded-xl ${accent} text-sm font-bold text-white shadow-lg`}
                  >
                    {step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-snug text-text-primary sm:text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary md:mt-1.5 lg:mt-3">{text}</p>
                  </div>
                </div>
              </div>
              <div className="px-3 pb-3 pt-2 sm:px-4 sm:pb-4 md:px-5 lg:px-4">
                <div className="md:mx-auto md:max-w-sm lg:max-w-none">
                  <StepIllustration step={step} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
}
