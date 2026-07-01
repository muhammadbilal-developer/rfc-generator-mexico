"use client";

import type { ReactNode } from "react";

const fadeClass = "transition-opacity duration-300 ease-in-out";

type SmoothViewToggleProps = {
  showSecondary: boolean;
  primary: ReactNode;
  secondary: ReactNode;
  className?: string;
};

/** Crossfades two panels without unmounting — avoids layout flicker on toggle. */
export function SmoothViewToggle({
  showSecondary,
  primary,
  secondary,
  className = "",
}: SmoothViewToggleProps) {
  return (
    <div className={`relative ${className}`.trim()}>
      <div
        className={`w-full ${fadeClass} ${
          showSecondary
            ? "pointer-events-none absolute inset-x-0 top-0 opacity-0"
            : "relative opacity-100"
        }`}
        aria-hidden={showSecondary}
      >
        {primary}
      </div>
      <div
        className={`w-full ${fadeClass} ${
          showSecondary
            ? "relative opacity-100"
            : "pointer-events-none absolute inset-x-0 top-0 opacity-0"
        }`}
        aria-hidden={!showSecondary}
      >
        {secondary}
      </div>
    </div>
  );
}

type SmoothTabPanelsProps<T extends string> = {
  activeId: T;
  panels: { id: T; content: ReactNode }[];
  className?: string;
};

/** Keeps all tab panels mounted; only the active one affects layout height. */
export function SmoothTabPanels<T extends string>({
  activeId,
  panels,
  className = "",
}: SmoothTabPanelsProps<T>) {
  return (
    <div className={`relative ${className}`.trim()}>
      {panels.map(({ id, content }) => {
        const isActive = activeId === id;
        return (
          <div
            key={id}
            id={`tabpanel-${id}`}
            role="tabpanel"
            aria-labelledby={`tab-${id}`}
            aria-hidden={!isActive}
            className={`w-full ${fadeClass} ${
              isActive
                ? "relative z-10 opacity-100"
                : "pointer-events-none absolute inset-x-0 top-0 z-0 opacity-0"
            }`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
