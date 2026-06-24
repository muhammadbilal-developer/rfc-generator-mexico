import Script from "next/script";
import type { Metadata } from "next";
import { ConsultarRfcContent } from "@/components/consultar-rfc/ConsultarRfcContent";
import { ConsultarRfcFaq } from "@/components/consultar-rfc/ConsultarRfcFaq";
import { ConsultarRfcHero } from "@/components/consultar-rfc/ConsultarRfcHero";
import { RfcGenerator } from "@/components/RfcGenerator";
import { consultarRfcFaqItems } from "@/lib/consultarRfcFaq";

export const metadata: Metadata = {
  title: "Consultar RFC: Comprueba Y Verifica Tu Identificación Fiscal",
  description:
    "Utilice nuestra herramienta para consultar el RFC en línea. ¡Verifique su RFC y confirma los datos del contribuyente con facilidad!",
};

export default function ConsultarRfcPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: consultarRfcFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main>
      <ConsultarRfcHero />
      <RfcGenerator />
      <ConsultarRfcContent />
      <ConsultarRfcFaq />
      <Script id="consultar-rfc-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
