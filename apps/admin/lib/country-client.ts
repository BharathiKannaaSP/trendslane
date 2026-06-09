"use client"

import { setCookie } from "cookies-next"
import { COUNTRY_COOKIE } from "./country"

export function setCountryCookie(countryCode: string) {
  setCookie(COUNTRY_COOKIE, countryCode, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}
