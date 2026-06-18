import { ApiClient } from "@/utils/api-utils/client-api"
import {
  ApiResponse,
  CurrentUserDto,
  CurrentUserResponse,
  updateAdditionalDetailsSchema,
  UpdateAdditionalDetailsSchema,
  UpdateOnboardingInput,
  updateOnboardingSchema,
  UpdateUserThemePreferences,
  UserThemePreferences,
} from "@workspace/shared"

export const authRepositoryClient = {
  async getCurrentUser(api: ApiClient) {
    const response = await api<ApiResponse<CurrentUserResponse>>("/user/me")
    return response.data
  },

  async updateCurrentUser(
    api: ApiClient,
    payload: UpdateAdditionalDetailsSchema
  ) {
    const validatedPayload = updateAdditionalDetailsSchema.parse(payload)
    const response = await api<ApiResponse<CurrentUserDto>>(
      "/user/me/updateCurrentUser",
      {
        method: "PATCH",
        body: JSON.stringify(validatedPayload),
      }
    )
    return response.data
  },

  async updateCurrentUserThemePreferences(
    api: ApiClient,
    payload: UpdateUserThemePreferences
  ) {
    const response = await api<ApiResponse<UserThemePreferences>>(
      "/user/me/theme-preferences",
      {
        method: "PATCH",
        body: JSON.stringify(payload),
      }
    )
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
