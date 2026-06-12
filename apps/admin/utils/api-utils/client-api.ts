"use client"

import { useAuth } from "@clerk/nextjs"
import { ApiError } from "@workspace/shared"

type RequestOptions = Omit<RequestInit, "headers"> & {
  headers?: HeadersInit
}

export type ApiClient = <T>(
  endpoint: string,
  options?: RequestInit
) => Promise<T>

export function useApiClient(baseUrl: string) {
  const { getToken } = useAuth()

  return async function api<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const token = await getToken()

    if (!token) {
      throw new ApiError(401, "Authentication required")
    }

    const response = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    })

    let body = null

    try {
      body = await response.json()
    } catch {
      // Invalid JSON
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
}

export function useAuthApi() {
  return useApiClient(process.env.NEXT_PUBLIC_AUTH_URL!)
}

export function useProductApi() {
  return useApiClient(process.env.NEXT_PUBLIC_PRODUCT_URL!)
}
