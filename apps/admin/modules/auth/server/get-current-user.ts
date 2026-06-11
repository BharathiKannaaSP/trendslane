import { authRepository } from "@/modules/users/api/auth.repository"

export async function getCurrentUser() {
  try {
    const { user } = await authRepository.getCurrentUser()
    return user
  } catch {
    return null
  }
}
