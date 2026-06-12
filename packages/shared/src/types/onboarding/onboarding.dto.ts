import { AccountType } from "../auth"

export enum OnboardingStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_APPROVAL = "WAITING_APPROVAL",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum OnboardingStep {
  BASIC_INFORMATION = "BASIC_INFORMATION",
  ADDITIONAL_DETAILS = "ADDITIONAL_DETAILS",
  ORGANIZATION_SELECTION = "ORGANIZATION_SELECTION",
  COMPLETED = "COMPLETED",
}

export interface OnboardingProgressDto {
  onboardingStatus: OnboardingStatus
  onboardingStep: OnboardingStep
  selectedAccountType: AccountType | null
}
