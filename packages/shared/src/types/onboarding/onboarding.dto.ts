import z from "zod"

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
  ROLE_REQUIREMENTS = "ROLE_REQUIREMENTS",
  COMPLETED = "COMPLETED",
}

export const updateOnboardingSchema = z.object({
  onboardingStep: z.nativeEnum(OnboardingStep),
  onboardingStatus: z.nativeEnum(OnboardingStatus),
  onboardingStepNo: z.number().int().min(1).max(4),
})

export type UpdateOnboardingInput = z.infer<typeof updateOnboardingSchema>

