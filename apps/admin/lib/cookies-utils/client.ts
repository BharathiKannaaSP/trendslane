"use client"

import { setCookie } from "cookies-next"
import { COUNTRY_COOKIE } from "./constants"
import { AppearanceSettings } from "@workspace/shared"

// Common client cookie setter
export function setClientCookie(
  key: string,
  value: string,
  maxAge = 60 * 60 * 24 * 365 // 1 year
) {
  setCookie(key, value, {
    path: "/",
    maxAge,
  })
}

// Common client cookie getter
export function getClientCookie(key: string) {
  if (typeof document === "undefined") return null
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1]
}

export function setCountryCookie(countryCode: string) {
  setClientCookie(COUNTRY_COOKIE, countryCode)
}

export const getLocaleFromCookie = () => {
  if (typeof document === "undefined") return "en"
  const localeCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("NEXT_LOCALE="))
    ?.split("=")[1]

  return localeCookie || "en"
}

const APPEARANCE_COOKIE = "appearance"

export function setAppearanceCookie(
  settings: AppearanceSettings,
  maxAge = 60 * 60 * 24 * 365
) {
  setCookie(APPEARANCE_COOKIE, JSON.stringify(settings), {
    path: "/",
    maxAge,
  })
}

export function getAppearanceCookie(): AppearanceSettings | null {
  const value = getClientCookie(APPEARANCE_COOKIE)

  if (!value) return null

  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return null
  }
}
