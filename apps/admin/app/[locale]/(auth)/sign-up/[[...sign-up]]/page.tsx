import { AuthLayout } from "@/modules/auth/components/auth-page"
import { SignUp } from "@clerk/nextjs"
import { getTranslations } from "next-intl/server"

export default async function SignUpPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations("Auth")

  return (
    <AuthLayout description={t("descriptions.signUp")}>
      <SignUp
        routing="path"
        path={`/${locale}/sign-up`}
        forceRedirectUrl={`/${locale}/verifying`}
        signInUrl={`/${locale}/sign-in`}
      />
    </AuthLayout>
  )
}
