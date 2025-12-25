import { NextRequest, NextResponse } from 'next/server';
import { handleRoot } from './proxy-utils/handle-root';
import { handleAutoPrefix } from './proxy-utils/handle-auto-prefix';
import { isValidCountry, isValidLanguage } from './proxy-utils/region-validators';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { CustomJWTSessionClaims } from '@workspace/types';

const isPublicRoute = createRouteMatcher([
  '/:country/:lang/sign-in(.*)',
  '/:country/:lang/unauthorized(.*)',
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  /**
   * --------------------
   * 1. Proxy logic first
   * --------------------
   */
  const pathname = req.nextUrl.pathname;

  if (pathname === '/') return handleRoot(req);

  const segments = pathname.split('/').filter(Boolean);

  const autoPrefix = handleAutoPrefix(req, segments);
  if (autoPrefix) return autoPrefix;

  if (segments.length < 2) return handleRoot(req);

  const [country, lang] = segments;

  if (!isValidCountry(country) || !isValidLanguage(lang)) {
    return handleRoot(req);
  }

  /**
   * --------------------
   * 2. Auth logic
   * --------------------
   */
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  const { userId, sessionClaims } = await auth();

  if (!userId) {
    const url = req.nextUrl.clone();
    url.pathname = `/${country}/${lang}/sign-in`;
    return NextResponse.redirect(url);
  }

  const role = (sessionClaims as CustomJWTSessionClaims)?.metadata?.role;

  if (role !== 'admin' && role !== 'superAdmin') {
    return NextResponse.redirect(new URL(`/${country}/${lang}/unauthorized`, req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
