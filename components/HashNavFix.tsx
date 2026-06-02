"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { normalizeHash, scrollToSection } from "@/lib/hashNav";

/** Normalizes malformed hashes (#faq#tool) and scrolls to the target section on load. */
export function HashNavFix() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    let id = normalizeHash();
    if (!id) return;
    if (id === "tool") id = "generator";
    const t = window.setTimeout(() => scrollToSection(id, "auto"), 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
