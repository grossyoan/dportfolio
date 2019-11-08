import { createTheme, lightThemePrimitives } from "baseui"

const customTheme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: '"News Cycle", serif',
  },
  {
    colors: {
      linkText: "#FFFFFFCC",
      linkHover: "#FFFFFF",
      linkActive: "#FFFFFF",
      linkVisited: "#FFFFFFCC",
    },
  }
)

export default customTheme
