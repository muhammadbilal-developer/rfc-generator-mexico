"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiLoader,
  FiRefreshCcw,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { generateRfc, type RfcResult } from "@/lib/rfcEngine";
import { rfcFormSchema } from "@/lib/schema";
import { AnimatedReveal } from "./AnimatedReveal";
import { LayoutContainer, SECTION_PADDING_Y } from "./LayoutContainer";
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
  /** Extra grid classes for tablet/desktop layout */
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
    fieldClass: "sm:col-span-2 md:col-span-1",
  },
];

export function RfcGenerator() {
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
    <section id="generator" className={`relative overflow-hidden ${SECTION_PADDING_Y} bg-section-mint`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 0%, rgba(16, 185, 129, 0.12) 0%, transparent 42%),
            radial-gradient(circle at 90% 100%, rgba(52, 211, 153, 0.1) 0%, transparent 40%)`,
        }}
      />
      <LayoutContainer className="relative w-full">
        <AnimatedReveal className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/90 bg-white/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
            <FiZap className="h-3.5 w-3.5" aria-hidden />
            RFC Generator · Free
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.5rem]">
            RFC Calculator Tool
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
            Enter your surnames, given names, and birth date. Get an instant SAT-format estimate with share, PDF, and WhatsApp options.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.08} className="mt-8 md:mt-10">
          <div className="mx-auto w-full max-w-5xl md:px-2 lg:px-0">
            <div className="overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/95 shadow-[0_20px_60px_rgba(16,185,129,0.12)] backdrop-blur-sm sm:rounded-[28px] md:rounded-[32px]">
              <div className="border-b border-emerald-100/80 bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 sm:px-6 sm:py-4 md:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-white">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm sm:h-10 sm:w-10">
                      <FiShield className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-semibold leading-snug sm:text-base">
                        Persona física · SAT public algorithm
                      </p>
                      <p className="text-xs text-white/85">Processed in your browser — not stored</p>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    100% Free
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-7 lg:p-10">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 md:gap-5">
                  {fields.map(({ key, label, type, hint, fieldClass = "" }) => (
                    <label key={key} className={`group block ${fieldClass}`}>
                      <span className="flex items-baseline justify-between gap-2 text-sm font-semibold text-text-primary">
                        {label}
                        {hint ? (
                          <span className="text-xs font-normal text-text-secondary">{hint}</span>
                        ) : null}
                      </span>
                      <input
                        type={type}
                        value={form[key]}
                        onChange={(e) => onChange(key, e.target.value)}
                        className={`mt-1 w-full rounded-xl border bg-muted/40 px-3 py-2.5 text-text-primary outline-none transition placeholder:text-text-secondary/50 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15 sm:mt-1.5 sm:rounded-2xl sm:px-4 sm:py-3 ${
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

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3 md:mt-8">
                  <PrimaryButton
                    disabled={!isValid || loading}
                    type="submit"
                    className="w-full justify-center rounded-full px-6 py-3 text-sm shadow-emerald-500/30 sm:w-auto sm:min-w-[12.5rem] md:min-w-[14rem]"
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
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-muted sm:w-auto"
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
                      className="mt-6 overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/90 via-white to-white sm:mt-8"
                    >
                      <div className="p-4 sm:p-6 md:p-8">
                        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                          Estimated RFC
                        </p>
                        <p className="mt-2 break-all font-mono text-3xl font-bold tracking-[0.08em] text-text-primary sm:text-4xl sm:tracking-[0.12em] md:text-5xl">
                          {result.rfc}
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                          {[
                            ["Base", result.base],
                            ["Date", result.fecha],
                            ["Homoclave", result.homoclave],
                            ["DV", result.dv],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="rounded-xl border border-emerald-100 bg-white/80 px-3 py-2.5"
                            >
                              <p className="text-[10px] font-semibold uppercase tracking-wide text-text-secondary">
                                {label}
                              </p>
                              <p className="mt-0.5 font-mono text-sm font-bold text-text-primary">{value}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          <PrimaryButton
                            type="button"
                            onClick={copyRfc}
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm"
                          >
                            {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                            {copied ? "Copied!" : "Copy RFC"}
                          </PrimaryButton>
                          <p className="text-xs leading-relaxed text-text-secondary">
                            SAT assigns final homoclave; validate official records through SAT.
                          </p>
                        </div>
                        <RfcShareActions result={result} form={form} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </AnimatedReveal>
      </LayoutContainer>
    </section>
  );
}
