import { AUTHOR } from "./author";
import { ROUTES } from "./routes";
import { SITE_LOGO_PATH } from "./site";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rfc-generator-mexico.vercel.app";
export const SITE_NAME = "CalcularRFC";
export const SITE_LEGAL_NAME = "RFC Generator Mexico";

type BreadcrumbItem = { name: string; path: string };

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO_PATH}`,
    description:
      "Calculadora gratuita en línea para estimar el RFC de persona física en formato SAT con lógica algorítmica pública y transparente.",
    sameAs: [],
  };
}

export function webApplicationJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MXN",
    },
    provider: {
      "@type": "Organization",
      name: SITE_LEGAL_NAME,
      url: SITE_URL,
    },
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "es-MX",
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageJsonLd(items: ReadonlyArray<{ readonly q: string; readonly a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function authorPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    description: AUTHOR.bio,
    image: `${SITE_URL}${AUTHOR.image}`,
    url: `${SITE_URL}${ROUTES.autor}`,
    alumniOf: AUTHOR.education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.split("—")[1]?.trim() ?? item,
    })),
    worksFor: {
      "@type": "Organization",
      name: SITE_LEGAL_NAME,
      url: SITE_URL,
    },
    knowsAbout: [
      "RFC México",
      "SAT",
      "Homoclave",
      "CURP",
      "Persona física",
      "Identificación fiscal",
    ],
  };
}

export function authorProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `Autor — ${AUTHOR.name}`,
    url: `${SITE_URL}${ROUTES.autor}`,
    mainEntity: {
      "@type": "Person",
      name: AUTHOR.name,
      image: `${SITE_URL}${AUTHOR.image}`,
      url: `${SITE_URL}${ROUTES.autor}`,
    },
    inLanguage: "es-MX",
  };
}
