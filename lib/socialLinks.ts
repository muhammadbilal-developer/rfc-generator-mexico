/** Official CalcularRFC social profiles — used in footer and Organization schema. */
export const SOCIAL_LINKS = [
  { url: "https://www.instagram.com/calcularrfc/", label: "Instagram" },
  { url: "https://x.com/Calcular_rfc", label: "X" },
  { url: "https://www.reddit.com/user/Calcular_rfc/", label: "Reddit" },
  { url: "https://www.quora.com/profile/Calcularrfc", label: "Quora" },
  { url: "https://www.youtube.com/@Calcularrfc-j9e", label: "YouTube" },
  { url: "https://www.pinterest.com/Calcular_rfc/", label: "Pinterest" },
  { url: "https://www.facebook.com/share/1URR3QgASe/", label: "Facebook" },
] as const;

export const SOCIAL_PROFILE_URLS = SOCIAL_LINKS.map((link) => link.url);
