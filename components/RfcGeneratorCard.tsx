"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiEdit3,
  FiLoader,
  FiRefreshCcw,
  FiShield,
  FiZap,
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
  placeholder?: string;
  hint?: string;
}[] = [
  { key: "nombre", label: "Nombre(s)", type: "text", placeholder: "Tu(s) nombre(s)" },
  { key: "apellidoPaterno", label: "Primer apellido", type: "text", placeholder: "Tu primer apellido" },
  {
    key: "apellidoMaterno",
    label: "Segundo apellido (opcional)",
    type: "text",
    placeholder: "Tu segundo apellido",
  },
  { key: "fechaNacimiento", label: "Fecha de nacimiento", type: "date" },
];

type RfcGeneratorCardProps = {
  compact?: boolean;
  className?: string;
};

function ResultPanel({
  result,
  form,
  compact,
  copied,
  onCopy,
  onRecalculate,
}: {
  result: RfcResult;
  form: FormState;
  compact: boolean;
  copied: boolean;
  onCopy: () => void;
  onRecalculate: () => void;
}) {
  return (
    <div className={compact ? "p-4 sm:p-5" : "p-5 sm:p-6 md:p-8"}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 sm:text-xs">
        Estimated RFC
      </p>
      <p
        className={`break-all font-mono font-bold tracking-[0.08em] text-text-primary ${
          compact ? "mt-1.5 text-xl sm:text-2xl" : "mt-2 text-2xl sm:text-3xl md:text-4xl"
        }`}
      >
        {result.rfc}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ["Base", result.base],
          ["Date", result.fecha],
          ["Homoclave", result.homoclave],
          ["DV", result.dv],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-emerald-100 bg-white px-2.5 py-2">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
            <p className="mt-0.5 font-mono text-xs font-bold text-text-primary">{value}</p>
          </div>
        ))}
      </div>
      <div className={`flex flex-wrap items-center gap-2 ${compact ? "mt-3" : "mt-4"}`}>
        <PrimaryButton
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
        >
          {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
          {copied ? "Copied!" : "Copy RFC"}
        </PrimaryButton>
        <button
          type="button"
          onClick={onRecalculate}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-text-primary transition hover:bg-muted"
        >
          <FiEdit3 className="h-4 w-4" aria-hidden />
          New calculation
        </button>
      </div>
      {!compact ? (
        <p className="mt-3 text-xs leading-relaxed text-text-secondary">
          SAT assigns final homoclave; validate official records through SAT.
        </p>
      ) : null}
      <RfcShareActions result={result} form={form} />
    </div>
  );
}

export function RfcGeneratorCard({ compact = false, className = "" }: RfcGeneratorCardProps) {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<RfcResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const isValid = useMemo(() => rfcFormSchema.safeParse(form).success, [form]);
  const showResult = Boolean(result);

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const resetAll = () => {
    setForm(initial);
    setErrors({});
    setResult(null);
    setCopied(false);
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
      className={`overflow-hidden rounded-xl border-2 border-white bg-white/90 shadow-[0_16px_48px_rgba(16,185,129,0.12)] backdrop-blur-lg ${className}`}
    >
      <div
        className={`border-b border-emerald-100/60 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 ${
          compact ? "px-4 py-3" : "px-5 py-3.5 sm:px-6 sm:py-4"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5 text-white">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
              <FiShield className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className={`font-semibold leading-snug ${compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"}`}>
                {showResult ? "RFC Result" : "Persona física · SAT public algorithm"}
              </p>
              {!compact && !showResult ? (
                <p className="text-xs text-white/85">Processed in your browser — not stored</p>
              ) : null}
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            <FiZap className="h-3 w-3" aria-hidden />
            Free
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {showResult && result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-gradient-to-br from-emerald-50/80 to-white"
          >
            <ResultPanel
              result={result}
              form={form}
              compact={compact}
              copied={copied}
              onCopy={copyRfc}
              onRecalculate={resetAll}
            />
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className={compact ? "p-4 sm:p-5" : "p-5 sm:p-6 md:p-8"}
          >
            <div className="flex flex-col gap-3">
              {fields.map(({ key, label, type, placeholder, hint }) => (
                <label key={key} className="block">
                  <span className="flex items-baseline justify-between gap-2 text-xs font-semibold text-text-primary sm:text-sm">
                    {label}
                    {hint ? (
                      <span className="text-[10px] font-normal text-text-secondary sm:text-xs">{hint}</span>
                    ) : null}
                  </span>
                  <input
                    type={type}
                    value={form[key]}
                    onChange={(e) => onChange(key, e.target.value)}
                    placeholder={placeholder}
                    className={`mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                      errors[key] ? "border-error" : "border-border"
                    }`}
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

            <div className={`flex flex-col gap-2.5 sm:flex-row ${compact ? "mt-4" : "mt-6"}`}>
              <PrimaryButton
                disabled={!isValid || loading}
                type="submit"
                className="w-full justify-center rounded-full px-6 py-2.5 text-sm shadow-emerald-500/25 sm:w-auto sm:min-w-[10rem]"
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
                onClick={resetAll}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-muted sm:w-auto"
              >
                <FiRefreshCcw className="h-4 w-4" aria-hidden />
                Clear
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
