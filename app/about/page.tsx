import type { Metadata } from "next";
import { LayoutContainer, SECTION_PADDING_Y } from "@/components/LayoutContainer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our free RFC calculator for Mexico — SAT-format estimates built with transparent public algorithm logic.",
};

export default function AboutPage() {
  return (
    <main className={`w-full bg-page ${SECTION_PADDING_Y}`}>
      <LayoutContainer className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">About Us</h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>
            We provide a free online RFC calculator for Mexico that helps individuals estimate their Registro Federal de
            Contribuyentes using publicly documented SAT formatting rules.
          </p>
          <p>
            Our tool is designed for persona física — enter your surnames, given names, and birth date to receive an
            instant RFC estimate with base, date, homoclave, and verification digit breakdown.
          </p>
          <p>
            All calculations run in your browser. We do not store personal data on our servers. Results are estimates
            only; always verify your official RFC through SAT channels before legal or tax use.
          </p>
          <p>
            This site is independent and not affiliated with the Servicio de Administración Tributaria (SAT).
          </p>
        </div>
      </LayoutContainer>
    </main>
  );
}
