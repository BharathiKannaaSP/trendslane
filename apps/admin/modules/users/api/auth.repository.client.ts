import { ApiClient } from "@/utils/api-utils/client-api"
import { ApiResponse, CurrentUserResponse } from "@workspace/shared"

export const authRepositoryClient = {
  async getCurrentUser(api: ApiClient) {
    const response = await api<ApiResponse<CurrentUserResponse>>("/user/me")
    return response.data
  },
}
