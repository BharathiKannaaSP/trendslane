import { prisma } from "@workspace/auth-db"
import { currentUserInclude, UpdateOnboardingInput } from "./user.types"

export async function getUserByClerkIdRepository(clerkUserId: string) {
  const start = performance.now()

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId,
    },
    ...currentUserInclude,
  })

  console.log("prisma findUnique", Math.round(performance.now() - start), "ms")

  return user
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
