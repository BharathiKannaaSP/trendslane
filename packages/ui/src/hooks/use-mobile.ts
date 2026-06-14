import * as React from "react"

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const

export function useDevice() {
  const [width, setWidth] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }

    updateWidth()

    window.addEventListener("resize", updateWidth)

    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  const currentWidth = width ?? 0

  return {
    width: currentWidth,
    isMobile: currentWidth < BREAKPOINTS.mobile,
    isTablet:
      currentWidth >= BREAKPOINTS.mobile && currentWidth < BREAKPOINTS.tablet,
    isDesktop: currentWidth >= BREAKPOINTS.tablet,
  }
}

export function useIsMobile() {
  return useDevice().isMobile
}

export function useIsTablet() {
  return useDevice().isTablet
}

export function useIsDesktop() {
  return useDevice().isDesktop
}
