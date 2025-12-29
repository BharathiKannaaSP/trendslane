import { NextRequest, NextResponse } from 'next/server';
import { handleRoot } from './proxy-utils/handle-root';
import { handleAutoPrefix } from './proxy-utils/handle-auto-prefix';
import { isValidCountry, isValidLanguage } from './proxy-utils/region-validators';
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  // Root
  if (pathname === '/') return handleRoot(req);

  const segments = pathname.split('/').filter(Boolean);

  // Auto prefix
  const autoPrefix = handleAutoPrefix(req, segments);
  if (autoPrefix) return autoPrefix;

  if (segments.length < 2) return handleRoot(req);

  const [country, lang] = segments;

  if (!isValidCountry(country) || !isValidLanguage(lang)) {
    return handleRoot(req);
  }

  const existing = req.cookies.get('web.next.url')?.value;
  if (existing !== req.nextUrl.pathname) {
    const response = NextResponse.next();
    response.cookies.set('web.next.url', req.nextUrl.pathname, { path: '/' });
    return response;
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|png|gif|svg|webp|ico|woff2?|ttf|zip|csv|docx?|xlsx?)).*)',
    '/(api|trpc)(.*)',
  ],
};
