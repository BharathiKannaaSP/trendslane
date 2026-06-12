import { authApi } from "@/utils/api-utils/client-api"
import { ApiResponse, CurrentUserResponse } from "@workspace/shared"

export const authRepositoryClient = {
  async getCurrentUser() {
    const response =
      await authApi.get<ApiResponse<CurrentUserResponse>>("/user/me")
    return response.data.data
  },
}
