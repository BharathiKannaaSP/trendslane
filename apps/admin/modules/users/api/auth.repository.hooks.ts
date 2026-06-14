import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuthApi } from "@/utils/api-utils/client-api"
import { authRepositoryClient } from "./auth.repository.client"
import { OnboardingStatus, OnboardingStep } from "@workspace/shared"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function useCurrentUser() {
  const api = useAuthApi()

  return useQuery({
    queryKey: ["me"],
    queryFn: () => authRepositoryClient.getCurrentUser(api),
  })
}

export function useOnboardingUpdate(nextRoute: string) {
  const api = useAuthApi()
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (data: {
      onboardingStep: OnboardingStep
      onboardingStatus: OnboardingStatus
      onboardingStepNo: number
    }) => authRepositoryClient.updateOnboarding(api, data),

    onSuccess: (user) => {
      queryClient.setQueryData(["me"], user)
      toast.success("Progress saved")
      router.push(nextRoute)
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(error?.message ?? "Failed to save onboarding progress")
    },
  })
}
