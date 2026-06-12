import { OnboardingStep } from "@workspace/shared"

export enum ONBOARDING_STEPPER_STATUS {
  COMPLETED = "COMPLETED",
  REJECTED = "REJECTED",
  UPCOMING = "UPCOMING",
  CURRENT = "CURRENT",
}

export const ONBOARDING_STEPS = [
  {
    id: OnboardingStep.BASIC_INFORMATION,
    title: "Basic Information",
    description: "Tell us your basic details",
    order: 1,
  },
  {
    id: OnboardingStep.ADDITIONAL_DETAILS,
    title: "Choose Your Path",
    description: "Select how you want to use Trendslane",
    order: 2,
  },
  {
    id: OnboardingStep.ORGANIZATION_SELECTION,
    title: "Role requirements",
    description: "Provide details and submit your request",
    order: 3,
  },
] as const
