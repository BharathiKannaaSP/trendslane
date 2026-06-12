import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import OnboardingLayout from "@/modules/onboarding/components/onboarding-layout"
import OnboardingStepper from "@/modules/onboarding/components/onboarding-stepper"
import OnboardingBasicInformationForm from "@/modules/onboarding/forms/onboarding-basic-information-form"
import React from "react"

const RequestStatus = async () => {
  const user = await onboardingGate({
    type: "REQUEST_STATUS",
  })

  return (
    <>
      <OnboardingHeader />
      <OnboardingLayout
        stepper={
          <OnboardingStepper
            onboardingStatus={user.onboardingStatus}
            onboardingStep={user.onboardingStep}
          />
        }
      >
        NEEDS TO CHANGE FORM WAITING APPROVAL
        <OnboardingBasicInformationForm />
      </OnboardingLayout>
    </>
  )
}

export default RequestStatus
