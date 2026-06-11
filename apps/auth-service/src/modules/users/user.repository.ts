import { prisma } from "@workspace/auth-db"
import { currentUserInclude } from "./user.types"

export async function getUserByClerkIdRepository(clerkUserId: string) {
  return prisma.user.findUnique({
    where: {
      clerkUserId,
    },
    ...currentUserInclude,
  })
}
