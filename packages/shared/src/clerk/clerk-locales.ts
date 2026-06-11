import {
    arSA,
    deDE,
    enUS,
    frFR,
    hiIN,
    taIN,
} from "@clerk/localizations"

export const clerkLocales: {
    en: typeof enUS
    de: typeof deDE
    ta: typeof taIN
    hi: typeof hiIN
    ar: typeof arSA
    fr: typeof frFR
} = {
    en: enUS,
    de: deDE,
    ta: taIN,
    hi: hiIN,
    ar: arSA,
    fr: frFR,
}

export function mapClerkLocale(locale: string): typeof enUS {
    return clerkLocales[locale as keyof typeof clerkLocales] ?? enUS
}
