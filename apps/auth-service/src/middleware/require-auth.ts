import { getAuth } from "@clerk/express"
import { NextFunction, Request, Response } from "express"
import { ApiError } from "../errors/api-error"

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { userId } = getAuth(req)

  if (!userId) {
    throw new ApiError(
      401,
      "Authentication required. Please sign in to access this resource."
    )
  }
  req.auth = {
    userId,
  }

  next()
}
