import { z } from "zod"

export const additionalDetailsSchema = z.object({
  selectedAccountType: z.enum(["ADMIN", "ORG_ADMIN", "ORG_MEMBER"]),

  countryCode: z.string().min(1, "Country is required"),

  phoneNumber: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters"),

  address: z
    .string()
    .trim()
    .min(1, "Address is required")
    .max(255, "Address must be less than 255 characters"),

  bio: z
    .string()
    .trim()
    .min(1, "Bio is required")
    .max(160, "Bio must be less than 160 characters"),

  timezone: z.string().min(1, "Timezone is required"),

  language: z.string().min(1, "Language is required"),

  referralCode: z.string().max(50).optional().or(z.literal("")),
})

export type AdditionalDetailsFormValues = z.infer<
  typeof additionalDetailsSchema
>

export const additionalDetailsDefaultValues: AdditionalDetailsFormValues = {
  selectedAccountType: "ORG_MEMBER",
  countryCode: "IN",
  address: "",
  // themePreference: "SYSTEM",
  bio: "",
  phoneNumber: "",
  timezone: "Asia/Kolkata",
  language: "en",
  referralCode: "",
}
