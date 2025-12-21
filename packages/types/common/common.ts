export const allowedCountries = ['in', 'fr', 'us'] as const;
export type Country = (typeof allowedCountries)[number];


export const allowedLanguages = ['en', 'fr', 'hi', 'ta'] as const;
export type Language = (typeof allowedLanguages)[number];