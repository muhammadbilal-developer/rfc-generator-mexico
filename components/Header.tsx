"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiZap } from "react-icons/fi";
import { SECTION_IDS } from "@/lib/hashNav";
import { HashLink } from "./HashLink";
import { LayoutContainer } from "./LayoutContainer";
import { Logo } from "./Logo";
import { PrimaryLink } from "./PrimaryButton";

const links = [
  { id: SECTION_IDS.generator, label: "Generator" },
  { id: SECTION_IDS.howItWorks, label: "How It Works" },
  { id: SECTION_IDS.generatorInfo, label: "Information" },
  { id: SECTION_IDS.faq, label: "FAQ" },
  { href: "/contact", label: "Contact", isPage: true as const },
];

const navLinkClass =
  "font-sans rounded-lg px-2.5 py-2 text-sm font-semibold tracking-wide transition lg:px-3.5 lg:tracking-[0.04em]";

const ctaClass =
  "font-sans inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-md lg:px-5";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`chrome-gradient site-header text-white transition-[box-shadow] duration-300 ${
          scrolled ? "shadow-lg shadow-emerald-950/25 backdrop-blur-sm" : ""
        }`}
      >
        <LayoutContainer className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <nav
            className="flex items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4 md:py-5"
            aria-label="Main navigation"
          >
            <div className="min-w-0 shrink">
              <Logo light />
            </div>

            <ul className="hidden items-center gap-0.5 lg:flex lg:gap-1">
              {links.map((link) =>
                "isPage" in link && link.isPage ? (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${navLinkClass} ${
                        pathname === link.href
                          ? "bg-white/15 text-white"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.id}>
                    <HashLink sectionId={link.id} className={`${navLinkClass} text-white/90 hover:bg-white/10 hover:text-white`}>
                      {link.label}
                    </HashLink>
                  </li>
                ),
              )}
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <div className="header-cta-desktop max-md:hidden">
                <PrimaryLink sectionId={SECTION_IDS.generator} className={ctaClass}>
                  <FiZap className="h-4 w-4 shrink-0" aria-hidden />
                  Try Free
                </PrimaryLink>
              </div>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="inline-flex rounded-lg border border-white/20 bg-white/10 p-2.5 text-white transition hover:bg-white/15 lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </LayoutContainer>

        {open && (
          <div className="border-t border-white/15 bg-emerald-900/95 backdrop-blur-sm lg:hidden">
            <LayoutContainer className="px-4 py-4 sm:px-6">
              <ul className="space-y-0.5">
                {links.map((link) =>
                  "isPage" in link && link.isPage ? (
                    <li key={link.href}>
                      <Link href={link.href} className={`${navLinkClass} block py-3 text-white hover:bg-white/10`} onClick={closeMenu}>
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <HashLink
                        sectionId={link.id}
                        className={`${navLinkClass} block py-3 text-white hover:bg-white/10`}
                        onClick={() => closeMenu()}
                      >
                        {link.label}
                      </HashLink>
                    </li>
                  ),
                )}
              </ul>
            </LayoutContainer>
          </div>
        )}
      </header>
      <div aria-hidden className="h-[var(--header-offset)] shrink-0" />
    </>
  );
}
