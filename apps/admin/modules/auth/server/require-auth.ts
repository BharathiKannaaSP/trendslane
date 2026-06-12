import { redirect } from "next/navigation"
import { currentUser } from "./current-user"

export async function requireAuth() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  return user
}
