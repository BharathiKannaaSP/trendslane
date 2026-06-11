import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import React from "react"

const JoinOrganization = async () => {
  await onboardingGate({
    type: "ACCOUNT_SELECTION",
    accountType: "ORG_MEMBER",
  })
  return <OnboardingHeader />
}

export default JoinOrganization
