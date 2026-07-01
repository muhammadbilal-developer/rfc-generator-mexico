import type { MetadataRoute } from "next";
import { manifestIcons } from "@/lib/favicons";
import { SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CalcularRFC | Calculadora RFC México",
    short_name: "CalcularRFC",
    description:
      "Calculadora gratuita para estimar el RFC de persona física en formato SAT con lógica algorítmica pública.",
    start_url: "/",
    scope: "/",
    id: SITE_URL,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#047857",
    lang: "es-MX",
    icons: manifestIcons.map((icon) => ({
      src: icon.src,
      sizes: icon.sizes,
      type: icon.type,
      purpose: icon.purpose,
    })),
  };
}
