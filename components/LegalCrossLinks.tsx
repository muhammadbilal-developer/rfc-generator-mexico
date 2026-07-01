import type { ReactNode } from "react";

type LegalCrossLinksProps = {
  links: { href: string; label: string }[];
};

/** Footer block for legal pages — max 2 cross-links per page. */
export function LegalCrossLinks({ links }: LegalCrossLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav aria-label="Documentos legales relacionados" className="mt-10 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
      <p className="text-sm font-semibold text-text-primary">Documentos Relacionados</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm font-medium text-emerald-700 underline-offset-2 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
