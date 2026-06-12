import { UserJSON } from "@clerk/express"
import { prisma, SystemRole } from "@workspace/auth-db"
import { ApiError } from "../../../../../errors/api-error"

export async function handleUserCreated(data: UserJSON) {
  const email = data.email_addresses[0]?.email_address
  const username = data.username
  const firstName = data.first_name
  const lastName = data.last_name

  if (!username) {
    throw new ApiError(404, `User ${data.id} does not have an username`)
  }

  if (!firstName) {
    throw new ApiError(400, `User ${data.id} does not have a first name`)
  }

  if (!lastName) {
    throw new ApiError(400, `User ${data.id} does not have a last name`)
  }

  if (!email) {
    throw new ApiError(400, `User ${data.id} does not have an email address`)
  }

  await prisma.user.create({
    data: {
      clerkUserId: data.id,
      email,
      username,
      firstName,
      lastName,
      imageUrl: data.image_url,
      systemRole: SystemRole.USER,
      countryCode: "IN",
      countryName: "India",
    },
  })
}
