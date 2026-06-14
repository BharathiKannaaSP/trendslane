import React from "react"
import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import OnboardBasicInfoCard from "@/modules/onboarding/components/onboarding-basic-info/onboarding-basic-card"

const OnboardingPage = async () => {
  const user = await onboardingGate({
    type: "ONBOARDING",
  })

  return <OnboardBasicInfoCard user={user} />
}

export default OnboardingPage
