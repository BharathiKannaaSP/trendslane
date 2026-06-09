export const RTL_LOCALES = ["ar", "he", "fa", "ur"] as const

export function getDirection(locale: string) {
  return RTL_LOCALES.includes(locale as (typeof RTL_LOCALES)[number])
    ? "rtl"
    : "ltr"
}
