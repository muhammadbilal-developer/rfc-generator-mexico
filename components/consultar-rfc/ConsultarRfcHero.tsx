"use client";

import { ToolPageHero } from "../ToolPageHero";

const HERO_IMAGE = "/images/consultar-rfc/hero.webp";

export function ConsultarRfcHero() {
  return (
    <ToolPageHero
      title="Consultar RFC: Verifique Y Valide Su RFC En Línea"
      lead={
        <>
          Genera tu RFC en segundos; no necesitas cita con el SAT. Usa nuestra calculadora; realiza un RFC basado en
          CURP. Comprueba y valida tu código fiscal al instante.
        </>
      }
      heroImage={HERO_IMAGE}
      heroImageAlt="Ilustración de consulta y validación de RFC en línea"
      heroImageTitle="Hero Consultar RFC — Verificar RFC en México"
      backgroundVariant="subtle"
      ctaLabel="Calculadora aquí"
      panelIntro={
        <>
          Nuestro gratuito <strong>consultar RFC.</strong> Esta herramienta está diseñada para ayudar a contribuyentes,
          empleados, trabajadores independientes y dueños de negocios mexicanos. Aquí te mostramos lo que puedes hacer
          con esta calculadora en menos de 30 segundos.
        </>
      }
      bullets={[
        "Generación instantánea de RFC al introducir sus datos.",
        "Obtienes un búsqueda basada en CURP.",
        "Verifique el formato del RFC existente.",
        "Es privado y no se almacena ningún dato en servidores.",
      ]}
    />
  );
}
