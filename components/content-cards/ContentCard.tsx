import type { ReactNode } from "react";

type ContentCardProps = {
  title?: string;
  children: ReactNode;
};

export function ContentCard({ title, children }: ContentCardProps) {
  return (
    <article className="flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-white/92 p-4 shadow-[0_6px_24px_rgba(16,185,129,0.1)] ring-1 ring-emerald-100/70 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(16,185,129,0.16)] sm:p-5">
      {title ? <h3 className="text-[0.9375rem] font-semibold leading-snug text-text-primary sm:text-base">{title}</h3> : null}
      <div
        className={`space-y-2.5 text-sm leading-relaxed text-text-secondary sm:text-[0.9375rem] ${title ? "mt-2.5" : ""} [&_a]:font-semibold [&_a]:text-emerald-700 [&_a]:underline-offset-2 hover:[&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-text-primary [&_ul]:space-y-2`}
      >
        {children}
      </div>
    </article>
  );
}
