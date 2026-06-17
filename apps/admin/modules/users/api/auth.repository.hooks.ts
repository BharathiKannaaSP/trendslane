import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuthApi } from "@/utils/api-utils/client-api"
import { authRepositoryClient } from "./auth.repository.client"
import {
  AccountType,
  OnboardingStatus,
  OnboardingStep,
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to save onboarding progress")
    },
  })
}

export function useCurrentUserUpdate() {
  const api = useAuthApi()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: {
      selectedAccountType: AccountType
      countryCode: string
      address: string
      bio: string
      phoneNumber: string
      timezone: string
      language: string
      referralCode?: string
    }) => authRepositoryClient.updateCurrentUser(api, data),
    onSuccess: async (user) => {
      queryClient.setQueryData(["me"], user)
      toast.success("User updated")
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to save onboarding progress")
    },
  })
}
