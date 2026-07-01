import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HomeContent } from "@/components/HomeContent";
import { JsonLd } from "@/components/JsonLd";
import { faqItems } from "@/lib/faqContent";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/jsonLd";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Calcular RFC y genera tu estimación de RFC en México.",
  description:
    "Calcular RFC en segundos! Introduce tus datos y obtén una estimación rápida y precisa de la RFC gratis. No es necesario registrarse.",
};

const homeDescription =
  "Calculadora gratuita para estimar el RFC de persona física en México con formato SAT, desglose transparente y procesamiento en el navegador.";

export default function Home() {
  const pageMeta = {
    name: "Calcular RFC — CalcularRFC",
    description: homeDescription,
    path: ROUTES.home,
  };

  const schemas = [
    organizationJsonLd(),
    webApplicationJsonLd({
      name: "Calculadora RFC CalcularRFC",
      description: homeDescription,
      path: ROUTES.home,
    }),
    webPageJsonLd(pageMeta),
    breadcrumbJsonLd([{ name: "Inicio", path: ROUTES.home }]),
    faqPageJsonLd(faqItems),
  ];

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <HomeContent />
      <Faq />
      <JsonLd id="home-jsonld" data={schemas} />
    </main>
  );
}
