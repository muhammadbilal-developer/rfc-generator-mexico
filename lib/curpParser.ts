const CURP_RE = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/;

const normalizeCurp = (value: string): string =>
  value
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

type CurpParseResult = {
  valid: boolean;
  normalized: string;
  rfcBase: string;
  fechaNacimiento: string;
  sexo: "H" | "M" | "";
  entidad: string;
  errors: string[];
};

const curpYearToFull = (yy: number): number => {
  const currentYy = new Date().getFullYear() % 100;
  return yy <= currentYy ? 2000 + yy : 1900 + yy;
};

export const parseCurp = (input: string): CurpParseResult => {
  const normalized = normalizeCurp(input);
  const errors: string[] = [];

  if (!normalized) {
    return {
      valid: false,
      normalized: "",
      rfcBase: "",
      fechaNacimiento: "",
      sexo: "",
      entidad: "",
      errors: ["Ingrese su CURP de 18 caracteres."],
    };
  }

  if (normalized.length !== 18) {
    errors.push("La CURP debe tener exactamente 18 caracteres.");
  }

  if (!CURP_RE.test(normalized)) {
    errors.push("El formato de la CURP no es válido.");
  }

  if (errors.length) {
    return {
      valid: false,
      normalized,
      rfcBase: "",
      fechaNacimiento: "",
      sexo: "",
      entidad: "",
      errors,
    };
  }

  const rfcBase = normalized.slice(0, 10);
  const yy = Number(normalized.slice(4, 6));
  const mm = normalized.slice(6, 8);
  const dd = normalized.slice(8, 10);
  const year = curpYearToFull(yy);
  const fechaNacimiento = `${year}-${mm}-${dd}`;
  const date = new Date(`${fechaNacimiento}T00:00:00`);

  if (Number.isNaN(date.getTime()) || date > new Date()) {
    errors.push("La fecha de nacimiento en la CURP no es válida.");
  }

  return {
    valid: errors.length === 0,
    normalized,
    rfcBase,
    fechaNacimiento,
    sexo: normalized[10] as "H" | "M",
    entidad: normalized.slice(11, 13),
    errors,
  };
};
