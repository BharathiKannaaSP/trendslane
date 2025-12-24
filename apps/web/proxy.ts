import { NextRequest } from 'next/server';
import { handleRoot } from './proxy-utils/handle-root';
import { handleAutoPrefix } from './proxy-utils/handle-auto-prefix';
import { isValidCountry, isValidLanguage } from './proxy-utils/region-validators';
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const proxy = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  // Root
  if (pathname === '/') return handleRoot(req);

  // Segments
  const segments = pathname.split('/').filter(Boolean);

  // Auto prefix
  const autoPrefix = handleAutoPrefix(req, segments);
  if (autoPrefix) return autoPrefix;

  // If less than 2 segments, redirect to root handler
  if (segments.length < 2) return handleRoot(req);

  const [country, lang] = segments;

  // Validate country and language
  if (!isValidCountry(country) || !isValidLanguage(lang)) return handleRoot(req);
};

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
