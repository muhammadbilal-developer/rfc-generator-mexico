/** Rotating section backgrounds — three colors, no consecutive duplicates. */
export const SECTION_BACKGROUNDS = ["bg-section-fog", "bg-section-pearl", "bg-section-mint"] as const;

export function getSectionBackground(index: number): (typeof SECTION_BACKGROUNDS)[number] {
  return SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
}
