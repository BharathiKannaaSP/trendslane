import { prisma } from "@workspace/auth-db"
import { UserDeletedJSON } from "@clerk/express"

export async function handleUserDeleted(data: UserDeletedJSON) {
  await prisma.user.delete({
    where: {
      clerkUserId: data.id,
    },
  })
}
