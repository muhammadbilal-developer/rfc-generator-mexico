import {
  ANEXO_I_MAP,
  ANEXO_III_MAP,
  COMMON_FIRST_NAMES,
  HOMO_ALPHABET,
  INCONVENIENT_WORDS,
  PARTICLES,
} from "./constants";

type RfcInput = {
  apellidoPaterno: string;
  apellidoMaterno?: string;
  nombre: string;
  fechaNacimiento: string;
};

export type RfcResult = {
  rfc: string;
  base: string;
  fecha: string;
  homoclave: string;
  dv: string;
};

const VOWELS = new Set(["A", "E", "I", "O", "U"]);

const cleanString = (value: string): string => {
  const normalized = value
    .trim()
    .toUpperCase()
    .replace(/Ñ/g, "__ENYE__")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/__ENYE__/g, "Ñ");

  return normalized.replace(/\s+/g, " ");
};

const removeParticles = (value: string): string => {
  const tokens = cleanString(value)
    .split(" ")
    .filter(Boolean)
    .filter((token) => !PARTICLES.has(token));
  return tokens.join(" ").trim();
};

const safeName = (value?: string): string => removeParticles(value ?? "");

const firstSurnameWord = (value: string): string => {
  const tokens = cleanString(value).split(" ").filter(Boolean);
  return tokens[0] ?? "";
};

const twoLetters = (value: string, fallback = "X"): string =>
  `${value[0] ?? fallback}${value[1] ?? fallback}`;

const firstLetter = (value: string, fallback = "X"): string => value[0] ?? fallback;

const internalVowel = (value: string): string => {
  for (let i = 1; i < value.length; i += 1) {
    if (VOWELS.has(value[i])) return value[i];
  }
  return "X";
};

const effectiveGivenName = (nombre: string): string => {
  const tokens = safeName(nombre).split(" ").filter(Boolean);
  if (!tokens.length) return "";
  if (tokens.length >= 2 && COMMON_FIRST_NAMES.has(tokens[0])) {
    return tokens[1];
  }
  return tokens[0];
};

const formatDate = (dateInput: string): string => {
  const date = new Date(`${dateInput}T00:00:00`);
  if (Number.isNaN(date.getTime())) throw new Error("Invalid birth date.");
  const now = new Date();
  if (date > now) throw new Error("Birth date cannot be in the future.");
  const y = String(date.getFullYear()).slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
};

const mapForHomoclave = (fullName: string): string => {
  const allowed = cleanString(fullName).replace(/[^A-Z0-9Ñ& ]/g, "");
  const digits = allowed
    .split("")
    .map((char) => ANEXO_I_MAP[char] ?? "00")
    .join("");
  return `0${digits}`;
};

const computeHomoclave = (fullName: string): string => {
  const digitChain = mapForHomoclave(fullName);
  let sum = 0;
  for (let i = 0; i < digitChain.length - 1; i += 1) {
    const pair = Number(`${digitChain[i]}${digitChain[i + 1]}`);
    const next = Number(digitChain[i + 1]);
    sum += pair * next;
  }

  const residue = sum % 1000;
  const first = HOMO_ALPHABET[Math.floor(residue / 34)] ?? "1";
  const second = HOMO_ALPHABET[residue % 34] ?? "1";
  return `${first}${second}`;
};

const computeDv = (rfc12: string): string => {
  let sum = 0;
  for (let i = 0; i < rfc12.length; i += 1) {
    const value = ANEXO_III_MAP[rfc12[i]] ?? 0;
    sum += value * (13 - i);
  }
  const residue = sum % 11;
  if (residue === 0) return "0";
  const dv = 11 - residue;
  if (dv === 10) return "A";
  return String(dv);
};

const buildBase = (apellidoPaterno: string, apellidoMaterno: string, nombre: string): string => {
  const patWord = firstSurnameWord(apellidoPaterno);
  const matWord = firstSurnameWord(apellidoMaterno);
  const given = effectiveGivenName(nombre);

  if (!patWord || !given) {
    throw new Error("El apellido paterno y el nombre son obligatorios.");
  }

  let base = "";
  if (!matWord) {
    // REGLA 7ª: un solo apellido → 2 letras del apellido + 2 del nombre.
    base = `${twoLetters(patWord)}${twoLetters(given)}`;
  } else if (patWord.length <= 2) {
    // REGLA 4ª: apellido paterno de 1–2 letras.
    base = `${firstLetter(patWord)}${firstLetter(matWord)}${firstLetter(given)}${given[1] ?? "X"}`;
  } else {
    // REGLA 1ª: estándar (REGLA 5ª: apellido compuesto → primera palabra).
    base = `${firstLetter(patWord)}${internalVowel(patWord)}${firstLetter(matWord)}${firstLetter(given)}`;
  }

  if (INCONVENIENT_WORDS.has(base)) {
    base = `${base.slice(0, 3)}X`;
  }

  return base;
};

export const generateRfc = (input: RfcInput): RfcResult => {
  const apellidoPaterno = safeName(input.apellidoPaterno);
  const apellidoMaterno = safeName(input.apellidoMaterno ?? "");
  const nombre = safeName(input.nombre);
  const fecha = formatDate(input.fechaNacimiento);
  const base = buildBase(input.apellidoPaterno, input.apellidoMaterno ?? "", input.nombre);
  const homoclave = computeHomoclave(`${apellidoPaterno} ${apellidoMaterno} ${nombre}`.trim());
  const rfc12 = `${base}${fecha}${homoclave}`;
  const dv = computeDv(rfc12);
  return { rfc: `${rfc12}${dv}`, base, fecha, homoclave, dv };
};
