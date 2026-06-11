// Get Date - 10-Jun-2026, Time - 15:45 UTC
export function getCurrentTimestamp() {
  const now = new Date()

  const date = now
    .toLocaleDateString("en-GB", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-")

  const time = now.toLocaleTimeString("en-GB", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return `Date - ${date}, Time - ${time} UTC`
}
