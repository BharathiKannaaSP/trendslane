export const allowedCountries = ['in', 'fr', 'us'] as const;
export type Country = (typeof allowedCountries)[number];

export const allowedLanguages = ['en', 'fr', 'hi', 'ta'] as const;
export type Language = (typeof allowedLanguages)[number];

export const autoPrefixSections = ['c', 'h', 'p', 'cart', 'orders'];

export const AUDIENCE_ORDER = ['women', 'men', 'teen', 'kids'] as const;
export type Audience = (typeof AUDIENCE_ORDER)[number];