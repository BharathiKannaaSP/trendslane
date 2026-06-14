import React, { Suspense } from "react"
import { onboardingGate } from "@/modules/auth/server/onboarding-gate"
import { Spinner } from "@workspace/ui/components/spinner"
import OnboardBasicInfoCard from "@/modules/onboarding/components/forms/onboarding-basic-card"

const OnboardingPage = async () => {
  await onboardingGate({
    type: "ONBOARDING",
  })

  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <OnboardBasicInfoCard />
    </Suspense>
  )
}

export default OnboardingPage
