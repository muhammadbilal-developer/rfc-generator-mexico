import type { ReactNode } from "react";

/** 70px vertical section padding (top + bottom). */
export const SECTION_PADDING_Y = "py-[70px]";

/** Hero: minimal top (below fixed header), 70px bottom. */
export const HERO_SECTION_PADDING = "pb-8 pt-5 sm:pb-10 sm:pt-6 md:pb-12 md:pt-8 lg:pb-16";

type LayoutContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Site-wide content width (1440px max). */
export function LayoutContainer({ children, className = "" }: LayoutContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

/** Consistent 70px vertical section padding. */
export function SectionShell({ children, id, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`${SECTION_PADDING_Y} ${className}`}>
      <LayoutContainer>{children}</LayoutContainer>
    </section>
  );
}
