import { Router } from "express"
import {
  getCurrentUserController,
  updateCurrentUserController,
  updateCurrentUserThemePreferencesController,
  updateOnboardingController,
} from "./user.controller"
import { requireAuth } from "../../middleware/require-auth"

const router: Router = Router()

router.get("/me", requireAuth, getCurrentUserController)
router.patch("/me/updateCurrentUser", requireAuth, updateCurrentUserController)
router.patch(
  "/me/theme-preferences",
  requireAuth,
  updateCurrentUserThemePreferencesController
)
router.patch("/me/onboarding", requireAuth, updateOnboardingController)

export default router
