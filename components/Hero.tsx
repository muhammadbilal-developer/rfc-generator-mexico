import { SECTION_IDS } from "@/lib/hashNav";
import { headingCase } from "@/lib/headingCase";
import { HeroBackground } from "./HeroBackground";
import { HeroGeneratorPanel } from "./HeroGeneratorPanel";
import { LayoutContainer } from "./LayoutContainer";

const HERO_IMAGE = "/images/home/hero.webp";

const heroCtaClass =
  "font-sans inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-3 text-sm font-semibold tracking-normal text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02] hover:brightness-105 active:scale-[0.98] sm:w-auto sm:py-3.5 sm:text-base";

export function Hero() {
  return (
    <section
      id="generator"
      className="relative -mt-[var(--header-offset)] overflow-hidden border-b border-border/80 bg-page pt-[var(--header-offset)]"
    >
      <HeroBackground
        src={HERO_IMAGE}
        alt="Ilustración de calculadora RFC y contribuyente en México"
        title="Hero CalcularRFC — Calculadora RFC México"
      />

      <LayoutContainer className="relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,38rem)] xl:gap-14">
          <div className="flex min-w-0 flex-col gap-4 lg:max-w-xl lg:gap-5">
            <div>
              <h1 className="text-[1.75rem] font-bold leading-[1.12] tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] xl:text-5xl xl:leading-[1.08]">
                {headingCase("Calcular RFC: Herramienta Rápida Y Sencilla Para Generar RFC.")}
              </h1>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-text-primary sm:mt-4 sm:text-lg">
                Usa nuestra calculadora para <strong className="font-semibold text-text-primary">calcular RFC</strong>{" "}
                con solo tu nombre y fecha de nacimiento. Te proporciona cálculos rápidos y precisos al instante.
              </p>
            </div>

            <a href={`#${SECTION_IDS.comoFunciona}`} className={heroCtaClass}>
              {headingCase("Cómo funciona nuestra herramienta RFC")}
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="min-w-0 w-full lg:max-w-none">
            <HeroGeneratorPanel />
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
