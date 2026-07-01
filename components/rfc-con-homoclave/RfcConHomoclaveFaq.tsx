"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ContentImage } from "../ContentImage";
import { rfcConHomoclaveFaqItems } from "@/lib/rfcConHomoclaveFaq";
import { headingCase } from "@/lib/headingCase";
import { AnimatedReveal } from "../AnimatedReveal";
import { SectionShell } from "../LayoutContainer";

const FAQ_IMAGE = "/images/rfc-con-homoclave/faq.webp";

export function RfcConHomoclaveFaq() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <SectionShell id="faq" className="bg-section-sky">
      <AnimatedReveal className="text-center lg:text-left">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:mx-0">
          {headingCase("Preguntas Frecuentes Sobre RFC Con Homoclave")}
        </h2>
      </AnimatedReveal>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
        <div className="hidden lg:sticky lg:top-[calc(var(--header-offset)+1.25rem)] lg:block lg:self-start">
          <ContentImage
            src={FAQ_IMAGE}
            alt="Preguntas frecuentes sobre RFC con homoclave"
            title="Ilustración de preguntas frecuentes RFC con homoclave"
            sizes="(max-width: 768px) 0px, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center gap-3">
          {rfcConHomoclaveFaqItems.map((item, index) => {
            const open = active === index;
            return (
              <motion.article
                key={item.q}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border border-border bg-muted/40 transition-shadow hover:shadow-md"
              >
                <h3 className="m-0 text-base font-semibold text-text-primary">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    aria-expanded={open}
                    onClick={() => setActive(open ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <FiChevronDown
                      className={`h-5 w-5 shrink-0 text-emerald-600 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={index === 0}>
                  {open && (
                    <motion.div
                      initial={index === 0 ? false : { height: 0, opacity: 0 }}
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
