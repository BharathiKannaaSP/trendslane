// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { User } from "@workspace/auth-db"

declare global {
  namespace Express {
    interface Request {
      auth: {
        userId: string
        organizationId?: string
        role?: string
      }
    }
  }
}
