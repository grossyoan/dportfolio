import {createTheme, lightThemePrimitives} from 'baseui';

const customTheme = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily: '"Merriweather", serif',
  },
  {
    typography: {
        font100: {
          fontFamily: "Gabriela",
          fontSize: "11px",
          fontWeight: "normal",
          lineHeight: "16px"
        },
        font200: {
          fontFamily: "Gabriela",
          fontSize: "12px",
          fontWeight: "normal",
          lineHeight: "20px"
        },
        font250: {
          fontFamily: "Gabriela",
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "20px"
        },
        font300: {
          fontFamily: "Gabriela",
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "20px"
        },
        font350: {
          fontFamily: "Gabriela",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px"
        },
        font400: {
          fontFamily: "Gabriela",
          fontSize: "16px",
          fontWeight: "normal",
          lineHeight: "24px"
        },
        font450: {
          fontFamily: "Gabriela",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px"
        },
        font460: {
          fontFamily: "Gabriela",
          fontSize: "18px",
          fontWeight: "normal",
          lineHeight: "24px"
        },
        font470: {
          fontFamily: "Gabriela",
          fontSize: "18px",
          fontWeight: 500,
          lineHeight: "24px"
        },
        font500: {
          fontFamily: "Gabriela",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "28px"
        },
        font600: {
          fontFamily: "Gabriela",
          fontSize: "24px",
          fontWeight: 500,
          lineHeight: "36px"
        },
        font700: {
          fontFamily: "Gabriela",
          fontSize: "32px",
          fontWeight: 500,
          lineHeight: "48px"
        },
        font800: {
          fontFamily: "Gabriela",
          fontSize: "40px",
          fontWeight: 500,
          lineHeight: "56px"
        },
        font900: {
          fontFamily: "Gabriela",
          fontSize: "52px",
          fontWeight: 500,
          lineHeight: "68px"
        },
        font1000: {
          fontFamily: "Gabriela",
          fontSize: "72px",
          fontWeight: "normal",
          lineHeight: "96px"
        },
        font1100: {
          fontFamily: "Gabriela",
          fontSize: "96px",
          fontWeight: "normal",
          lineHeight: "116px"
        }
      },  
    },
  
);


export default customTheme