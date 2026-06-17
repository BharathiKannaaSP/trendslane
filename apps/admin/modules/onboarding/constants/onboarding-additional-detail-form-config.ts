import { EntityFormConfig } from "@/components/forms/form-types"
import { countries } from "@workspace/shared"
import { Bolt, Building2, UsersRound } from "lucide-react"

export const getAdditionalDetailsFormConfig = (): EntityFormConfig => ({
  title: "Welcome to Trendslane!",
  description:
    "Let's set up your account. Please provide a few additional details to get started.",

  sections: [
    {
      title: "Account Type / Role",
      description: "Choose how you'll use Trendslane.",
      fields: ["selectedAccountType"],
      isLastField: true,
    },
    {
      title: "Additional Details",
      description: "Help us personalize your experience.",
      fields: [
        "countryCode",
        "address",
        "bio",
        "phoneNumber",
        "timezone",
        "language",
        "referralCode",
      ],
      isLastField: true,
    },
  ],
  fields: [
    {
      name: "selectedAccountType",
      label: "",
      type: "radio-group",
      defaultValue: "ADMIN",
      colSpan: 2,
      options: [
        {
          label: "Admin",
          value: "ADMIN",
          description: "Full access to all features and settings.",
          icon: Bolt,
        },
        {
          label: "Organization Admin",
          value: "ORG_ADMIN",
          description: "Manage your organization, members and settings.",
          icon: Building2,
        },
        {
          label: "Organization Member",
          value: "ORG_MEMBER",
          description: "Collaborate and access assigned resources.",
          icon: UsersRound,
        },
      ],
    },

    {
      name: "countryCode",
      label: "Country",
      type: "select",
      required: true,
      options: countries.map((country) => ({
        label: `${country.name} (${country.code})`,
        value: country.code,
      })),
    },

    {
      name: "timezone",
      label: "Timezone",
      type: "select",
      required: true,
      options: [
        {
          label: "Asia/Kolkata",
          value: "Asia/Kolkata",
        },
        {
          label: "Europe/Berlin",
          value: "Europe/Berlin",
        },
      ],
    },

    {
      name: "language",
      label: "Language",
      type: "select",
      required: true,
      options: [
        { label: "English", value: "en" },
        { label: "Tamil", value: "ta" },
        { label: "Hindi", value: "hi" },
        { label: "Arabic", value: "ar" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
      ],
    },

    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "phone-number-select",
      placeholder: "Enter your phone number",
      required: true,
    },

    {
      name: "address",
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
      required: true,
    },

    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      placeholder: "Tell us about yourself",
      required: true,
    },

    {
      name: "referralCode",
      label: "Referral Code",
      type: "text",
      placeholder: "Referral code",
    },
  ],

  backLinks: [],
})
