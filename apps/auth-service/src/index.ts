import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { clerkMiddleware } from "@clerk/express"
import clerkWebHookRoutes from "./modules/users/webhooks/clerk/clerk.routes"
import { getCurrentTimestamp, errorHandler } from "@workspace/shared"

dotenv.config()

const app: express.Application = express()

// User clerk webhook route
app.use("/api/v1/webhook", clerkWebHookRoutes)

app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))
app.use(
  cors({
    origin: process.env.CORS_ORIGIN_ADMIN,
    credentials: true,
  })
)

app.use(clerkMiddleware())

app.get("/api/v1/health", (_req, res) => {
  const timestamp = getCurrentTimestamp()
  res.status(200).json({
    status: "ok",
    timestamp,
    service: "Auth Service is running!",
  })
})

app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log("Auth Service is running on port " + PORT)
})

export default app
