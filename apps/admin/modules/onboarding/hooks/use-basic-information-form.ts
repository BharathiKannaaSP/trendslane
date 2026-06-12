// import { useEffect, useRef } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import {
//   BasicInformationInputType,
//   basicInformationSchema,
// } from "@workspace/shared"
// import { useSubmitBasicInformation } from "./mutations/use-onboarding-mutation"

// const DEFAULT_VALUES: BasicInformationInputType = {
//   firstName: "",
//   lastName: "",
//   username: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// }

// type UseBasicInfoFormProps = {
//   user?: {
//     id?: string
//     firstName?: string | null
//     lastName?: string | null
//     username?: string | null
//     email?: string | null
//   }
// }

// export const useBasicInformationForm = ({
//   user,
// }: UseBasicInfoFormProps = {}) => {
//   const mutation = useSubmitBasicInformation()

//   const form = useForm<BasicInformationInputType>({
//     resolver: zodResolver(basicInformationSchema),
//     defaultValues: DEFAULT_VALUES,
//   })

//   const initializedRef = useRef(false)

//   useEffect(() => {
//     if (!user || initializedRef.current) return

//     form.reset({
//       firstName: user.firstName ?? "",
//       lastName: user.lastName ?? "",
//       username: user.username ?? "",
//       email: user.email ?? "",
//       password: "",
//       confirmPassword: "",
//     })

//     initializedRef.current = true
//   }, [user?.id, form])

//   const handleSubmit = async (values: BasicInformationInputType) => {
//     // await mutation.mutateAsync(values)
//   }

//   const resetForm = () => {
//     form.reset({
//       firstName: user?.firstName ?? "",
//       lastName: user?.lastName ?? "",
//       username: user?.username ?? "",
//       email: user?.email ?? "",
//       password: "",
//       confirmPassword: "",
//     })
//   }

//   return {
//     form,
//     handleSubmit,
//     resetForm,
//     isSubmitting: false,
//   }
// }
