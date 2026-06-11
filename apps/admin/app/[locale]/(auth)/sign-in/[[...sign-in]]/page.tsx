import { AuthLayout } from "@/modules/auth/auth-layout"
import { SignIn } from "@clerk/nextjs"
import { getTranslations } from "next-intl/server"

export default async function SignInPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations("Auth")
  return (
    <AuthLayout description={t("descriptions.signIn")}>
      <SignIn
        routing="path"
        path={`/${locale}/sign-in`}
        signUpUrl={`/${locale}/sign-up`}
      />
    </AuthLayout>
  )
}
