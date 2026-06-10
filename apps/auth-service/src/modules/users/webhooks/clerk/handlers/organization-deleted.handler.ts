import { DeletedObjectJSON } from "@clerk/express"

export async function handleOrganizationDeleted(data: DeletedObjectJSON) {
  // organization delete logic
  console.log(data)
}
