"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { LayoutContainer, SECTION_PADDING_Y } from "./LayoutContainer";
import { Logo } from "./Logo";

const linkClass =
  "font-sans text-sm font-medium tracking-normal text-white/85 transition hover:text-white";

const exploreLinks = [
  { href: "/consultar-rfc", label: "Consult RFC" },
  { href: "/rfc-con-homoclave", label: "RFC Homoclave" },
  { href: "/contact", label: "Contact Us" },
  { href: "/about", label: "About Us" },
] as const;

const socialLinks = [
  { href: "#", label: "Twitter", icon: FaTwitter, color: "text-[#1DA1F2]" },
  { href: "#", label: "LinkedIn", icon: FaLinkedin, color: "text-[#0A66C2]" },
  { href: "#", label: "Facebook", icon: FaFacebook, color: "text-[#1877F2]" },
  { href: "#", label: "Instagram", icon: FaInstagram, color: "text-[#E4405F]" },
  { href: "#", label: "YouTube", icon: FaYoutube, color: "text-[#FF0000]" },
] as const;

export function Footer() {
  return (
    <footer className="chrome-gradient site-footer w-full text-white">
      <LayoutContainer className={`${SECTION_PADDING_Y} relative`}>
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-4 max-w-sm font-sans text-sm font-normal leading-relaxed text-white/85">
              Estimate SAT-format RFC values for persona física using transparent public algorithm logic—free and
              in-browser.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Social media">
              {socialLinks.map(({ href, label, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
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
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-white/70">Explore</h3>
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
                <li>
                  <Link href="/disclaimer" className={linkClass}>
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className={linkClass}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </LayoutContainer>

      <div className="border-t border-white/15 bg-black/10 py-4">
        <LayoutContainer>
          <p className="text-center font-sans text-xs text-white/75">
            © {new Date().getFullYear()} RFC Generator Mexico. All rights reserved.
          </p>
        </LayoutContainer>
      </div>
    </footer>
  );
}
