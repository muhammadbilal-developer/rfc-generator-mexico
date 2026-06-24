"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiLoader,
  FiRefreshCcw,
  FiShield,
} from "react-icons/fi";
import { generateRfc, type RfcResult } from "@/lib/rfcEngine";
import { rfcFormSchema } from "@/lib/schema";
import { PrimaryButton } from "./PrimaryButton";
import { RfcShareActions } from "./RfcShareActions";

type FormState = {
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombre: string;
  fechaNacimiento: string;
};

const initial: FormState = {
  apellidoPaterno: "",
  apellidoMaterno: "",
  nombre: "",
  fechaNacimiento: "",
};

const fields: {
  key: keyof FormState;
  label: string;
  type: string;
  hint?: string;
  fieldClass?: string;
}[] = [
  { key: "apellidoPaterno", label: "Paternal surname", type: "text", hint: "Required" },
  { key: "apellidoMaterno", label: "Maternal surname", type: "text", hint: "Optional" },
  { key: "nombre", label: "Given name(s)", type: "text", hint: "Required" },
  {
    key: "fechaNacimiento",
    label: "Birth date",
    type: "date",
    hint: "Required",
    fieldClass: "sm:col-span-2",
  },
];

type RfcGeneratorCardProps = {
  compact?: boolean;
  className?: string;
};

export function RfcGeneratorCard({ compact = false, className = "" }: RfcGeneratorCardProps) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RfcResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const isValid = useMemo(() => rfcFormSchema.safeParse(form).success, [form]);

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = rfcFormSchema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0] ?? "form");
        next[key] = issue.message;
      });
      setErrors(next);
      return;
    }

    setLoading(true);
    setResult(null);
    await new Promise((resolve) => setTimeout(resolve, 950));
    setResult(generateRfc(parsed.data));
    setLoading(false);
  };

  const copyRfc = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.rfc);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/95 shadow-[0_20px_60px_rgba(16,185,129,0.14)] backdrop-blur-md sm:rounded-[24px] ${
        compact ? "ring-1 ring-white/80" : "sm:rounded-[28px] md:rounded-[32px]"
      } ${className}`}
    >
      <div
        className={`border-b border-emerald-100/80 bg-gradient-to-r from-emerald-600 to-emerald-500 ${
          compact ? "px-4 py-2.5" : "px-4 py-3 sm:px-6 sm:py-4 md:px-8"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5 text-white">
            <span
              className={`flex shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm ${
                compact ? "h-8 w-8" : "h-9 w-9 sm:h-10 sm:w-10 sm:rounded-xl"
              }`}
            >
              <FiShield className={compact ? "h-4 w-4" : "h-5 w-5"} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className={`font-semibold leading-snug ${compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"}`}>
                Persona física · SAT public algorithm
              </p>
              {!compact ? (
                <p className="text-xs text-white/85">Processed in your browser — not stored</p>
              ) : null}
            </div>
          </div>
          <span className="shrink-0 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:px-3 sm:py-1 sm:text-xs">
            Free
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className={compact ? "p-4 sm:p-5" : "p-4 sm:p-6 md:p-7 lg:p-10"}>
        <div
          className={`grid grid-cols-1 gap-2.5 sm:grid-cols-2 ${
            compact ? "sm:gap-x-3 sm:gap-y-2.5" : "sm:gap-x-5 sm:gap-y-4 md:gap-5"
          }`}
        >
          {fields.map(({ key, label, type, hint, fieldClass = "" }) => (
            <label key={key} className={`block ${fieldClass}`}>
              <span className="flex items-baseline justify-between gap-2 text-xs font-semibold text-text-primary sm:text-sm">
                {label}
                {hint ? <span className="text-[10px] font-normal text-text-secondary sm:text-xs">{hint}</span> : null}
              </span>
              <input
                type={type}
                value={form[key]}
                onChange={(e) => onChange(key, e.target.value)}
                className={`mt-1 w-full rounded-xl border bg-muted/40 px-3 py-2 text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 ${
                  compact ? "text-sm" : "py-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
                } ${errors[key] ? "border-error" : "border-border"}`}
                aria-invalid={Boolean(errors[key])}
                aria-label={label}
              />
              <span
                aria-live="polite"
                className={`mt-0.5 block text-xs leading-tight text-error ${errors[key] ? "min-h-[1.125rem]" : "min-h-0"}`}
              >
                {errors[key]}
              </span>
            </label>
          ))}
        </div>

        <div className={`flex flex-col gap-2 sm:flex-row sm:flex-wrap ${compact ? "mt-4" : "mt-5 sm:mt-6 md:mt-8"}`}>
          <PrimaryButton
            disabled={!isValid || loading}
            type="submit"
            className={`w-full justify-center rounded-full text-sm shadow-emerald-500/30 sm:w-auto ${
              compact ? "px-5 py-2.5" : "px-6 py-3 sm:min-w-[12.5rem] md:min-w-[14rem]"
            }`}
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <FiLoader className="animate-spin" aria-hidden />
                Calculating…
              </span>
            ) : (
              "Generate RFC"
            )}
          </PrimaryButton>
          <button
            type="button"
            onClick={() => {
              setForm(initial);
              setErrors({});
              setResult(null);
            }}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white font-semibold text-text-primary transition hover:bg-muted sm:w-auto ${
              compact ? "px-4 py-2.5 text-sm" : "px-5 py-3 text-sm"
            }`}
          >
            <FiRefreshCcw className="h-4 w-4" aria-hidden />
            Clear
          </button>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`overflow-hidden rounded-xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/90 via-white to-white ${
                compact ? "mt-4" : "mt-6 sm:mt-8"
              }`}
            >
              <div className={compact ? "p-3 sm:p-4" : "p-4 sm:p-6 md:p-8"}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 sm:text-xs">
                  Estimated RFC
                </p>
                <p
                  className={`mt-1.5 break-all font-mono font-bold tracking-[0.08em] text-text-primary ${
                    compact ? "text-xl sm:text-2xl" : "mt-2 text-3xl sm:text-4xl md:text-5xl"
                  }`}
                >
                  {result.rfc}
                </p>
                <div className={`mt-3 grid grid-cols-2 gap-2 ${compact ? "" : "md:grid-cols-4 md:gap-3"}`}>
                  {[
                    ["Base", result.base],
                    ["Date", result.fecha],
                    ["Homoclave", result.homoclave],
                    ["DV", result.dv],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-emerald-100 bg-white/80 px-2.5 py-2 sm:rounded-xl sm:px-3 sm:py-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
                      <p className="mt-0.5 font-mono text-xs font-bold text-text-primary sm:text-sm">{value}</p>
                    </div>
                  ))}
                </div>
                <div className={`flex flex-wrap items-center gap-2 ${compact ? "mt-3" : "mt-5 gap-3"}`}>
                  <PrimaryButton
                    type="button"
                    onClick={copyRfc}
                    className={`inline-flex items-center gap-2 rounded-full text-sm ${
                      compact ? "px-3 py-2" : "px-4 py-2.5"
                    }`}
                  >
                    {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                    {copied ? "Copied!" : "Copy RFC"}
                  </PrimaryButton>
                  {!compact ? (
                    <p className="text-xs leading-relaxed text-text-secondary">
                      SAT assigns final homoclave; validate official records through SAT.
                    </p>
                  ) : null}
                </div>
                <RfcShareActions result={result} form={form} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
