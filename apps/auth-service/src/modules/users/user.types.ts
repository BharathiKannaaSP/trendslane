import { OnboardingStatus, OnboardingStep, Prisma } from "@workspace/auth-db"

export const currentUserInclude = Prisma.validator<Prisma.UserDefaultArgs>()({
  include: {
    memberships: {
      include: {
        organization: true,
      },
    },
  },
})

export type CurrentUser = Prisma.UserGetPayload<typeof currentUserInclude>

export type UpdateOnboardingInput = {
  onboardingStep: OnboardingStep
  onboardingStatus: OnboardingStatus
  onboardingStepNo: number
}
