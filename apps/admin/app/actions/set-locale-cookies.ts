'use server';

import { redirect } from 'next/navigation';
import { getCookie, setCookie } from './cookie-helper';

export async function setLocaleCookies(country: string, lang: string) {
  setCookie('country', country);
  setCookie('lang', lang);

  const currentPath = await getCookie('next.url'); // set via middleware

  if (currentPath) {
    const segments = currentPath.split('/').filter(Boolean);

    segments[0] = country;
    segments[1] = lang;

    const newPath = '/' + segments.join('/');

    return redirect(newPath);
  }

  // Fallback if something fails
  redirect(`/${country}/${lang}`);
}
