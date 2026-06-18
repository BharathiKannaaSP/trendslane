"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

import { Spinner } from "@workspace/ui/components/spinner"

import {
  getLocaleFromCookie,
  setClientCookie,
} from "@/lib/cookies-utils/client"

import {
  useCurrentUser,
  useCurrentUserUpdate,
  useUpdateCurrentUserThemePreferences,
} from "@/modules/users/api/auth.repository.hooks"

import { ThemeMode } from "@workspace/shared"

export default function VerifyingPage() {
  const router = useRouter()
  const hasVerified = useRef(false)

  const { isLoaded, isSignedIn } = useAuth()

  const { data: currentUser, isLoading: isUserLoading } = useCurrentUser()
  const updateCurrentUser = useCurrentUserUpdate()
  const updateUserThemePreferences = useUpdateCurrentUserThemePreferences()

  useEffect(() => {
    if (
      !isLoaded ||
      !isSignedIn ||
      isUserLoading ||
      !currentUser ||
      hasVerified.current
    ) {
      return
    }

    hasVerified.current = true

    const user = currentUser.user

    async function verify() {
      try {
        const locale = getLocaleFromCookie()
        const themeMode = localStorage
          .getItem("theme")
          ?.toUpperCase() as ThemeMode

        // Sync theme mode
        const themePreferences = user.userThemePreferences
        if (themeMode && themePreferences.themeMode !== themeMode) {
          await updateUserThemePreferences.mutateAsync({
            themeMode,
          })
          // Store latest appearance in cookie
          setClientCookie("appearance", JSON.stringify(themePreferences))
        }

        // Sync language
        if (user.language !== locale) {
          await updateCurrentUser.mutateAsync({
            language: locale,
          })
        }

        router.replace("/")
      } catch (error) {
        console.error("Verification failed:", error)
        router.replace("/")
      }
    }

    verify()
  }, [
    isLoaded,
    isSignedIn,
    isUserLoading,
    currentUser,
    updateCurrentUser,
    updateUserThemePreferences,
    router,
  ])

  return (
    <div className="flex min-h-screen items-center justify-center gap-2">
      <Spinner />
      <p>Verifying account...</p>
    </div>
  )
}
