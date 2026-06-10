import { OrganizationJSON } from "@clerk/express"

export async function handleOrganizationUpdated(data: OrganizationJSON) {
  // organization update logic
  console.log(data)
}
