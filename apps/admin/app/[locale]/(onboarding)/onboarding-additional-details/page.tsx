import React from "react"
import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import OnboardingAdditionalDetails from "@/modules/onboarding/components/onboarding-additional-details/onboarding-additional-details"

const OnboardingAdditionalDetailsPage = async () => {
  const user = await onboardingGate({
    type: "ADDITIONAL_DETAILS",
  })

  return <OnboardingAdditionalDetails user={user} />
}

export default OnboardingAdditionalDetailsPage
