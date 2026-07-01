import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/images/brand/logo.webp";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="CalcularRFC home"
      className="inline-flex max-w-[min(100%,20rem)] items-center sm:max-w-none "
    >
      <Image
        src={LOGO_SRC}
        alt="Logo de CalcularRFC"
        title="CalcularRFC — Inicio"
        width={48}
        height={48}
        className={`h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 ${light ? "brightness-0 invert" : ""}`}
        priority
      />
      <span
        className={`truncate text-xl font-bold tracking-tight sm:text-xl ${
          light ? "text-white" : "text-emerald-800"
        }`}
      >
        CalcularRFC
      </span>
    </Link>
  );
}
