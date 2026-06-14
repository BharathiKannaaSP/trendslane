// auth.controller.ts

import { Request, Response } from "express"
import { asyncHandler } from "../../handler/async-handler"
import { getCurrentUserService, updateOnboardingService } from "./user.service"
import { apiResponse } from "../../handler/api-response"

export const getCurrentUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const clerkUserId = req.auth.userId

    const data = await getCurrentUserService(clerkUserId)

    return apiResponse({
      res,
      message: "Current user fetched successfully",
      data,
    })
  }
)

export const updateOnboardingController = asyncHandler(
  async (req: Request, res: Response) => {
    const clerkUserId = req.auth.userId
    const data = await updateOnboardingService(clerkUserId, req.body)
    return apiResponse({
      res,
      data,
      message: "Onboarding updated successfully",
    })
  }
)
