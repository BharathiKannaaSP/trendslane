import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const intlMiddleware = createMiddleware(routing)

const isAuthRoute = createRouteMatcher([
  "/:locale/sign-in(.*)",
  "/:locale/sign-up(.*)",
  "/:locale/legal(.*)",
])

const isProtectedRoute = createRouteMatcher([
  "/:locale",
  "/:locale/onboarding(.*)",
  "/:locale/pending-approval(.*)",
  "/:locale/create-organization(.*)",
])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()

  const locale = req.nextUrl.pathname.split("/")[1] || routing.defaultLocale

  // Not signed in -> redirect to locale sign-in page
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url))
  }

  // Already signed in -> prevent access to auth pages
  if (userId && isAuthRoute(req)) {
    return NextResponse.redirect(new URL(`/${locale}`, req.url))
  }

  return intlMiddleware(req)
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes
    "/__clerk/(.*)",
  ],
}
