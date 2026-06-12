import { useQuery } from "@tanstack/react-query"
import { authRepositoryClient } from "./auth.repository.client"

export function useCurrentUser() {
  return useQuery({
    queryKey: ["me"],
    queryFn: authRepositoryClient.getCurrentUser,
  })
}
