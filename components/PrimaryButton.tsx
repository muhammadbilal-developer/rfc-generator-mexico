import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { HashLink } from "./HashLink";

const gradientClass =
  "font-sans inline-flex items-center justify-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-3 text-sm font-semibold tracking-normal text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100";

type PrimaryButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ children, className = "", ...props }: PrimaryButtonProps) {
  return (
    <button type="button" className={`${gradientClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

type PrimaryLinkProps = {
  href?: string;
  sectionId?: string;
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function PrimaryLink({ href = "/", sectionId, children, className = "", onClick }: PrimaryLinkProps) {
  const classes = `${gradientClass} ${className}`;

  if (sectionId) {
    return (
      <HashLink sectionId={sectionId} className={classes} onClick={onClick}>
        {children}
      </HashLink>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
