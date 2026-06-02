import type { ReactNode } from "react";
import { LayoutContainer, SECTION_PADDING_Y } from "./LayoutContainer";

type LegalPageLayoutProps = {
  children: ReactNode;
};

/** Legal/content pages: full 1440px layout width, no narrow column. */
export function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <main className={`w-full bg-page ${SECTION_PADDING_Y}`}>
      <LayoutContainer className="w-full">
        <article className="legal-prose w-full text-justify text-text-primary [&_h1]:text-left [&_h1]:text-3xl [&_h1]:font-bold sm:[&_h1]:text-4xl [&_h2]:mt-8 [&_h2]:text-left [&_h2]:text-xl [&_h2]:font-semibold sm:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-left [&_h3]:text-lg [&_h3]:font-semibold sm:[&_h3]:text-xl [&_p]:mt-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-text-secondary [&_li]:text-text-secondary">
          {children}
        </article>
      </LayoutContainer>
    </main>
  );
}
