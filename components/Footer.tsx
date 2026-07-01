"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaQuora,
  FaReddit,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/socialLinks";
import { ROUTES } from "@/lib/routes";
import { LayoutContainer, SECTION_PADDING_Y } from "./LayoutContainer";
import { Logo } from "./Logo";

const linkClass =
  "font-sans text-sm font-medium tracking-normal text-white/85 transition hover:text-white";

const exploreLinks = [
  { href: ROUTES.consultarRfc, label: "Consultar RFC" },
  { href: ROUTES.rfcConHomoclave, label: "RFC con Homoclave" },
  { href: ROUTES.contacto, label: "Contacto" },
  { href: ROUTES.sobreNosotros, label: "Sobre Nosotros" },
] as const;

const legalLinks = [
  { href: ROUTES.descargoResponsabilidad, label: "Descargo de Responsabilidad" },
  { href: ROUTES.politicaPrivacidad, label: "Política de Privacidad" },
  { href: ROUTES.terminosCondiciones, label: "Términos y Condiciones" },
  { href: ROUTES.autor, label: "Autor" },
] as const;

const socialIconByLabel = {
  Instagram: { icon: FaInstagram, color: "text-[#E4405F]" },
  X: { icon: FaXTwitter, color: "text-slate-900" },
  Reddit: { icon: FaReddit, color: "text-[#FF4500]" },
  Quora: { icon: FaQuora, color: "text-[#B92B27]" },
  YouTube: { icon: FaYoutube, color: "text-[#FF0000]" },
  Pinterest: { icon: FaPinterest, color: "text-[#BD081C]" },
  Facebook: { icon: FaFacebook, color: "text-[#1877F2]" },
} as const;

const socialLinks = SOCIAL_LINKS.map(({ url, label }) => ({
  href: url,
  label,
  ...socialIconByLabel[label],
}));

export function Footer() {
  return (
    <footer className="chrome-gradient site-footer w-full text-white">
      <LayoutContainer className={`${SECTION_PADDING_Y} relative`}>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-4 max-w-sm font-sans text-sm font-normal leading-relaxed text-white/85">
              Estima valores de RFC en formato SAT para persona física con lógica algorítmica pública y transparente —
              gratis y en tu navegador.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Redes sociales">
              {socialLinks.map(({ href, label, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105 hover:shadow-lg"
                >
                  <Icon className={`h-[1.15rem] w-[1.15rem] ${color}`} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-2 md:pl-8">
            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white/70">Explorar</h3>
              <ul className="mt-4 space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white/70">Legal</h3>
              <ul className="mt-4 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </LayoutContainer>

      <div className="border-t border-white/15 bg-black/10 py-4">
        <LayoutContainer>
          <p className="text-center font-sans text-xs text-white/75">
            © {new Date().getFullYear()} CalcularRFC. Todos los derechos reservados.
          </p>
        </LayoutContainer>
      </div>
    </footer>
  );
}
