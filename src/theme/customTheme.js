import { createTheme, lightThemePrimitives } from "baseui"

const customTheme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: '"Gabriela", serif',
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
