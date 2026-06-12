export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export const STALE_TIME = 5000
