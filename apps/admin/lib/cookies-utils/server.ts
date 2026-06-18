import { cookies } from "next/headers"
import { COUNTRY_COOKIE, DEFAULT_COUNTRY, DEFAULT_LANG } from "./constants"

export async function getCurrentCountry() {
  const cookieStore = await cookies()

  return cookieStore.get(COUNTRY_COOKIE)?.value ?? DEFAULT_COUNTRY
}

export async function getCurrentLanguageCookie() {
  const cookieStore = await cookies()
  return cookieStore.get("NEXT_LOCALE")?.value ?? DEFAULT_LANG
}
