import type { Request, Response } from "express"
import { processClerkWebhook } from "./clerk.service"

export async function clerkWebhookController(req: Request, res: Response) {
  console.log('Entered controller webhook')
  try {
    await processClerkWebhook(req)

    return res.status(200).json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return res.status(400).json({
      success: false,
    })
  }
}
