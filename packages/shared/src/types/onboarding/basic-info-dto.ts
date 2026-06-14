import z from "zod"

export const basicInformationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(3),
})

export type BasicInformationInputType = z.infer<typeof basicInformationSchema>
