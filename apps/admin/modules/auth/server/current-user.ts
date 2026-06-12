import { authRepositoryServer } from "@/modules/users/api/auth.repository.server"

export async function currentUser() {
  try {
    const { user } = await authRepositoryServer.getCurrentUser()
    return user
  } catch (error) {
    console.error("getCurrentUser failed", error)
    return null
  }
}
