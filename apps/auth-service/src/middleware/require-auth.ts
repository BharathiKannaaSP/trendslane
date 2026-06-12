import { getAuth } from "@clerk/express"
import { NextFunction, Request, Response } from "express"
import { ApiError } from "../errors/api-error"

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { userId } = getAuth(req)
  console.log("=== REQUIRE AUTH ===")
  console.log("authorization:", req.headers.authorization)

  if (!userId) {
    throw new ApiError(
      401,
      "Authentication required. Please sign in to access this resource."
    )
  }
  console.log(req, "REQQQQQQ")
  req.auth = {
    userId,
  }

  next()
}
