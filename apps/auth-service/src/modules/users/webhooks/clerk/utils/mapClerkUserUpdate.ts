// Data for user create and update mapper

import { UserJSON } from "@clerk/express"

export function mapClerkUserUpdate(data: UserJSON) {
  const email = data.email_addresses[0]?.email_address
  const username = data.username
  const firstName = data.first_name
  const lastName = data.last_name

  return {
    ...(email && { email }),
    ...(username && { username }),
    ...(firstName && { firstName }),
    ...(lastName && { lastName }),
    imageUrl: data.image_url,
  }
}
