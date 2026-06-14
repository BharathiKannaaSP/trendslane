import { prisma } from "@workspace/auth-db"
import { currentUserInclude, UpdateOnboardingInput } from "./user.types"

export async function getUserByClerkIdRepository(clerkUserId: string) {
  return prisma.user.findUnique({
    where: {
      clerkUserId,
    },
    ...currentUserInclude,
  })
}

export async function updateOnboardingRepository(
  clerkUserId: string,
  data: UpdateOnboardingInput
) {
  return prisma.user.update({
    where: {
      clerkUserId,
    },
    data: {
      onboardingStep: data.onboardingStep,
      onboardingStatus: data.onboardingStatus,
      onboardingStepNo: data.onboardingStepNo,
    },
  })
}
