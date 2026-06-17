import { authServerApi } from "@/utils/api-utils/server-api"
import { ApiResponse, CurrentUserResponse } from "@workspace/shared"

export const authRepositoryServer = {
  async getCurrentUser() {
    const response =
      await authServerApi<ApiResponse<CurrentUserResponse>>("/user/me")

    return response.data
  },
}
