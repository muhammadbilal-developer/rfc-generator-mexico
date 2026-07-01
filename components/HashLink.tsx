"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { SECTION_IDS } from "@/lib/hashNav";
import { ROUTES } from "@/lib/routes";
import { scrollToSection, setHash } from "@/lib/hashNav";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  sectionId: string;
  children: ReactNode;
};

const pagesWithSections: string[] = [ROUTES.home, ROUTES.consultarRfc, ROUTES.rfcConHomoclave];

/**
 * In-page section link — avoids stacked hashes like /#faq#tool.
 * Generator links scroll in-page on any route that defines a `#generator` section.
 */
export function HashLink({ sectionId, children, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const isGenerator = sectionId === SECTION_IDS.generator;
  const onPageWithSections = pagesWithSections.includes(pathname);

  let href: string;
  let scrollInPage = false;

  if (isGenerator && onPageWithSections) {
    href = `#${SECTION_IDS.generator}`;
    scrollInPage = true;
  } else if (isGenerator) {
    href = ROUTES.home;
  } else if (onPageWithSections) {
    href = `#${sectionId}`;
    scrollInPage = true;
  } else {
    href = `${ROUTES.home}#${sectionId}`;
  }

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        if (scrollInPage) {
          e.preventDefault();
          scrollToSection(sectionId);
          setHash(sectionId, true);
        }
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
