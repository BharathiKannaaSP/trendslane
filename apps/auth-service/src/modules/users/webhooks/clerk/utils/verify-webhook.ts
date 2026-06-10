import { WebhookEvent } from "@clerk/express"
import type { Request } from "express"
import { Webhook } from "svix"

export function verifyWebhook(req: Request) {
  const svixId = req.headers["svix-id"] as string
  const svixTimestamp = req.headers["svix-timestamp"] as string
  const svixSignature = req.headers["svix-signature"] as string

  if (!svixId || !svixTimestamp || !svixSignature) {
    throw new Error("Missing Svix headers")
  }

  const payload = req.body.toString()

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SIGNING_SECRET!)

  const event = wh.verify(payload, {
    "svix-id": svixId,
    "svix-timestamp": svixTimestamp,
    "svix-signature": svixSignature,
  }) as WebhookEvent

  return {
    event,
    svixId,
  }
}
