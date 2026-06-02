import Script from "next/script";
import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { InfoCards } from "@/components/InfoCards";
import { RfcGenerator } from "@/components/RfcGenerator";

export const metadata: Metadata = {
  title: "RFC Generator Mexico (SAT Official Format)",
  description:
    "RFC Generator Mexico helps calculate an RFC estimate using public SAT logic for persona física names and birth date.",
};

export default function Home() {
  const faqItems = [
    { q: "What is RFC?", a: "RFC is a tax identifier used in Mexico for individuals and legal entities." },
    { q: "Is this RFC valid?", a: "This is an estimate from public SAT logic. You should validate final records in SAT systems." },
    { q: "Is this an official SAT tool?", a: "No. This site is independent and not affiliated with SAT." },
    { q: "Can foreigners use it?", a: "Foreign residents may use RFC processes depending on tax status, but official assignment is by SAT." },
    { q: "Is my data stored?", a: "Inputs are processed client-side for RFC generation and are not persisted by default." },
    { q: "Is this free?", a: "Yes. The tool is free to use for estimate and learning purposes." },
  ];

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
      <RfcGenerator />
      <HowItWorks />
      <InfoCards />
      <Faq />
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
    </main>
  );
}
