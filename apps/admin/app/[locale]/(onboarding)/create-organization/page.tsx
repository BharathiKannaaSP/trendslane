import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import React from "react"

const CreateOrganization = async () => {
  await onboardingGate({
    type: "ACCOUNT_SELECTION",
    accountType: "ORG_ADMIN",
  })
  return <>NEEDS TO CHANGE FORM CREATE ORG</>
}

export default CreateOrganization
