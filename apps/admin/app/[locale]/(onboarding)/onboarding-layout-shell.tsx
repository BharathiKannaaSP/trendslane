import { currentUser } from "@/modules/auth/server/current-user"
import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import OnboardingLayout from "@/modules/onboarding/components/onboarding-layout"
import OnboardingStepper from "@/modules/onboarding/components/onboarding-stepper"

export async function OnboardingLayoutShell({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()

  if (!user) return null

  return (
    <div>
      <OnboardingHeader />
      <OnboardingLayout
        stepper={
          <OnboardingStepper
            onboardingStatus={user.onboardingStatus}
            currentStepNo={user.onboardingStepNo}
          />
        }
        sidebar={<div>Sidebar</div>}
      >
        {children}
      </OnboardingLayout>
    </div>
  )
}
