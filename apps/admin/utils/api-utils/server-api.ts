import { auth } from "@clerk/nextjs/server"
import { notFound, unauthorized } from "next/navigation"

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown
  ) {
    super(message)
    this.name = "ApiError"
  }
}

type RequestOptions = Omit<RequestInit, "headers"> & {
  headers?: HeadersInit
}

export async function serverApi<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { getToken } = await auth()
  const token = await getToken()

  if (!token) {
    throw new ApiError(
      401,
      "Authentication required. Please sign in to access this resource."
    )
  }
  
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}${endpoint}`,
    {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
      cache: "no-store",
    }
  )
  let body = null

  try {
    body = await response.json()
  } catch {
    // Ignore invalid JSON
  }

  if (response.status === 404) {
    notFound()
  }

  if (response.status === 403) {
    unauthorized()
  }

  if (!response.ok) {
    throw new ApiError(
      response.status,
      body?.message || "API request failed",
      body
    )
  }

  return body as T
}
