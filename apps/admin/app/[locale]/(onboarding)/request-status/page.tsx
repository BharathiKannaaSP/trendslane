import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import React from "react"

const RequestStatus = async () => {
  const user = await onboardingGate({
    type: "REQUEST_STATUS",
  })

  return (
    <div>
      <OnboardingHeader />
      RequestStatus
      {user.onboardingStatus}, {user.username}, {user.selectedAccountType}
    </div>
  )
}

export default RequestStatus
