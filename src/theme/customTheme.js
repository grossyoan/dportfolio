import { createTheme, lightThemePrimitives } from "baseui";

const customTheme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: '"Gabriela", serif'
  },
  {
    colors: {
      linkText: "#FFFFFFCC",
      linkHover: "#FFFFFF",
      linkActive: "#FFFFFF",
      linkVisited: "#FFFFFFCC"
    }
  },
  {
    typography: {
      font100: {
        fontFamily: "Merienda",
        fontSize: "11px",
        fontWeight: "normal",
        lineHeight: "16px"
      },
      font200: {
        fontFamily: "Merienda",
        fontSize: "12px",
        fontWeight: "normal",
        lineHeight: "20px"
      },
      font250: {
        fontFamily: "Merienda",
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "20px"
      },
      font300: {
        fontFamily: "Merienda",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "20px"
      },
      font350: {
        fontFamily: "Merienda",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px"
      },
      font400: {
        fontFamily: "Merienda",
        fontSize: "16px",
        fontWeight: "normal",
        lineHeight: "24px"
      },
      font450: {
        fontFamily: "Merienda",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px"
      },
      font460: {
        fontFamily: "Merienda",
        fontSize: "18px",
        fontWeight: "normal",
        lineHeight: "24px"
      },
      font470: {
        fontFamily: "Merienda",
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "24px"
      },
      font500: {
        fontFamily: "Merienda",
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "28px"
      },
      font600: {
        fontFamily: "Merienda",
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "36px"
      },
      font700: {
        fontFamily: "Merienda",
        fontSize: "32px",
        fontWeight: 500,
        lineHeight: "48px"
      },
      font800: {
        fontFamily: "Merienda",
        fontSize: "40px",
        fontWeight: 500,
        lineHeight: "56px"
      },
      font900: {
        fontFamily: "Merienda",
        fontSize: "52px",
        fontWeight: 500,
        lineHeight: "68px"
      },
      font1000: {
        fontFamily: "Merienda",
        fontSize: "72px",
        fontWeight: "normal",
        lineHeight: "96px"
      },
      font1100: {
        fontFamily: "Merienda",
        fontSize: "96px",
        fontWeight: "normal",
        lineHeight: "116px"
      }
    }
  }
);

export default customTheme;
