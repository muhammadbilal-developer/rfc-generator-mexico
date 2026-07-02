/** Section ids used for in-page navigation (homepage). */
export const SECTION_IDS = {
  generator: "generator",
  comoFunciona: "como-funciona",
} as const;

export function normalizeHash(): string | null {
  if (typeof window === "undefined") return null;
  const raw = window.location.hash;
  if (!raw) return null;
  const parts = raw.split("#").filter(Boolean);
  if (parts.length === 0) return null;
  const id = parts[parts.length - 1]!;
  if (parts.length > 1) {
    window.history.replaceState(null, "", `#${id}`);
  }
  return id;
}

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth"): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function setHash(id: string, replace = true): void {
  const url = `${window.location.pathname}${window.location.search}#${id}`;
  if (replace) {
    window.history.replaceState(null, "", url);
  } else {
    window.history.pushState(null, "", url);
  }
}
