"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

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
      <p>Verifying account...</p>
    </div>
  )
}
