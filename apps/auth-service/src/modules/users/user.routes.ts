import { Router } from "express"
import { getCurrentUserController } from "./user.controller"
import { requireAuth } from "../../middleware/require-auth"

const router: Router = Router()

router.get("/me", requireAuth, getCurrentUserController)

export default router
