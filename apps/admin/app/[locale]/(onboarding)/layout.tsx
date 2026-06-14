import { OnboardingHeader } from "@/modules/onboarding/components/onboarding-header"
import OnboardingLayout from "@/modules/onboarding/components/onboarding-layout"
import OnboardingStepper from "@/modules/onboarding/components/onboarding-stepper"
import { authRepositoryServer } from "@/modules/users/api/auth.repository.server"

export default async function OnboardingLayoutAppearance({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await authRepositoryServer.getCurrentUser()

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
        sidebar={<div className="">Sidebar</div>}
      >
        {children}
      </OnboardingLayout>
    </div>
  )
}
