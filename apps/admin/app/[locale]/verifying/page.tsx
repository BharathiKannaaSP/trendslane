"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "@workspace/ui/components/spinner"
import { getLocaleFromCookie } from "@/lib/cookies-utils/client"
import {
  useCurrentUser,
  useCurrentUserLanguageUpdate,
} from "@/modules/users/api/auth.repository.hooks"

export default function VerifyingPage() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  const { data: currentUser, isLoading: isUserLoading } = useCurrentUser()
  const updateCurrentUser = useCurrentUserLanguageUpdate()

  const hasVerified = useRef(false)

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

    async function verify() {
      try {
        const locale = getLocaleFromCookie()

        const appearance = currentUser?.user?.preferences

        if (appearance) {
          document.cookie = `appearance=${encodeURIComponent(
            JSON.stringify(appearance)
          )}; path=/; max-age=31536000`
        }

        if (currentUser?.user?.language !== locale) {
          await updateCurrentUser.mutateAsync({
            language: locale,
          })
        }

        router.replace("/")
      } catch (error) {
        console.error(error)
        router.replace("/")
      }
    }

    verify()
  }, [
    isLoaded,
    isSignedIn,
    isUserLoading,
    currentUser,
    router,
    updateCurrentUser,
  ])

  return (
    <div className="flex min-h-screen items-center justify-center gap-2">
      <Spinner />
      <p>Verifying account...</p>
    </div>
  )
}
