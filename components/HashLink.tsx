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

const pagesWithSections = [ROUTES.home, ROUTES.consultarRfc, ROUTES.rfcConHomoclave];

/**
 * In-page section link — avoids stacked hashes like /#faq#tool.
 * Calculator links from tool pages go to the home page (`/`) without a hash.
 */
export function HashLink({ sectionId, children, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const isGenerator = sectionId === SECTION_IDS.generator;
  const onSamePage = !isGenerator && pagesWithSections.includes(pathname);
  const href = isGenerator ? ROUTES.home : onSamePage ? `#${sectionId}` : `${ROUTES.home}#${sectionId}`;

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        if (onSamePage) {
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
