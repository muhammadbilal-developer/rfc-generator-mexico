import Link from "next/link";
import { HiMiniShieldCheck } from "react-icons/hi2";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  const textColor = light ? "text-white" : "text-text-primary";
  const chipBg = light ? "bg-white/10" : "bg-emerald-100";

  return (
    <Link
      href="/"
      aria-label="RFC Generator home"
      className="inline-flex max-w-[min(100%,14rem)] items-center gap-2 font-sans tracking-normal sm:max-w-none sm:gap-2.5"
    >
      <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 sm:rounded-xl ${chipBg}`}>
        <HiMiniShieldCheck className={`h-4 w-4 sm:h-5 sm:w-5 ${light ? "text-white" : "text-emerald-600"}`} />
      </span>
      <span className={`min-w-0 truncate text-xs font-semibold leading-tight sm:text-sm md:text-base lg:text-lg ${textColor}`}>
        RFC{" "}
        <span className={light ? "font-semibold text-white/90" : "text-text-secondary"}>Generator Mexico</span>
      </span>
    </Link>
  );
}
