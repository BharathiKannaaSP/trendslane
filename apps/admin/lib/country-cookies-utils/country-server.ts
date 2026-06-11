import { cookies } from "next/headers"
import { COUNTRY_COOKIE, DEFAULT_COUNTRY } from "./country"

export async function getCurrentCountry() {
  const cookieStore = await cookies()

  return cookieStore.get(COUNTRY_COOKIE)?.value ?? DEFAULT_COUNTRY
}
