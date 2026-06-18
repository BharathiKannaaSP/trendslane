import { AccentColor } from "@workspace/shared"

export type AccentPalette = {
  primary: string
  primaryForeground: string
}

export const ACCENTS: Record<
  AccentColor,
  {
    light: AccentPalette
    dark: AccentPalette
  }
> = {
  default: {
    light: {
      primary: "oklch(0.205 0 0)",
      primaryForeground: "oklch(0.985 0 0)",
    },
    dark: {
      primary: "oklch(0.922 0 0)",
      primaryForeground: "oklch(0.205 0 0)",
    },
  },

  violet: {
    light: {
      primary: "oklch(0.62 0.22 300)",
      primaryForeground: "white",
    },
    dark: {
      primary: "oklch(0.62 0.22 300)",
      primaryForeground: "white",
    },
  },

  blue: {
    light: {
      primary: "oklch(0.6 0.2 250)",
      primaryForeground: "white",
    },
    dark: {
      primary: "oklch(0.6 0.2 250)",
      primaryForeground: "white",
    },
  },

  green: {
    light: {
      primary: "oklch(0.65 0.2 145)",
      primaryForeground: "white",
    },
    dark: {
      primary: "oklch(0.65 0.2 145)",
      primaryForeground: "white",
    },
  },

  orange: {
    light: {
      primary: "oklch(0.75 0.18 60)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.75 0.18 60)",
      primaryForeground: "black",
    },
  },

  rose: {
    light: {
      primary: "oklch(0.65 0.2 15)",
      primaryForeground: "white",
    },
    dark: {
      primary: "oklch(0.65 0.2 15)",
      primaryForeground: "white",
    },
  },

  cyan: {
    light: {
      primary: "oklch(0.75 0.14 220)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.75 0.14 220)",
      primaryForeground: "black",
    },
  },

  red: {
    light: {
      primary: "oklch(0.62 0.25 25)",
      primaryForeground: "white",
    },
    dark: {
      primary: "oklch(0.62 0.25 25)",
      primaryForeground: "white",
    },
  },

  yellow: {
    light: {
      primary: "oklch(0.9 0.16 95)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.9 0.16 95)",
      primaryForeground: "black",
    },
  },

  lime: {
    light: {
      primary: "oklch(0.84 0.18 130)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.84 0.18 130)",
      primaryForeground: "black",
    },
  },

  emerald: {
    light: {
      primary: "oklch(0.7 0.18 165)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.7 0.18 165)",
      primaryForeground: "black",
    },
  },

  teal: {
    light: {
      primary: "oklch(0.7 0.14 190)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.7 0.14 190)",
      primaryForeground: "black",
    },
  },

  sky: {
    light: {
      primary: "oklch(0.78 0.14 240)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.78 0.14 240)",
      primaryForeground: "black",
    },
  },

  indigo: {
    light: {
      primary: "oklch(0.55 0.2 280)",
      primaryForeground: "white",
    },
    dark: {
      primary: "oklch(0.55 0.2 280)",
      primaryForeground: "white",
    },
  },

  pink: {
    light: {
      primary: "oklch(0.72 0.2 350)",
      primaryForeground: "black",
    },
    dark: {
      primary: "oklch(0.72 0.2 350)",
      primaryForeground: "black",
    },
  },
}
