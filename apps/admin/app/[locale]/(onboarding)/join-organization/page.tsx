import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import React from "react"

const JoinOrganization = async () => {
  await onboardingGate({
    type: "ACCOUNT_SELECTION",
    accountType: "ORG_MEMBER",
  })
  return <>NEEDS TO CHANGE FORM JOIN ORG</>
}

export default JoinOrganization
