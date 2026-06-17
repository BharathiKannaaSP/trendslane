import { OnboardingStatus, OnboardingStep, Prisma } from "@workspace/auth-db"

export const currentUserInclude = Prisma.validator<Prisma.UserDefaultArgs>()({
  include: {
    preferences: true,
    memberships: {
      include: {
        organization: true,
      },
    },
  },
})

export type CurrentUser = Prisma.UserGetPayload<typeof currentUserInclude>

export type UpdateCurrentUserInput = Prisma.UserGetPayload<typeof currentUserInclude>
export type UpdateOnboardingInput = {
  onboardingStep: OnboardingStep
  onboardingStatus: OnboardingStatus
  onboardingStepNo: number
}
