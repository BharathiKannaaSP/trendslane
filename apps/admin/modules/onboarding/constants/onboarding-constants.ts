import { OnboardingStatus } from "@workspace/shared"
import {
  StepperStep,
  StepperStepStatus,
} from "@workspace/ui/components/wizard-stepper"
import { OnboardingStep } from "@workspace/shared"

export const ONBOARDING_STEPS = [
  {
    id: OnboardingStep.BASIC_INFORMATION,
    title: "Basic Information",
    description: "Tell us your basic details",
  },
  {
    id: OnboardingStep.ADDITIONAL_DETAILS,
    title: "Choose Your Path",
    description: "Select how you want to use Trendslane",
  },
  {
    id: OnboardingStep.ROLE_REQUIREMENTS,
    title: "Role Requirements",
    description: "Provide details and submit your request",
  },
] as const

export function getOnboardingSteps(
  onboardingStatus: OnboardingStatus
): StepperStep[] {
  return ONBOARDING_STEPS.map((step, index) => ({
    ...step,
    status:
      index === ONBOARDING_STEPS.length - 1
        ? onboardingStatus === OnboardingStatus.WAITING_APPROVAL
          ? StepperStepStatus.WAITING_APPROVAL
          : onboardingStatus === OnboardingStatus.APPROVED
            ? StepperStepStatus.SUCCESS
            : onboardingStatus === OnboardingStatus.REJECTED
              ? StepperStepStatus.REJECTED
              : undefined
        : undefined,
  }))
}
