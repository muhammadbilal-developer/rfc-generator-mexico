"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { AnimatedReveal } from "./AnimatedReveal";
import { SectionShell } from "./LayoutContainer";

export const faqItems = [
  { q: "What is RFC?", a: "RFC is a tax identifier used in Mexico for individuals and legal entities." },
  { q: "Is this RFC valid?", a: "This is an estimate from public SAT logic. You should validate final records in SAT systems." },
  { q: "Is this an official SAT tool?", a: "No. This site is independent and not affiliated with SAT." },
  { q: "Can foreigners use it?", a: "Foreign residents may use RFC processes depending on tax status, but official assignment is by SAT." },
  { q: "Is my data stored?", a: "Inputs are processed client-side for RFC generation and are not persisted by default." },
  { q: "Is this free?", a: "Yes. The generator is free to use for estimate and learning purposes." },
];

const FAQ_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85";

function FaqIllustration() {
  return (
    <>
      <Image
        src={FAQ_IMAGE}
        alt="Team discussing tax and compliance questions"
        fill
        sizes="(max-width: 768px) 0px, 50vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-emerald-900/10 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <FiHelpCircle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-text-primary">Need clarity?</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">
              Browse common questions or contact us for technical, legal, or business support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Faq() {
  const [active, setActive] = useState<number>(0);
  const reduce = useReducedMotion();

  return (
    <SectionShell id="faq" className="bg-section-sky">
      <AnimatedReveal className="text-center lg:text-left">
        <p className="mx-auto inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-800 lg:mx-0">
          FAQ
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:mx-0">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-text-secondary lg:mx-0">
          Fast answers for validity, privacy, and official SAT expectations.
        </p>
      </AnimatedReveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="relative hidden min-h-[420px] overflow-hidden rounded-[28px] border border-border lg:block lg:min-h-full lg:h-auto">
          <FaqIllustration />
        </div>

        <div className="flex flex-col justify-center gap-3 lg:h-full">
          {faqItems.map((item, index) => {
            const open = active === index;
            return (
              <motion.article
                key={item.q}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl border border-border bg-muted/40 transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-text-primary"
                  aria-expanded={open}
                  onClick={() => setActive(open ? -1 : index)}
                >
                  {item.q}
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-border px-5 pb-4 pt-2 text-sm leading-relaxed text-text-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
