/** Central route paths — Spanish slugs for content pages. */
export const ROUTES = {
  home: "/",
  consultarRfc: "/consultar-rfc",
  rfcConHomoclave: "/rfc-con-homoclave",
  contacto: "/contacto",
  sobreNosotros: "/sobre-nosotros",
  descargoResponsabilidad: "/descargo-de-responsabilidad",
  politicaPrivacidad: "/politica-de-privacidad",
  terminosCondiciones: "/terminos-y-condiciones",
  autor: "/autor",
} as const;

/** Pages excluded from sitemap and search indexing. */
export const NOINDEX_ROUTES = [
  ROUTES.autor,
  ROUTES.politicaPrivacidad,
  ROUTES.terminosCondiciones,
  ROUTES.descargoResponsabilidad,
] as const;
