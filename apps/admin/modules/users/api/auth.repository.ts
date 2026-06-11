import { serverApi } from "@/utils/api-utils/server-api"
import { ApiResponse, CurrentUserResponse } from "@workspace/shared"

export const authRepository = {
  async getCurrentUser() {
    const response =
      await serverApi<ApiResponse<CurrentUserResponse>>("/user/me")

    return response.data
  },
}
