import { ApiError } from "../../errors/api-error"
import { mapCurrentUser } from "./user.mapper"
import { getUserByClerkIdRepository } from "./user.repository"

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
