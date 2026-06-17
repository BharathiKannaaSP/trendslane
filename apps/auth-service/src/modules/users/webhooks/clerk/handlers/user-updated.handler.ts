import { UserJSON } from "@clerk/express"
import { prisma } from "@workspace/auth-db"
import { mapClerkUserUpdate } from "../utils/mapClerkUserUpdate"

export async function handleUserUpdated(data: UserJSON) {
  await prisma.user.update({
    where: {
      clerkUserId: data.id,
    },
    data: {
      updatedByClerkUserId: data.id,
      ...mapClerkUserUpdate(data),
    },
  })
}
