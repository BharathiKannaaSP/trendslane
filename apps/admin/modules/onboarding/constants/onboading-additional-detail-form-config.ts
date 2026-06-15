import { EntityFormConfig } from "@/components/forms/form-types"
import { countries } from "@workspace/shared"

export const getAdditionalDetailsFormConfig = (): EntityFormConfig => ({
  title: "Welcome to Trenslane!",
  description: "Complete your onboarding profile.",

  sections: [
    {
      title: "Account Information",
      description: "Choose your account type and country.",
      fields: ["selectedAccountType", "countryCode"],
    },
    {
      title: "Preferences",
      description: "Configure localization preferences.",
      fields: ["timezone", "language"],
    },
    {
      title: "Contact Information",
      description: "Provide your contact details.",
      fields: ["phoneNumber", "address"],
    },
    {
      title: "Profile",
      description: "Tell us a little about yourself.",
      fields: ["bio", "referralCode"],
      isLastField: true,
    },
  ],

  fields: [
    {
      name: "selectedAccountType",
      label: "Account Type",
      type: "select",
      required: true,
      options: [
        {
          label: "Administrator",
          value: "ADMIN",
        },
        {
          label: "Organization Admin",
          value: "ORG_ADMIN",
        },
        {
          label: "Organization Member",
          value: "ORG_MEMBER",
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
      type: "text",
      placeholder: "Enter your phone number",
      required: true,
    },

    {
      name: "address",
      label: "Address",
      type: "textarea",
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
