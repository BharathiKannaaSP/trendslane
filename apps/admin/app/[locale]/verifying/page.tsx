"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "@workspace/ui/components/spinner"

export default function VerifyingPage() {
  const { isLoaded, isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoaded) return

    if (isSignedIn) {
      router.replace("/")
    }
  }, [isLoaded, isSignedIn, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner />
      <p>Verifying account...</p>
    </div>
  )
}
