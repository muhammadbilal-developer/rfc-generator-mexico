import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspectRatio?: "4/3" | "3/4" | "auto";
};

const SECTION_IMAGE_SIZES = "(max-width: 640px) 360px, (max-width: 1024px) 480px, 520px";

const ASPECT = {
  "4/3": {
    width: 640,
    height: 480,
    wrapperClass: "p-3 sm:p-4",
    imageClass: "h-auto max-h-[420px] w-full object-contain object-center",
  },
  "3/4": {
    width: 720,
    height: 960,
    wrapperClass: "p-0",
    imageClass: "block h-auto w-full",
  },
  auto: {
    width: 640,
    height: 480,
    wrapperClass: "p-2 sm:p-3",
    imageClass: "block h-auto w-full object-contain",
  },
} as const;

/** Section image — full illustration visible, no cropping (unless aspectRatio is set). */
export function ContentImage({
  src,
  alt,
  title,
  priority = false,
  sizes = SECTION_IMAGE_SIZES,
  className = "",
  aspectRatio = "4/3",
}: ContentImageProps) {
  const aspect = ASPECT[aspectRatio];

  return (
    <div
      className={`overflow-hidden rounded-xl border border-emerald-100/80 bg-white shadow-[0_16px_40px_rgba(16,185,129,0.10)] ${aspect.wrapperClass} ${className}`}
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
