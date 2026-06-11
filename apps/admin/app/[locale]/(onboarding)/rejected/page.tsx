import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import React from "react"

const Rejected = async () => {
  const user = await onboardingGate({
    type: "REJECTED",
  })

  console.log("REJECTED PAGE RENDERED")
  return (
    <div>
      <OnboardingHeader />
      Rejected
      {user.onboardingStatus}, {user.username}, {user.selectedAccountType}
    </div>
  )
}

export default Rejected
