import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  /** default = home; subtle = consultar-rfc; vivid = homoclave */
  variant?: "default" | "subtle" | "vivid";
};

/** Left-weighted scrim keeps copy readable; right side shows more of the image. */
const variantOverlays = {
  default:
    "bg-gradient-to-r from-white/96 via-white/74 to-white/42 lg:from-white/94 lg:via-white/64 lg:to-white/30",
  subtle:
    "bg-gradient-to-r from-white/97 via-white/80 to-white/46 lg:from-white/95 lg:via-white/70 lg:to-white/34",
  vivid:
    "bg-gradient-to-r from-white/95 via-white/72 to-white/40 lg:from-white/92 lg:via-white/60 lg:to-white/28",
} as const;

/** Full-bleed hero image filling the section. */
export function HeroBackground({
  src,
  alt,
  title,
  priority = false,
  variant = "default",
}: HeroBackgroundProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden bg-emerald-50/30">
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        sizes="100vw"
        className="scale-105 object-cover object-center opacity-60"
        priority={priority}
        fetchPriority={priority ? "high" : "low"}
        loading={priority ? "eager" : "lazy"}
      />
      <div className={`absolute inset-0 ${variantOverlays[variant]}`} />
      <div className="absolute inset-0 bg-white/12" />
      <div className="absolute inset-0 bg-emerald-950/[0.10]" />
    </div>
  );
}
