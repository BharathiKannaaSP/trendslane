import { UserJSON } from "@clerk/express"
import { prisma, SystemRole } from "@workspace/auth-db"
import { ApiError } from "@workspace/shared"

export async function handleUserCreated(data: UserJSON) {
  const email = data.email_addresses[0]?.email_address
  const username = data.username

  if (!username) {
    throw new ApiError(404, `User ${data.id} does not have an username`)
  }

  if (!email) {
    throw new ApiError(400, `User ${data.id} does not have an email address`)
  }

  await prisma.user.create({
    data: {
      clerkUserId: data.id,
      email,
      username,
      firstName: data.first_name,
      lastName: data.last_name,
      imageUrl: data.image_url,
      systemRole: SystemRole.USER,
      countryCode: "IN",
      countryName: "India",
    },
  })
}
