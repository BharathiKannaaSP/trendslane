import { EntityFormConfig } from "@/components/forms/form-types";

export const getBasicInfoFormConfig = (): EntityFormConfig => ({
  title: "Basic Information",
  description: "Tell us about yourself.",
  submitLabel: "Continue",

  sections: [
    {
      title: "Profile Information",
      description: "Basic account information.",
      fields: [
        "firstName",
        "lastName",
        "username",
        "email",
        "password",
        "confirmPassword",
      ],
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
      type: "text", // <- verify supported type
      disabled: true,
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password", // <- verify supported type
      required: true,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password", // <- verify supported type
      required: true,
    },
  ],

  backLinks: [],
})
