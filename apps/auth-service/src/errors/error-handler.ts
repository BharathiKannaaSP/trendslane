import { NextFunction, Request, Response } from "express"
import { ApiError } from "./api-error"
import { ZodError } from "zod"
import { Prisma } from "@workspace/auth-db"

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) {
  console.error(err)

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    })
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    })
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res.status(409).json({
          success: false,
          message: "Resource already exists",
          field: err.meta?.target,
        })

      case "P2025":
        return res.status(404).json({
          success: false,
          message: "Resource not found",
        })

      default:
        return res.status(400).json({
          success: false,
          message: "Database operation failed",
          code: err.code,
        })
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      success: false,
      message: err.message,
    })
  }

  if (err instanceof Error) {
    return res.status(500).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    })
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  })
}
