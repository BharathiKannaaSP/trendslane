import { OnboardingStatus } from "@workspace/shared"
import { Stepper } from "@workspace/ui/components/wizard-stepper"
import { getOnboardingSteps } from "../constants/onboarding-constants"

type OnboardingStepperProps = {
  onboardingStatus: OnboardingStatus
  currentStepNo: number
}

const OnboardingStepper = ({
  onboardingStatus,
  currentStepNo,
}: OnboardingStepperProps) => {
  return (
    <Stepper
      currentStep={currentStepNo}
      steps={getOnboardingSteps(onboardingStatus)}
    />
  )
}

export default OnboardingStepper
