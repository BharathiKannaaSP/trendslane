import React from "react"
import { onboardingGate } from "@/modules/auth/server/onboarding-gate"

const Rejected = async () => {
  await onboardingGate({
    type: "REJECTED",
  })

  return (
    <>
      NEEDS TO CHANGE FORM REJECTED ORG
    </>
  )
}

export default Rejected
