// auth.controller.ts

import { Request, Response } from "express"
import { asyncHandler } from "../../handler/async-handler"
import { getCurrentUserService } from "./user.service"

export const getCurrentUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const clerkUserId = req.auth?.userId

    const data = await getCurrentUserService(clerkUserId)

    return res.status(200).json({
      success: true,
      message: "Current user fetched successfully",
      data,
    })
  }
)
