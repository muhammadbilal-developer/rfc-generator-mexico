import type { ReactNode } from "react";
import { FiArrowDown } from "react-icons/fi";
import { PrimaryLink } from "./PrimaryButton";

type HeroScrollCtaProps = {
  sectionId: string;
  children: ReactNode;
  className?: string;
};

/** Site-wide hero CTA — scrolls to the key section below the hero. */
export function HeroScrollCta({ sectionId, children, className = "" }: HeroScrollCtaProps) {
  return (
    <PrimaryLink
      sectionId={sectionId}
      className={`inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm shadow-emerald-500/25 sm:w-auto sm:py-3.5 sm:text-base ${className}`}
    >
      {children}
      <FiArrowDown className="h-4 w-4 shrink-0" aria-hidden />
    </PrimaryLink>
  );
}
