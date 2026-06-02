"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiDownload, FiShare2 } from "react-icons/fi";
import type { RfcPdfInput } from "@/lib/rfcPdf";
import { downloadRfcPdf } from "@/lib/rfcPdf";
import type { RfcResult } from "@/lib/rfcEngine";
import { getGeneratorUrl, getSiteUrl, SITE_NAME } from "@/lib/site";

type RfcShareActionsProps = {
  result: RfcResult;
  form: Omit<RfcPdfInput, "result">;
};

function buildShareMessage(result: RfcResult): string {
  const url = getGeneratorUrl();
  return `My estimated RFC is ${result.rfc} (public SAT algorithm). Generated free at ${SITE_NAME}: ${url}`;
}

export function RfcShareActions({ result, form }: RfcShareActionsProps) {
  const [busy, setBusy] = useState<"pdf" | null>(null);
  const [shared, setShared] = useState(false);

  const shareMessage = buildShareMessage(result);
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

  const handleShare = async () => {
    const payload = {
      title: `${SITE_NAME} — RFC ${result.rfc}`,
      text: shareMessage,
      url: getSiteUrl(),
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(payload);
        setShared(true);
        window.setTimeout(() => setShared(false), 1500);
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    await navigator.clipboard.writeText(shareMessage);
    setShared(true);
    window.setTimeout(() => setShared(false), 1500);
  };

  const handlePdf = async () => {
    setBusy("pdf");
    try {
      await downloadRfcPdf({ ...form, result });
    } finally {
      setBusy(null);
    }
  };

  const actionClass =
    "inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-200/80 bg-white px-3 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:flex-none sm:px-4";

  return (
    <div className="mt-6 border-t border-emerald-100/80 pt-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-text-primary">Free actions</p>
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
          No sign-up
        </span>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-3">
        <button type="button" onClick={handleShare} className={actionClass} aria-label="Share RFC result">
          {shared ? <FiCheck className="h-4 w-4 text-emerald-600" /> : <FiShare2 className="h-4 w-4 text-emerald-600" />}
          {shared ? "Link copied" : "Share"}
        </button>
        <button
          type="button"
          onClick={handlePdf}
          disabled={busy === "pdf"}
          className={`${actionClass} disabled:opacity-60`}
          aria-label="Download RFC as PDF"
        >
          <FiDownload className="h-4 w-4 text-emerald-600" />
          {busy === "pdf" ? "Preparing…" : "Download PDF"}
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionClass} bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/15 hover:border-[#25D366]/40`}
          aria-label="Share RFC on WhatsApp"
        >
          <FaWhatsapp className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-text-secondary">
        Every share includes a link to {getSiteUrl().replace(/^https?:\/\//, "")}. PDF uses site branding and logo.
      </p>
    </div>
  );
}
