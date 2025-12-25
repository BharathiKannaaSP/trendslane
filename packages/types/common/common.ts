export const allowedCountries = ['in', 'fr', 'us'] as const;
export type Country = (typeof allowedCountries)[number];

export const allowedLanguages = ['en', 'fr', 'hi', 'ta'] as const;
export type Language = (typeof allowedLanguages)[number];

export const autoPrefixSections = ['c', 'h', 'p', 'cart', 'orders', 'test'];

export const AUDIENCE_ORDER = ['women', 'men', 'teen', 'kids'] as const;
export type Audience = (typeof AUDIENCE_ORDER)[number];

const COUNTRY_NAME_MAP: Record<Country, string> = {
  in: 'India',
  us: 'United States',
  fr: 'France',
};

export function getFullCountryName(country?: string): string {
  if (!country) return '';

  return COUNTRY_NAME_MAP[country as Country] ?? country;
}
