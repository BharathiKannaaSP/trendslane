import { Router } from "express"
import express from "express"
import { clerkWebhookController } from "./clerk-controller"

const router: Router = express.Router()

router.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhookController
)

export default router
