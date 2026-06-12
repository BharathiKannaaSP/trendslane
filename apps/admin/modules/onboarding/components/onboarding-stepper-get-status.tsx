import { OnboardingStatus, OnboardingStep } from "@workspace/shared"
import {
  ONBOARDING_STEPPER_STATUS,
  ONBOARDING_STEPS,
} from "../constants/onboarding-constants"

export function getStepperStatus(
  stepId: OnboardingStep,
  currentStep: OnboardingStep,
  onboardingStatus: OnboardingStatus
): ONBOARDING_STEPPER_STATUS {
  if (
    onboardingStatus === OnboardingStatus.WAITING_APPROVAL ||
    onboardingStatus === OnboardingStatus.APPROVED
  ) {
    return ONBOARDING_STEPPER_STATUS.COMPLETED
  }

  if (onboardingStatus === OnboardingStatus.REJECTED) {
    return ONBOARDING_STEPPER_STATUS.REJECTED
  }

  const stepIndex = ONBOARDING_STEPS.findIndex((step) => step.id === stepId)

  const currentIndex = ONBOARDING_STEPS.findIndex(
    (step) => step.id === currentStep
  )

  if (stepIndex < currentIndex) {
    return ONBOARDING_STEPPER_STATUS.COMPLETED
  }

  if (stepIndex === currentIndex) {
    return ONBOARDING_STEPPER_STATUS.CURRENT
  }

  return ONBOARDING_STEPPER_STATUS.UPCOMING
}

export const getStepState = (status: ONBOARDING_STEPPER_STATUS) => ({
  isCompleted: status === ONBOARDING_STEPPER_STATUS.COMPLETED,
  isCurrent: status === ONBOARDING_STEPPER_STATUS.CURRENT,
  isRejected: status === ONBOARDING_STEPPER_STATUS.REJECTED,
  isUpcoming: status === ONBOARDING_STEPPER_STATUS.UPCOMING,
})

export const STATUS_CONTENT: Record<
  Exclude<
    OnboardingStatus,
    OnboardingStatus.PENDING | OnboardingStatus.IN_PROGRESS
  >,
  {
    title: string
    description: string
  }
> = {
  [OnboardingStatus.WAITING_APPROVAL]: {
    title: "Waiting for Approval",
    description:
      "Your onboarding request has been submitted and is under review.",
  },

  [OnboardingStatus.APPROVED]: {
    title: "Onboarding Complete",
    description: "Your account has been approved and is ready to use.",
  },

  [OnboardingStatus.REJECTED]: {
    title: "Request Rejected",
    description: "Please review the feedback and resubmit your request.",
  },
}
