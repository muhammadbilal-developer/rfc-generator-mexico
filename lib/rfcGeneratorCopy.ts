export type RfcGeneratorVariant = "home" | "consultar-rfc" | "rfc-con-homoclave";

type RfcGeneratorCopy = {
  cardTitle: string;
  cardSubtitle: string;
  resultTitle: string;
  submitLabel: string;
  submitLoadingLabel: string;
  sectionBadge?: string;
  sectionTitle?: string;
  sectionDescription?: string;
};

const RFC_GENERATOR_COPY: Record<RfcGeneratorVariant, RfcGeneratorCopy> = {
  home: {
    cardTitle: "Calcular RFC",
    cardSubtitle: "Persona física · Algoritmo público del SAT",
    resultTitle: "RFC estimado",
    submitLabel: "Generar RFC",
    submitLoadingLabel: "Calculando…",
  },
  "consultar-rfc": {
    cardTitle: "Consultar RFC",
    cardSubtitle: "Verifique y valide su identificación fiscal",
    resultTitle: "Resultado de consulta",
    submitLabel: "Consultar RFC",
    submitLoadingLabel: "Consultando…",
    sectionTitle: "Herramienta Para Consultar RFC",
    sectionDescription:
      "Consulte su RFC estimado por datos personales, valide un RFC existente o use su CURP. Tres modos en una sola herramienta, 100 % en su navegador.",
  },
  "rfc-con-homoclave": {
    cardTitle: "RFC con Homoclave",
    cardSubtitle: "Homoclave y dígito verificador incluidos",
    resultTitle: "RFC con homoclave",
    submitLabel: "Calcular RFC con homoclave",
    submitLoadingLabel: "Calculando…",
  },
};

export function getRfcGeneratorCopy(variant: RfcGeneratorVariant): RfcGeneratorCopy {
  return RFC_GENERATOR_COPY[variant];
}
