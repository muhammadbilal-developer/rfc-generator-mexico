import { ANEXO_III_MAP } from "./constants";

type RfcPersonType = "fisica" | "moral";

type RfcValidationResult = {
  valid: boolean;
  normalized: string;
  personType: RfcPersonType | null;
  base: string;
  fecha: string;
  homoclave: string;
  dv: string;
  checkDigitValid: boolean;
  errors: string[];
};

const RFC_FISICA_RE = /^[A-ZÑ&]{4}\d{6}[0-9A-Z]{3}$/;
const RFC_MORAL_RE = /^[A-ZÑ&]{3}\d{6}[0-9A-Z]{3}$/;

const normalizeRfc = (value: string): string =>
  value
    .trim()
    .toUpperCase()
    .replace(/Ñ/g, "__ENYE__")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/__ENYE__/g, "Ñ")
    .replace(/[^A-ZÑ&0-9]/g, "");

const computeDv = (rfcBody: string): string => {
  let sum = 0;
  for (let i = 0; i < rfcBody.length; i += 1) {
    const value = ANEXO_III_MAP[rfcBody[i]] ?? 0;
    sum += value * (rfcBody.length + 1 - i);
  }
  const residue = sum % 11;
  if (residue === 0) return "0";
  const dv = 11 - residue;
  if (dv === 10) return "A";
  return String(dv);
};

const isValidDateSegment = (fecha: string): boolean => {
  if (!/^\d{6}$/.test(fecha)) return false;
  const yy = Number(fecha.slice(0, 2));
  const mm = Number(fecha.slice(2, 4));
  const dd = Number(fecha.slice(4, 6));
  if (mm < 1 || mm > 12 || dd < 1 || dd > 31) return false;
  const year = yy <= new Date().getFullYear() % 100 ? 2000 + yy : 1900 + yy;
  const date = new Date(`${year}-${fecha.slice(2, 4)}-${fecha.slice(4, 6)}T00:00:00`);
  return !Number.isNaN(date.getTime());
};

export const validateRfc = (input: string): RfcValidationResult => {
  const errors: string[] = [];
  const normalized = normalizeRfc(input);

  if (!normalized) {
    return {
      valid: false,
      normalized: "",
      personType: null,
      base: "",
      fecha: "",
      homoclave: "",
      dv: "",
      checkDigitValid: false,
      errors: ["Ingrese un RFC para validar."],
    };
  }

  let personType: RfcPersonType | null = null;
  if (RFC_FISICA_RE.test(normalized)) personType = "fisica";
  else if (RFC_MORAL_RE.test(normalized)) personType = "moral";
  else {
    if (normalized.length < 12) errors.push("El RFC debe tener 12 o 13 caracteres.");
    else if (normalized.length > 13) errors.push("El RFC no puede tener más de 13 caracteres.");
    else errors.push("El formato del RFC no es válido (revise letras, números y longitud).");
    return {
      valid: false,
      normalized,
      personType: null,
      base: "",
      fecha: "",
      homoclave: "",
      dv: "",
      checkDigitValid: false,
      errors,
    };
  }

  const base = personType === "fisica" ? normalized.slice(0, 4) : normalized.slice(0, 3);
  const fecha = normalized.slice(personType === "fisica" ? 4 : 3, personType === "fisica" ? 10 : 9);
  const homoclave = normalized.slice(personType === "fisica" ? 10 : 9, personType === "fisica" ? 12 : 11);
  const dv = normalized.slice(-1);
  const body = normalized.slice(0, -1);

  if (!isValidDateSegment(fecha)) {
    errors.push("El segmento de fecha (AAMMDD) no es válido.");
  }

  const expectedDv = computeDv(body);
  const checkDigitValid = dv === expectedDv;
  if (!checkDigitValid) {
    errors.push(`El dígito verificador no coincide (esperado: ${expectedDv}).`);
  }

  return {
    valid: errors.length === 0,
    normalized,
    personType,
    base,
    fecha,
    homoclave,
    dv,
    checkDigitValid,
    errors,
  };
};
