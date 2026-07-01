"use client";

import { motion, useReducedMotion } from "motion/react";

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

const listClass =
  "mt-4 list-none space-y-2.5 text-sm leading-relaxed text-text-secondary sm:text-[0.9375rem] [&_li]:ml-0 [&_li]:list-none [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.55em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:content-['']";

type ComparisonCardProps = {
  title: string;
  points: readonly string[];
  variant: "manual" | "calculator";
};

function ComparisonCard({ title, points, variant }: ComparisonCardProps) {
  const isCalculator = variant === "calculator";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6 ${
        isCalculator
          ? "border-emerald-200/90 shadow-[0_10px_30px_rgba(16,185,129,0.1)] ring-1 ring-emerald-100/80 hover:shadow-[0_14px_36px_rgba(16,185,129,0.14)]"
          : "border-border/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] ring-1 ring-border/50 hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
      }`}
    >
      <div
        className={`-mx-5 -mt-5 mb-1 h-1 sm:-mx-6 sm:-mt-6 ${
          isCalculator ? "bg-gradient-to-r from-emerald-400 to-emerald-600" : "bg-gradient-to-r from-slate-300 to-slate-400"
        }`}
        aria-hidden
      />
      <p
        className={`text-[0.9375rem] font-semibold leading-snug sm:text-base ${
          isCalculator ? "text-emerald-900" : "text-text-primary"
        }`}
      >
        {title}
      </p>
      <ul
        className={`${listClass} ${
          isCalculator ? "[&_li]:before:bg-emerald-500" : "[&_li]:before:bg-slate-400"
        }`}
      >
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

const cards = [
  { title: "Cálculo Manual:", points: manualPoints, variant: "manual" as const, delay: 0 },
  {
    title: "Desde Nuestra Calculadora RFC:",
    points: calculatorPoints,
    variant: "calculator" as const,
    delay: 0.1,
  },
];

export function ManualVsCalculatorCards() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5">
      {cards.map(({ title, points, variant, delay }) => (
        <motion.div
          key={variant}
          className="h-full"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
        >
          <ComparisonCard title={title} points={points} variant={variant} />
        </motion.div>
      ))}
    </div>
  );
}
