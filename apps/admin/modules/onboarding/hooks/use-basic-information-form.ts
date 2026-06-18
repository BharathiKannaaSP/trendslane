// import { useEffect } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useSubmitBasicInformation } from "./mutations/use-onboarding-mutation"
// import {
//   BasicInformationInputType,
//   basicInformationSchema,
//   CurrentUserDto,
// } from "@workspace/shared"
// import { UserResource } from "@clerk/nextjs/types"

// const DEFAULT_VALUES: BasicInformationInputType = {
//   firstName: "",
//   lastName: "",
//   username: "",
// }

// export const useBasicInformationForm = (
//   changePrimaryEmail: any,
//   user?: CurrentUserDto,
//   clerkUser?: UserResource | null
// ) => {
//   const mutation = useSubmitBasicInformation()

//   const form = useForm<BasicInformationInputType>({
//     // resolver: zodResolver(basicInformationSchema),
//     defaultValues: DEFAULT_VALUES,
//   })

//   useEffect(() => {
//     if (!user) return

//     form.reset({
//       firstName: user.firstName ?? "",
//       lastName: user.lastName ?? "",
//       username: user.username ?? "",
//     })
//   }, [user, form])

//   //   const handleSubmit = async (values: BasicInformationInputType) => {
//   //     // await mutation.mutateAsync(values)
//   //   }
//   const handleSubmit = form.handleSubmit(async (data) => {
//     try {
//       await changePrimaryEmail(data.username)
//       await clerkUser?.update({
//         firstName: data.firstName,
//         lastName: data.lastName,
//         username: data.username,
//       })
//     } catch (err: any) {
//       const code = err?.errors?.[0]?.code

//       err?.errors?.forEach((error: any) => {
//         const field = error.meta?.paramName

//         if (field) {
//           form.setError(field as keyof BasicInformationInputType, {
//             type: "server",
//             message: error.longMessage || error.message,
//           })
//         }
//       })
//     }
//   })
//   const resetForm = () => {
//     form.reset({
//       firstName: user?.firstName ?? "",
//       lastName: user?.lastName ?? "",
//       username: user?.username ?? "",
//     })
//   }

//   return {
//     form,
//     handleSubmit,
//     resetForm,
//     isSubmitting: false,
//   }
// }

// "use client"

// import { EntityForm } from "@/components/forms/entity-form"
// import { useBasicInformationForm } from "../../hooks/use-basic-information-form"
// import { getBasicInfoFormConfig } from "../../constants/basic-info-form-config"
// import { useCurrentUser } from "@/modules/users/api/auth.repository.hooks"
// import { Spinner } from "@workspace/ui/components/spinner"
// import { useReverification, useUser } from "@clerk/nextjs"

// const OnboardingBasicForm = () => {
//   const { data: currentUser, isLoading } = useCurrentUser()
//   const { user: clerkUser } = useUser()

//   const changePrimaryEmail = useReverification((username: string) =>
//     clerkUser?.update({ username })
//   )

//   const { form, resetForm, handleSubmit, isSubmitting } =
//     useBasicInformationForm(changePrimaryEmail, currentUser?.user, clerkUser)
//   console.log(currentUser)
//   const config = getBasicInfoFormConfig(currentUser?.user)

//   if (isLoading) {
//     return <Spinner />
//   }

//   return (
//     <EntityForm
//       form={form}
//       config={config}
//       initialData={currentUser}
//       onSubmit={handleSubmit}
//       reset={resetForm}
//       isSubmitting={isSubmitting}
//     />
//   )
// }

// export default OnboardingBasicForm
