import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FiCheckCircle, FiSearch, FiShield, FiZap } from "react-icons/fi";

const FEATURE_ICONS: IconType[] = [FiZap, FiSearch, FiCheckCircle, FiShield];

type HeroInfoPanelProps = {
  intro?: ReactNode;
  bullets: string[];
};

export function HeroInfoPanel({ intro, bullets }: HeroInfoPanelProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-100/90 bg-white/95 shadow-[0_24px_60px_rgba(16,185,129,0.14)] backdrop-blur-md">
      {intro ? (
        <div className="border-b border-emerald-100/80 bg-gradient-to-br from-emerald-50/80 to-white px-4 py-4 sm:px-5 sm:py-4">
          <p className="text-sm leading-snug text-text-secondary sm:text-[0.95rem] [&_strong]:font-semibold [&_strong]:text-text-primary">
            {intro}
          </p>
        </div>
      ) : null}

      <ul className={`space-y-1.5 p-4 sm:p-5 ${intro ? "" : "pt-4 sm:pt-5"}`}>
        {bullets.map((item, index) => {
          const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];
          return (
            <li
              key={item}
              className="flex items-start gap-2.5 rounded-lg border border-emerald-50/90 bg-gradient-to-r from-white to-emerald-50/30 px-2.5 py-2 sm:gap-3 sm:px-3 sm:py-2.5"
            >
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-sm shadow-emerald-600/20"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm leading-snug text-text-secondary sm:text-[0.9rem]">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
