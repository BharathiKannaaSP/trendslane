import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import React from "react"

const BecomeAdmin = async () => {
  await onboardingGate({
    type: "ACCOUNT_SELECTION",
    accountType: "ADMIN",
  })
  return <>NEEDS TO CHANGE FORM ADMIN</>
}

export default BecomeAdmin
