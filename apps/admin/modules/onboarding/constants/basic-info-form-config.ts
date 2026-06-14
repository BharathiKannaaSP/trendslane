import { EntityFormConfig } from "@/components/forms/form-types"
import { CurrentUserDto } from "@workspace/shared"

export const getBasicInfoFormConfig = (
  user?: CurrentUserDto
): EntityFormConfig => ({
  title: "Basic Information",
  description: "Tell us about yourself.",
  submitLabel: "Continue",

  sections: [
    {
      title: "Profile Information",
      description: "Basic account information.",
      fields: ["firstName", "lastName", "username", "email"],
      isLastField: true,
    },
  ],

  fields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "text",
      disabled: true,
      required: true,
      placeholder: user?.email,
    },
  ],

  backLinks: [],
})
