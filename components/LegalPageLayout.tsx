import type { ReactNode } from "react";
import { ContentPageContainer, SECTION_PADDING_Y } from "./LayoutContainer";

type LegalPageLayoutProps = {
  children: ReactNode;
};

/** Legal pages: 1024px max width, consistent section padding. */
export function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <main className={`flex flex-1 flex-col w-full bg-page ${SECTION_PADDING_Y}`}>
      <ContentPageContainer>
        <article className="legal-prose w-full text-left text-text-primary [&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline-offset-2 hover:[&_a]:underline [&_h1]:text-left [&_h1]:text-3xl [&_h1]:font-bold sm:[&_h1]:text-4xl [&_h2]:mt-8 [&_h2]:text-left [&_h2]:text-xl [&_h2]:font-semibold sm:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-left [&_h3]:text-lg [&_h3]:font-semibold sm:[&_h3]:text-xl [&_p]:mt-3 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-text-secondary [&_li]:text-text-secondary">
          {children}
        </article>
      </ContentPageContainer>
    </main>
  );
}
