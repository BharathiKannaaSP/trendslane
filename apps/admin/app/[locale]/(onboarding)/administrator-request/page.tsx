import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import React from "react"

const AdministratorRequest = async () => {
  await onboardingGate({
    type: "ACCOUNT_SELECTION",
    accountType: "ADMIN",
  })
  return <OnboardingHeader />
}

export default AdministratorRequest
