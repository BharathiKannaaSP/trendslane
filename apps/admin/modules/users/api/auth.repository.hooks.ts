import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuthApi } from "@/utils/api-utils/client-api"
import { authRepositoryClient } from "./auth.repository.client"
import {
  OnboardingStatus,
  OnboardingStep,
  UpdateCurrentUserInput,
  UpdateUserThemePreferences,
} from "@workspace/shared"
import { toast } from "sonner"

export function useCurrentUser() {
  const api = useAuthApi()

  return useQuery({
    queryKey: ["me"],
    queryFn: () => authRepositoryClient.getCurrentUser(api),
  })
}

export function useOnboardingUpdate() {
  const api = useAuthApi()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: {
      onboardingStep: OnboardingStep
      onboardingStatus: OnboardingStatus
      onboardingStepNo: number
    }) => authRepositoryClient.updateOnboarding(api, data),

    onSuccess: async (user) => {
      queryClient.setQueryData(["me"], user)
    },

    onError: () => {
      toast.error("Failed to save onboarding progress")
    },
  })
}

export function useCurrentUserUpdate() {
  const api = useAuthApi()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateCurrentUserInput) =>
      authRepositoryClient.updateCurrentUser(api, data),
    onSuccess: async (user) => {
      queryClient.setQueryData(["me"], user)
      toast.success("User updated successfully")
    },
    onError: () => {
      toast.error("Failed to update user")
    },
  })
}

export function useUpdateCurrentUserThemePreferences() {
  const api = useAuthApi()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateUserThemePreferences) =>
      authRepositoryClient.updateCurrentUserThemePreferences(api, data),
    onSuccess: async (preferences) => {
      queryClient.setQueryData(["theme-preferences"], preferences)
    },

    onError: () => {
      toast.error("Failed to update theme preferences")
    },
  })
}
