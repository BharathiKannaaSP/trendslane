import React from "react"
import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { UserProfile } from "@clerk/nextjs"

const OnboardingPage = async () => {
  await onboardingGate({
    type: "ONBOARDING",
  })

  return <UserProfile routing="hash" />
}

export default OnboardingPage
