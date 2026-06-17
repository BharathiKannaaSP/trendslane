import { ApiError } from "../../errors/api-error"
import { mapCurrentUser } from "./user.mapper"
import {
  getUserByClerkIdRepository,
  updateCurrentUserRepository,
  updateOnboardingRepository,
} from "./user.repository"
import { UpdateCurrentUserInput, UpdateOnboardingInput } from "./user.types"

export async function getCurrentUserService(clerkUserId?: string) {
  if (!clerkUserId) {
    throw new ApiError(401, "Clerk UserID is missing")
  }

  const user = await getUserByClerkIdRepository(clerkUserId)

  if (!user) {
    throw new ApiError(404, "User not found")
  }

  return mapCurrentUser(user)
}

export async function updateCurrentUserService(
  clerkUserId: string,
  input: UpdateCurrentUserInput
) {
  if (!clerkUserId) {
    throw new ApiError(401, "Clerk UserID is missing")
  }

  return updateCurrentUserRepository(clerkUserId, input)
}

export async function updateOnboardingService(
  clerkUserId: string,
  input: UpdateOnboardingInput
) {
  if (!clerkUserId) {
    throw new ApiError(401, "Clerk UserID is missing")
  }

  return updateOnboardingRepository(clerkUserId, input)
}
