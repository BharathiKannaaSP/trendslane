import React from "react"
import { onboardingGate } from "@/modules/auth/server/onboarding-gate"

const OnboardingAdditionalDetails = async () => {
  await onboardingGate({
    type: "ADDITIONAL_DETAILS",
  })

  return <>CHANGE FORM TO ADDITIONAL DETAILS</>
}

export default OnboardingAdditionalDetails
