"use client"

import { setCookie } from "cookies-next"
import { COUNTRY_COOKIE } from "./constants"

export function setCountryCookie(countryCode: string) {
  setCookie(COUNTRY_COOKIE, countryCode, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  })
}


export const getLocaleFromCookie = () => {
  if (typeof document === "undefined") return "en"

  const localeCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("NEXT_LOCALE="))
    ?.split("=")[1]

  return localeCookie || "en"
}
