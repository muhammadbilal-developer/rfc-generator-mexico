"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FiZap } from "react-icons/fi";
import { LayoutContainer } from "../LayoutContainer";
import { PrimaryLink } from "../PrimaryButton";

const HERO_IMAGE = "/images/consultar-rfc/hero.webp";

export function ConsultarRfcHero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative -mt-[var(--header-offset)] flex min-h-[100dvh] flex-col overflow-hidden border-b border-border/80 bg-gradient-to-b from-white via-emerald-50/50 to-page pt-[var(--header-offset)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 55% at 10% 25%, rgba(52, 211, 153, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 65% 50% at 92% 20%, rgba(16, 185, 129, 0.16) 0%, transparent 48%),
            radial-gradient(ellipse 55% 45% at 50% 95%, rgba(167, 243, 208, 0.25) 0%, transparent 42%)`,
        }}
      />

      <LayoutContainer className="relative flex min-h-[calc(100dvh-var(--header-offset))] flex-1 flex-col justify-center py-6 sm:py-8">
        <div className="grid min-h-0 flex-1 items-stretch gap-8 lg:grid-cols-[1fr_1.08fr] lg:items-center lg:gap-10 xl:gap-14">
          <motion.div
            className="flex min-w-0 flex-col gap-5 lg:gap-6"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h1 className="text-[1.85rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.08]">
                Consultar RFC: Verifique Y Valide Su RFC En Línea
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                Genera tu RFC en segundos; no necesitas cita con el SAT. Usa nuestra calculadora; realiza un RFC basado
                en CURP. Comprueba y valida tu código fiscal al instante.
              </p>
            </div>

            <PrimaryLink
              sectionId="generator"
              className="w-full justify-center gap-2 px-7 py-3.5 text-base shadow-emerald-500/30 sm:w-auto"
            >
              <FiZap className="h-5 w-5 shrink-0" aria-hidden />
              Rellena tus datos personales para calcular tu RFC. Calculadora aquí.
            </PrimaryLink>

            <div className="space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base">
              <p>
                Nuestro gratuito <strong className="font-semibold text-text-primary">consultar RFC.</strong> Esta
                herramienta está diseñada para ayudar a contribuyentes, empleados, trabajadores independientes y dueños de
                negocios mexicanos. Aquí te mostramos lo que puedes hacer con esta calculadora en menos de 30 segundos.
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Generación instantánea de RFC al introducir sus datos.</li>
                <li>Obtienes un búsqueda basada en CURP.</li>
                <li>Verifique el formato del RFC existente.</li>
                <li>Es privado y no se almacena ningún dato en servidores.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[280px] items-stretch sm:min-h-[320px] lg:h-[calc((100dvh-var(--header-offset))*0.7)] lg:max-h-[calc((100dvh-var(--header-offset))*0.7)] lg:min-h-0 lg:w-full lg:self-center"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-emerald-400/30 via-emerald-300/10 to-transparent blur-2xl lg:-inset-5" />

            <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white/90 p-1.5 shadow-[0_32px_72px_-20px_rgba(16,185,129,0.35)] ring-1 ring-emerald-100/60 backdrop-blur-sm sm:rounded-[32px] sm:p-2">
              <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-[22px] bg-muted sm:min-h-[300px] sm:rounded-[26px] lg:min-h-0 lg:h-full">
                <Image
                  src={HERO_IMAGE}
                  alt="Consultar RFC y verificar identificación fiscal en línea"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-emerald-900/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </LayoutContainer>
    </section>
  );
}
