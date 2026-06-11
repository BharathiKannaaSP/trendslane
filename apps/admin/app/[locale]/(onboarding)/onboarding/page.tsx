import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import React from "react"

const OnboardingPage = async () => {
  await onboardingGate({
    type: "ONBOARDING",
  })

  return (
    <>
      <OnboardingHeader />
      <div>Hello</div>
    </>
  )
}

export default OnboardingPage
