import { Router } from "express"
import {
  getCurrentUserController,
  updateOnboardingController,
} from "./user.controller"
import { requireAuth } from "../../middleware/require-auth"

const router: Router = Router()

router.get("/me", requireAuth, getCurrentUserController)
router.patch("/me/onboarding", requireAuth, updateOnboardingController)

export default router
