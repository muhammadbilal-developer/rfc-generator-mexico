"use client";

import { motion, useReducedMotion } from "motion/react";
import { SECTION_IDS } from "@/lib/hashNav";
import { headingCase } from "@/lib/headingCase";
import { HeroBackground } from "./HeroBackground";
import { HeroScrollCta } from "./HeroScrollCta";
import { LayoutContainer } from "./LayoutContainer";
import { RfcGeneratorCard } from "./RfcGeneratorCard";

const HERO_IMAGE = "/images/home/hero.webp";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="generator"
      className="relative -mt-[var(--header-offset)] overflow-hidden border-b border-border/80 bg-page pt-[var(--header-offset)]"
    >
      <HeroBackground
        src={HERO_IMAGE}
        alt="Ilustración de calculadora RFC y contribuyente en México"
        title="Hero CalcularRFC — Calculadora RFC México"
        priority
      />

      <LayoutContainer className="relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,38rem)] xl:gap-14">
          <motion.div
            className="flex min-w-0 flex-col gap-4 lg:max-w-xl lg:gap-5"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h1 className="text-[1.75rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.08]">
                {headingCase("Calcular RFC: Herramienta Rápida Y Sencilla Para Generar RFC.")}
              </h1>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-text-secondary sm:mt-4 sm:text-lg">
                Usa nuestra calculadora para <strong className="font-semibold text-text-primary">calcular RFC</strong>{" "}
                con solo tu nombre y fecha de nacimiento. Te proporciona cálculos rápidos y precisos al instante.
              </p>
            </div>

            <HeroScrollCta sectionId={SECTION_IDS.queEsCalculadora}>Saber más</HeroScrollCta>
          </motion.div>

          <motion.div
            className="min-w-0 w-full lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <RfcGeneratorCard compact className="w-full" />
          </motion.div>
        </div>
      </LayoutContainer>
    </section>
  );
}
