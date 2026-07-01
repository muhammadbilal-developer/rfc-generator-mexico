import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspectRatio?: "4/3" | "3/4";
};

const ASPECT = {
  "4/3": {
    width: 960,
    height: 720,
    wrapperClass: "p-3 sm:p-4",
    imageClass: "h-auto max-h-[420px] w-full object-contain object-center",
  },
  "3/4": {
    width: 1200,
    height: 1312,
    wrapperClass: "p-0",
    imageClass: "block h-auto w-full",
  },
} as const;

/** Section image — full illustration visible, no cropping (unless aspectRatio is set). */
export function ContentImage({
  src,
  alt,
  title,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
  aspectRatio = "4/3",
}: ContentImageProps) {
  const aspect = ASPECT[aspectRatio];

  return (
    <div
      className={`overflow-hidden rounded-xl border border-emerald-100/80 bg-white shadow-[0_16px_40px_rgba(16,185,129,0.1)] ${aspect.wrapperClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        width={aspect.width}
        height={aspect.height}
        sizes={sizes}
        priority={priority}
        className={aspect.imageClass}
      />
    </div>
  );
}
