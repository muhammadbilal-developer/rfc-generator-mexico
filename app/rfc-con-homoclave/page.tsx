import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { RfcConHomoclaveContent } from "@/components/rfc-con-homoclave/RfcConHomoclaveContent";
import { RfcConHomoclaveFaq } from "@/components/rfc-con-homoclave/RfcConHomoclaveFaq";
import { RfcConHomoclaveHero } from "@/components/rfc-con-homoclave/RfcConHomoclaveHero";
import { rfcConHomoclaveFaqItems } from "@/lib/rfcConHomoclaveFaq";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  webApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/jsonLd";
import { pageCanonical } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  ...pageCanonical(ROUTES.rfcConHomoclave),
  title: "RFC con Homoclave: Por qué importan los últimos 3 caracteres",
  description:
    "Obtén tu RFC con Homoclave en segundos con nuestra calculadora. Su uso eficaz te ayudará en tus transacciones financieras.",
};

const pageDescription =
  "Calculadora gratuita para estimar RFC con homoclave en México, con desglose de los últimos caracteres y guía educativa.";

export default function RfcConHomoclavePage() {
  const schemas = [
    webApplicationJsonLd({
      name: "RFC con Homoclave — CalcularRFC",
      description: pageDescription,
      path: ROUTES.rfcConHomoclave,
    }),
    webPageJsonLd({
      name: "RFC con Homoclave — CalcularRFC",
      description: pageDescription,
      path: ROUTES.rfcConHomoclave,
    }),
    breadcrumbJsonLd([
      { name: "Inicio", path: ROUTES.home },
      { name: "RFC con Homoclave", path: ROUTES.rfcConHomoclave },
    ]),
    faqPageJsonLd(rfcConHomoclaveFaqItems),
  ];

  return (
    <main className="flex flex-1 flex-col">
      <RfcConHomoclaveHero />
      <RfcConHomoclaveContent />
      <RfcConHomoclaveFaq />
      <JsonLd id="rfc-con-homoclave-jsonld" data={schemas} />
    </main>
  );
}
