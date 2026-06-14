import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import React from "react"

const RequestStatus = async () => {
  await onboardingGate({
    type: "REQUEST_STATUS",
  })

  return <>NEEDS TO CHANGE FORM WAITING APPROVAL</>
}

export default RequestStatus
