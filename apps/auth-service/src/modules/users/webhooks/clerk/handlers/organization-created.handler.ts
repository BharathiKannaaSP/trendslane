import { OrganizationJSON } from "@clerk/express"

export async function handleOrganizationCreated(data: OrganizationJSON) {
  console.log(data)
}
