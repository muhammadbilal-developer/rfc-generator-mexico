import type { Metadata } from "next";
import { ConsultarRfcTool } from "@/components/consultar-rfc/ConsultarRfcTool";
import { ConsultarRfcContent } from "@/components/consultar-rfc/ConsultarRfcContent";
import { ConsultarRfcFaq } from "@/components/consultar-rfc/ConsultarRfcFaq";
import { ConsultarRfcHero } from "@/components/consultar-rfc/ConsultarRfcHero";
import { JsonLd } from "@/components/JsonLd";
import { consultarRfcFaqItems } from "@/lib/consultarRfcFaq";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  webApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/jsonLd";
import { pageCanonical } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  ...pageCanonical(ROUTES.consultarRfc),
  title: "Consultar RFC: Comprueba Y Verifica Tu Identificación Fiscal",
  description:
    "Utilice nuestra herramienta para consultar el RFC en línea. ¡Verifique su RFC y confirma los datos del contribuyente con facilidad!",
};

const pageDescription =
  "Herramienta para consultar y validar RFC en línea con calculadora gratuita, verificación de formato y procesamiento privado en el navegador.";

export default function ConsultarRfcPage() {
  const schemas = [
    webApplicationJsonLd({
      name: "Consultar RFC — CalcularRFC",
      description: pageDescription,
      path: ROUTES.consultarRfc,
    }),
    webPageJsonLd({
      name: "Consultar RFC — CalcularRFC",
      description: pageDescription,
      path: ROUTES.consultarRfc,
    }),
    breadcrumbJsonLd([
      { name: "Inicio", path: ROUTES.home },
      { name: "Consultar RFC", path: ROUTES.consultarRfc },
    ]),
    faqPageJsonLd(consultarRfcFaqItems),
  ];

  return (
    <main className="flex flex-1 flex-col">
      <ConsultarRfcHero />
      <ConsultarRfcTool />
      <ConsultarRfcContent />
      <ConsultarRfcFaq />
      <JsonLd id="consultar-rfc-jsonld" data={schemas} />
    </main>
  );
}
