import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Section image — full illustration visible, no cropping. */
export function ContentImage({
  src,
  alt,
  title,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: ContentImageProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-emerald-100/80 bg-white p-3 shadow-[0_16px_40px_rgba(16,185,129,0.1)] sm:p-4 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        width={960}
        height={720}
        sizes={sizes}
        priority={priority}
        className="h-auto max-h-[420px] w-full object-contain object-center"
      />
    </div>
  );
}
