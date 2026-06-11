import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import React from "react"

const CreateOrganization = async () => {
  await onboardingGate({
    type: "ACCOUNT_SELECTION",
    accountType: "ORG_ADMIN",
  })
  return <OnboardingHeader />
}

export default CreateOrganization
