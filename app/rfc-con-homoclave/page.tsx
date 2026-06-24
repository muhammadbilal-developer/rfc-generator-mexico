import Script from "next/script";
import type { Metadata } from "next";
import { RfcConHomoclaveContent } from "@/components/rfc-con-homoclave/RfcConHomoclaveContent";
import { RfcConHomoclaveFaq } from "@/components/rfc-con-homoclave/RfcConHomoclaveFaq";
import { RfcConHomoclaveHero } from "@/components/rfc-con-homoclave/RfcConHomoclaveHero";
import { RfcGenerator } from "@/components/RfcGenerator";
import { rfcConHomoclaveFaqItems } from "@/lib/rfcConHomoclaveFaq";

export const metadata: Metadata = {
  title: "RFC con Homoclave: Por qué importan los últimos 3 caracteres",
  description:
    "Obtén tu RFC con Homoclave en segundos con nuestra calculadora. Su uso eficaz te ayudará en tus transacciones financieras.",
};

export default function RfcConHomoclavePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rfcConHomoclaveFaqItems.map((item) => ({
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
      <RfcConHomoclaveHero />
      <RfcGenerator />
      <RfcConHomoclaveContent />
      <RfcConHomoclaveFaq />
      <Script id="rfc-con-homoclave-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
