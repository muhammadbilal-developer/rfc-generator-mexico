"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  FiLoader,
  FiSearch,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { parseCurp } from "@/lib/curpParser";
import { headingCase } from "@/lib/headingCase";
import { getRfcGeneratorCopy } from "@/lib/rfcGeneratorCopy";
import { generateRfc } from "@/lib/rfcEngine";
import { validateRfc } from "@/lib/rfcValidator";
import { rfcFormSchema } from "@/lib/schema";
import { AnimatedReveal } from "../AnimatedReveal";
import { CopyRfcButton } from "../CopyRfcButton";
import { LayoutContainer, SECTION_PADDING_Y } from "../LayoutContainer";
import { PrimaryButton } from "../PrimaryButton";
import { RfcGeneratorCard } from "../RfcGeneratorCard";

const COPY = getRfcGeneratorCopy("consultar-rfc");

type TabId = "datos" | "validar" | "curp";

const TABS: { id: TabId; label: string; icon: typeof FiUser }[] = [
  { id: "datos", label: "Por datos personales", icon: FiUser },
  { id: "validar", label: "Validar RFC", icon: FiShield },
  { id: "curp", label: "Por CURP", icon: FiSearch },
];

function ValidateRfcPanel() {
  const [rfc, setRfc] = useState("");
  const [result, setResult] = useState<ReturnType<typeof validateRfc> | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setResult(validateRfc(rfc));
    setLoading(false);
  };

  return (
    <div className="overflow-hidden rounded-xl border-2 border-white bg-white/90 shadow-[0_16px_48px_rgba(16,185,129,0.12)] backdrop-blur-lg">
      <div className="border-b border-emerald-100/60 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-5 py-3.5 sm:px-6 sm:py-4">
        <p className="text-sm font-semibold text-white sm:text-base">Validar formato de RFC</p>
        <p className="text-xs text-white/85">Verifique estructura, fecha y dígito verificador</p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8">
        <label className="block">
          <span className="text-xs font-semibold text-text-primary sm:text-sm">RFC a validar</span>
          <input
            value={rfc}
            onChange={(e) => setRfc(e.target.value.toUpperCase())}
            placeholder="Ej: GALJ900115I76"
            maxLength={13}
            className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 font-mono text-sm uppercase tracking-wide text-text-primary outline-none transition placeholder:font-sans placeholder:normal-case placeholder:tracking-normal placeholder:text-text-secondary/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            aria-label="RFC a validar"
          />
        </label>
        <p className="mt-2 text-xs leading-relaxed text-text-secondary">
          Persona física: 13 caracteres. Persona moral: 12 caracteres. No consulta el padrón del SAT.
        </p>
        <PrimaryButton
          type="submit"
          disabled={!rfc.trim() || loading}
          className="mt-5 w-full justify-center rounded-full px-6 py-2.5 text-sm sm:w-auto"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <FiLoader className="animate-spin" aria-hidden />
              Validando…
            </span>
          ) : (
            "Validar RFC"
          )}
        </PrimaryButton>
      </form>

      {result ? (
        <div
          className={`border-t px-5 py-5 sm:px-6 md:px-8 ${
            result.valid ? "border-emerald-100 bg-emerald-50/80" : "border-error/20 bg-red-50/50"
          }`}
        >
          <p
            className={`text-sm font-semibold ${result.valid ? "text-emerald-800" : "text-error"}`}
          >
            {result.valid ? "RFC con formato válido" : "RFC con errores de formato"}
          </p>
          {result.normalized ? (
            <p className="mt-2 break-all font-mono text-xl font-bold tracking-wide text-text-primary">
              {result.normalized}
            </p>
          ) : null}
          {result.personType ? (
            <p className="mt-2 text-sm text-text-secondary">
              Tipo: <strong>{result.personType === "fisica" ? "Persona física" : "Persona moral"}</strong>
            </p>
          ) : null}
          {result.valid ? (
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ["Base", result.base],
                ["Fecha", result.fecha],
                ["Homoclave", result.homoclave],
                ["DV", result.dv],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-emerald-100 bg-white px-2.5 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-text-secondary">{label}</p>
                  <p className="mt-0.5 font-mono text-xs font-bold text-text-primary">{value}</p>
                </div>
              ))}
            </div>
          ) : null}
          {result.errors.length ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-error">
              {result.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ) : null}
          {result.valid ? (
            <CopyRfcButton
              value={result.normalized}
              className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function CurpConsultaPanel() {
  const [curp, setCurp] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [curpInfo, setCurpInfo] = useState<ReturnType<typeof parseCurp> | null>(null);
  const [result, setResult] = useState<ReturnType<typeof generateRfc> | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const form = useMemo(
    () => ({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNacimiento: curpInfo?.fechaNacimiento ?? "",
    }),
    [nombre, apellidoPaterno, apellidoMaterno, curpInfo],
  );

  const canSubmit = curpInfo?.valid && rfcFormSchema.safeParse(form).success;

  const onCurpBlur = () => {
    if (!curp.trim()) {
      setCurpInfo(null);
      return;
    }
    setCurpInfo(parseCurp(curp));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const parsedCurp = parseCurp(curp);
    setCurpInfo(parsedCurp);
    if (!parsedCurp.valid) return;

    const parsedForm = rfcFormSchema.safeParse(form);
    if (!parsedForm.success) {
      const next: Record<string, string> = {};
      parsedForm.error.issues.forEach((issue) => {
        next[String(issue.path[0] ?? "form")] = issue.message;
      });
      setErrors(next);
      return;
    }

    setErrors({});
    setLoading(true);
    setResult(null);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setResult(generateRfc(parsedForm.data));
    setLoading(false);
  };

  return (
    <div className="overflow-hidden rounded-xl border-2 border-white bg-white/90 shadow-[0_16px_48px_rgba(16,185,129,0.12)] backdrop-blur-lg">
      <div className="border-b border-emerald-100/60 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-5 py-3.5 sm:px-6 sm:py-4">
        <p className="text-sm font-semibold text-white sm:text-base">Consultar RFC con CURP</p>
        <p className="text-xs text-white/85">Base desde CURP + nombre completo para homoclave</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6 md:p-8">
        <label className="block">
          <span className="text-xs font-semibold text-text-primary sm:text-sm">CURP (18 caracteres)</span>
          <input
            value={curp}
            onChange={(e) => {
              setCurp(e.target.value.toUpperCase());
              setCurpInfo(null);
              setResult(null);
            }}
            onBlur={onCurpBlur}
            placeholder="Ej: GARL900115HDFRNN09"
            maxLength={18}
            className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 font-mono text-sm uppercase tracking-wide outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
          {curpInfo && !curpInfo.valid ? (
            <ul className="mt-1 list-disc pl-5 text-xs text-error">
              {curpInfo.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          ) : null}
        </label>

        {curpInfo?.valid ? (
          <div className="rounded-lg border border-emerald-100 bg-emerald-50/60 px-3 py-2.5 text-sm text-text-secondary">
            <p>
              Base RFC desde CURP:{" "}
              <strong className="font-mono text-text-primary">{curpInfo.rfcBase}</strong>
            </p>
            <p className="mt-1">
              Fecha detectada:{" "}
              <strong>{curpInfo.fechaNacimiento}</strong> · Sexo:{" "}
              <strong>{curpInfo.sexo === "H" ? "Hombre" : "Mujer"}</strong>
            </p>
          </div>
        ) : null}

        <p className="text-xs leading-relaxed text-text-secondary">
          La homoclave requiere su nombre completo (la CURP no lo almacena). Ingrese los mismos datos de su acta de
          nacimiento.
        </p>

        {[
          { key: "nombre", label: "Nombre(s)", value: nombre, set: setNombre, placeholder: "Tu(s) nombre(s)" },
          {
            key: "apellidoPaterno",
            label: "Primer apellido",
            value: apellidoPaterno,
            set: setApellidoPaterno,
            placeholder: "Tu primer apellido",
          },
          {
            key: "apellidoMaterno",
            label: "Segundo apellido (opcional)",
            value: apellidoMaterno,
            set: setApellidoMaterno,
            placeholder: "Tu segundo apellido",
          },
        ].map(({ key, label, value, set, placeholder }) => (
          <label key={key} className="block">
            <span className="text-xs font-semibold text-text-primary sm:text-sm">{label}</span>
            <input
              value={value}
              onChange={(e) => {
                set(e.target.value);
                setErrors((prev) => ({ ...prev, [key]: "" }));
              }}
              placeholder={placeholder}
              className={`mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                errors[key] ? "border-error" : "border-border"
              }`}
            />
            <span className="mt-0.5 block text-xs text-error">{errors[key]}</span>
          </label>
        ))}

        <PrimaryButton
          type="submit"
          disabled={!canSubmit || loading}
          className="w-full justify-center rounded-full px-6 py-2.5 text-sm sm:w-auto"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <FiLoader className="animate-spin" aria-hidden />
              Consultando…
            </span>
          ) : (
            "Consultar RFC con CURP"
          )}
        </PrimaryButton>
      </form>

      {result ? (
        <div className="border-t border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-white px-5 py-5 sm:px-6 md:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 sm:text-xs">
            RFC estimado
          </p>
          <p className="mt-2 break-all font-mono text-2xl font-bold tracking-[0.08em] text-text-primary sm:text-3xl">
            {result.rfc}
          </p>
          {curpInfo?.rfcBase !== `${result.base}${result.fecha}` ? (
            <p className="mt-2 text-xs text-amber-800">
              La base de su CURP ({curpInfo?.rfcBase}) no coincide con el nombre ingresado. Verifique la ortografía de
              sus apellidos y nombre.
            </p>
          ) : (
            <p className="mt-2 text-xs text-emerald-800">La base coincide con los primeros 10 caracteres de su CURP.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export function ConsultarRfcTool() {
  const [tab, setTab] = useState<TabId>("datos");

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
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.5rem]">
            {headingCase(COPY.sectionTitle ?? "Herramienta Para Consultar RFC")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
            {COPY.sectionDescription}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.06} className="mt-8 md:mt-10">
          <div className="mx-auto w-full max-w-5xl md:px-2 lg:px-0">
            <div
              className="mb-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center"
              role="tablist"
              aria-label="Modos de consulta RFC"
            >
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={tab === id}
                  onClick={() => setTab(id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    tab === id
                      ? "border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "border-border bg-white text-text-primary hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence initial={false}>
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                layout={false}
                role="tabpanel"
              >
                {tab === "datos" ? <RfcGeneratorCard variant="consultar-rfc" /> : null}
                {tab === "validar" ? <ValidateRfcPanel /> : null}
                {tab === "curp" ? <CurpConsultaPanel /> : null}
              </motion.div>
            </AnimatePresence>

            <p className="mt-4 text-center text-xs leading-relaxed text-text-secondary">
              Estimación informativa con algoritmo público del SAT. Para RFC oficial o verificación en el padrón, use{" "}
              <a
                href="https://wwwmat.sat.gob.mx/aplicacion/29073/verifica-si-estas-registrado-en-el-rfc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-700 underline-offset-2 hover:underline"
              >
                el portal del SAT
              </a>
              .
            </p>
          </div>
        </AnimatedReveal>
      </LayoutContainer>
    </section>
  );
}
