"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, ReactNode } from "react";
import { scrollToSection, setHash } from "@/lib/hashNav";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  sectionId: string;
  children: ReactNode;
};

/**
 * Homepage section link — avoids stacked hashes like /#faq#tool.
 */
export function HashLink({ sectionId, children, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const href = onHome ? `#${sectionId}` : `/#${sectionId}`;

  return (
    <Link
      href={href}
      {...props}
      onClick={(e) => {
        if (onHome) {
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
