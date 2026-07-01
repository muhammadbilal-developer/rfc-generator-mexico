"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import { PrimaryButton } from "./PrimaryButton";

type CopyRfcButtonProps = {
  value: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
};

/** Keeps a stable DOM tree to avoid motion/AnimatePresence reconciliation errors on icon swap. */
export function CopyRfcButton({
  value,
  className = "",
  label = "Copiar RFC",
  copiedLabel = "¡Copiado!",
}: CopyRfcButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <PrimaryButton
      type="button"
      onClick={handleCopy}
      className={className}
      aria-live="polite"
      aria-label={copied ? copiedLabel : label}
    >
      <span className="inline-flex items-center gap-2">
        <span className="relative inline-flex h-4 w-4 shrink-0">
          <FiCopy
            className={`h-4 w-4 transition-opacity ${copied ? "opacity-0" : "opacity-100"}`}
            aria-hidden
          />
          <FiCheck
            className={`absolute inset-0 h-4 w-4 transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
            aria-hidden
          />
        </span>
        <span>{copied ? copiedLabel : label}</span>
      </span>
    </PrimaryButton>
  );
}
