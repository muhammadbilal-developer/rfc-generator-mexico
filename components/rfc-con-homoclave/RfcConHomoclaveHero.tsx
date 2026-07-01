"use client";

import { headingCase } from "@/lib/headingCase";
import { RfcGeneratorCard } from "../RfcGeneratorCard";
import { ToolPageHero } from "../ToolPageHero";

const HERO_IMAGE = "/images/rfc-con-homoclave/hero.webp";

export function RfcConHomoclaveHero() {
  return (
    <ToolPageHero
      title="RFC con Homoclave: Los últimos 3 dígitos que importan:"
      lead={
        <>
          ¿Es necesario entender <strong>RFC con la homoclave?</strong> Estos tres dígitos son fundamentales para tu
          identificación fiscal. Nuestra calculadora te ofrece una estimación del RFC para evitar confusiones al comparar
          nombres y fechas de nacimiento similares. ¡Calcúlalo ahora!
        </>
      }
      heroImage={HERO_IMAGE}
      heroImageAlt="Ilustración sobre RFC con homoclave en México"
      heroImageTitle="Hero RFC con Homoclave — Calculadora México"
      backgroundVariant="vivid"
      sectionId="generator"
      ctaSectionId="que-es-rfc-homoclave"
      ctaLabel={headingCase("¿Qué es un RFC con homoclave?")}
      tall
      aside={<RfcGeneratorCard compact variant="rfc-con-homoclave" className="w-full" />}
    />
  );
}
