"use client";

import type { ReactNode } from "react";
import { ContentImage } from "./ContentImage";
import { AnimatedReveal } from "./AnimatedReveal";
import { LayoutContainer, SECTION_PADDING_Y } from "./LayoutContainer";
import { PrimaryLink } from "./PrimaryButton";
import { SECTION_IDS } from "@/lib/hashNav";
import { headingCase } from "@/lib/headingCase";
import { getSectionBackground } from "@/lib/sectionBackgrounds";

type HomeContentSectionProps = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  imageTitle?: string;
  sectionIndex: number;
  imagePosition?: "left" | "right";
  ctaText?: string;
  ctaSectionId?: string;
  children: ReactNode;
};

export function HomeContentSection({
  id,
  title,
  image,
  imageAlt,
  imageTitle,
  sectionIndex,
  imagePosition = "right",
  ctaText,
  ctaSectionId = SECTION_IDS.generator,
  children,
}: HomeContentSectionProps) {
  const bgClass = getSectionBackground(sectionIndex);

  return (
    <section id={id} className={`${SECTION_PADDING_Y} ${bgClass}`}>
      <LayoutContainer>
        <div
          className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 ${
            imagePosition === "left" ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
          }`}
        >
          <AnimatedReveal>
            <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">{headingCase(title)}</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:capitalize [&_h3]:text-text-primary [&_li]:ml-5 [&_li]:list-disc [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_strong]:font-semibold [&_strong]:text-text-primary [&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:border [&_table]:border-border [&_td]:border [&_td]:border-border [&_td]:p-3 [&_td]:text-sm [&_th]:border [&_th]:border-border [&_th]:bg-emerald-50/80 [&_th]:p-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-text-primary [&_ul]:space-y-2">
              {children}
            </div>
            {ctaText ? (
              <div className="mt-8">
                <PrimaryLink sectionId={ctaSectionId} className="px-7 py-3.5">
                  {ctaText}
                </PrimaryLink>
              </div>
            ) : null}
          </AnimatedReveal>

          <AnimatedReveal
            delay={0.08}
            className="lg:sticky lg:top-[calc(var(--header-offset)+1.25rem)] lg:self-start"
          >
            <ContentImage src={image} alt={imageAlt} title={imageTitle ?? imageAlt} />
          </AnimatedReveal>
        </div>
      </LayoutContainer>
    </section>
  );
}
