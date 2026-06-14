import { ApiClient } from "@/utils/api-utils/client-api"
import {
  ApiResponse,
  CurrentUserResponse,
  UpdateOnboardingInput,
  updateOnboardingSchema,
} from "@workspace/shared"

export const authRepositoryClient = {
  async getCurrentUser(api: ApiClient) {
    const response = await api<ApiResponse<CurrentUserResponse>>("/user/me")
    return response.data
  },

  async updateOnboarding(api: ApiClient, payload: UpdateOnboardingInput) {
    const validatedPayload = updateOnboardingSchema.parse(payload)
    const response = await api<ApiResponse<CurrentUserResponse>>(
      "/user/me/onboarding",
      { method: "PATCH", body: JSON.stringify(validatedPayload) }
    )
    return response.data
  },
}
