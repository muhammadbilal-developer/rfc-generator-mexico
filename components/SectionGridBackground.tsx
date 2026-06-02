type SectionGridBackgroundProps = {
  className?: string;
};

/** Hero-style emerald mesh + grid pattern for section backgrounds. */
export function SectionGridBackground({ className = "" }: SectionGridBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 25%, rgba(52, 211, 153, 0.18) 0%, transparent 42%),
            radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.14) 0%, transparent 45%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
