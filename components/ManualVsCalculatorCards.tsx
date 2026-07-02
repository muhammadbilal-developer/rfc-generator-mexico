"use client";

import { FiCheck } from "react-icons/fi";
import { motion, useReducedMotion } from "motion/react";

const CARD_BACKGROUND_IMAGE = "/images/home/calculadora-vs-manual.webp";

const manualPoints = [
  "Cada cálculo tarda entre 15 y 30 minutos.",
  "La tasa de error es alta, y los errores más comunes se encuentran en el nombre o en las reglas de homoclave.",
  "Para realizar los cálculos es necesario comprender las reglas de formato RFC.",
  "No resulta práctico para el equipo de recursos humanos o de nóminas porque requiere tiempo adicional.",
] as const;

const calculatorPoints = [
  "Obtendrás el resultado en menos de 30 segundos.",
  "Los resultados son precisos, ya que la lógica automatizada aplica todas las reglas correctamente. No se requieren conocimientos técnicos para usar la calculadora.",
  "Generar múltiples RFCS sin restricciones",
  "Es rápido y gratuito.",
] as const;

type FeatureCardProps = {
  title: string;
  points: readonly string[];
  index: number;
};

function ManualVsFeatureCard({ title, points, index }: FeatureCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="relative min-h-[220px] overflow-hidden rounded-[20px] shadow-[0_10px_32px_rgba(15,23,42,0.08)] ring-1 ring-emerald-100/80 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(16,185,129,0.14)] sm:min-h-[240px] sm:rounded-[22px]"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CARD_BACKGROUND_IMAGE})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/94 via-white/90 to-emerald-50/88"
      />

      <div className="relative z-10 flex h-full flex-col px-4 py-5 sm:px-6 sm:py-6">
        <h3 className="text-[1.05rem] font-bold leading-snug text-[#0b6f55] sm:text-lg">{title}</h3>
        <ul className="mt-3 space-y-2.5 sm:mt-3.5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3f4a54] sm:text-[0.9375rem]">
              <span
                aria-hidden
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b7a5d] text-white shadow-sm"
              >
                <FiCheck className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

const cards = [
  { title: "Cálculo Manual:", points: manualPoints },
  { title: "Desde Nuestra Calculadora RFC:", points: calculatorPoints },
] as const;

export function ManualVsCalculatorCards() {
  return (
    <div className="content-cards mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch sm:gap-5">
      {cards.map((card, index) => (
        <ManualVsFeatureCard key={card.title} title={card.title} points={card.points} index={index} />
      ))}
    </div>
  );
}
