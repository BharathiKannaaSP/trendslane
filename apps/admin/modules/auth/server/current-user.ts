import { cache } from "react"
import { authRepositoryServer } from "@/modules/users/api/auth.repository.server"

export const currentUser = cache(async () => {
  try {
    const { user } = await authRepositoryServer.getCurrentUser()
    return user
  } catch (error) {
    console.error("getCurrentUser failed", error)
    return null
  }
})
