"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
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
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse 55% 45% at 12% 30%, rgba(52, 211, 153, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 88% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Hero image — right side only, fades left & bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, black 35%, rgba(0,0,0,0.55) 58%, transparent 82%), linear-gradient(to top, transparent 0%, black 18%, black 72%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, black 35%, rgba(0,0,0,0.55) 58%, transparent 82%), linear-gradient(to top, transparent 0%, black 18%, black 72%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          sizes="62vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-page via-page/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-page via-transparent to-white/20" />
      </div>

      <LayoutContainer className="relative py-8 sm:py-10 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 xl:gap-14">
          <motion.div
            className="relative z-10 flex min-w-0 flex-col gap-4 lg:max-w-xl lg:gap-5"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h1 className="text-[1.75rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.08]">
                Calcular RFC: Herramienta Rápida Y Sencilla Para Generar RFC.
              </h1>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-text-secondary sm:mt-4 sm:text-lg">
                Usa nuestra calculadora para <strong className="font-semibold text-text-primary">calcular RFC</strong>{" "}
                con solo tu nombre y fecha de nacimiento. Te proporciona cálculos rápidos y precisos al instante.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 min-w-0 lg:max-w-xl lg:justify-self-end xl:max-w-[28rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mobile / tablet: subtle image behind calculator */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-2 -top-2 bottom-8 overflow-hidden rounded-[28px] lg:hidden"
            >
              <Image
                src={HERO_IMAGE}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50" />
            </div>

            <RfcGeneratorCard compact className="relative" />
          </motion.div>
        </div>
      </LayoutContainer>
    </section>
  );
}
