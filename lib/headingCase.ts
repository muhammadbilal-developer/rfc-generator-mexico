const ACRONYMS = new Set(["RFC", "SAT", "CURP", "NSS", "UNAM", "CDMX", "DV"]);

/** Title-case each word in headings; preserves common fiscal acronyms. */
export function headingCase(input: string): string {
  return input.replace(/\S+/g, (word) => {
    const match = word.match(/^([^A-Za-zÁÉÍÓÚÜÑáéíóúüñ¿¡]*)([A-Za-zÁÉÍÓÚÜÑáéíóúüñ¿¡]+)([^A-Za-zÁÉÍÓÚÜÑáéíóúüñ¿¡]*)$/);
    if (!match) return word;

    const [, before, core, after] = match;
    if (ACRONYMS.has(core.toUpperCase())) return `${before}${core.toUpperCase()}${after}`;
    return `${before}${core.charAt(0).toUpperCase()}${core.slice(1).toLowerCase()}${after}`;
  });
}
