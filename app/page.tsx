import Script from "next/script";
import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HomeContent } from "@/components/HomeContent";
import { faqItems } from "@/lib/faqContent";

export const metadata: Metadata = {
  title: "Calcular RFC y genera tu estimación de RFC en México.",
  description:
    "Calcular RFC en segundos! Introduce tus datos y obtén una estimación rápida y precisa de la RFC gratis. No es necesario registrarse.",
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
      <Hero />
      <HomeContent />
      <Faq />
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
