import type { Request } from "express"
import { verifyWebhook } from "./utils/verify-webhook"
import { handleUserCreated } from "./handlers/user-created.handler"
import { handleUserUpdated } from "./handlers/user-updated.handler"
import { handleUserDeleted } from "./handlers/user-deleted.handler"

import { handleOrganizationCreated } from "./handlers/organization-created.handler"
import { handleOrganizationUpdated } from "./handlers/organization-updated.handler"
import { handleOrganizationDeleted } from "./handlers/organization-deleted.handler"

export async function processClerkWebhook(req: Request) {
  const { event, svixId } = verifyWebhook(req)

  switch (event.type) {
    case "user.created":
      await handleUserCreated(event.data)
      break

    case "user.updated":
      await handleUserUpdated(event.data)
      break

    case "user.deleted":
      await handleUserDeleted(event.data)
      break

    case "organization.created":
      await handleOrganizationCreated(event.data)
      break

    case "organization.updated":
      await handleOrganizationUpdated(event.data)
      break

    case "organization.deleted":
      await handleOrganizationDeleted(event.data)
      break

    default:
      break
  }

  return svixId
}
