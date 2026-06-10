// Data for user create and update mapper

import { UserJSON } from "@clerk/express"

export function mapClerkUserUpdate(data: UserJSON) {
  const email = data.email_addresses[0]?.email_address
  const username = data.username

  return {
    ...(email && { email }),
    ...(username && { username }),
    firstName: data.first_name,
    lastName: data.last_name,
    imageUrl: data.image_url,
  }
}
