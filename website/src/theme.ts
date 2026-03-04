import { createTheme, PaletteColor } from "@mui/material/styles";
import localFont from "next/font/local";

export const vazirharf = localFont({ src: "../fonts/Vazirharf[wght].woff2" });
export const vazirharfRD = localFont({
  src: "../fonts/Vazirharf-RD[wght].woff2",
});

declare module "@mui/material/styles" {
  interface Palette {
    download: PaletteColor;
    paperBorder: PaletteColor;
    textArea: PaletteColor;
    textAreaBorder: PaletteColor;
    linkasdf: PaletteColor;
    inputBackground: PaletteColor;
  }
  interface PaletteOptions {
    download: PaletteColor;
    paperBorder: PaletteColor;
    textArea: PaletteColor;
    textAreaBorder: PaletteColor;
    linkasdf: PaletteColor;
    inputBackground: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    download: true;
  }
}

const FONT_FAMILY = `${vazirharf.style.fontFamily}, 'Roboto', 'Tahoma', 'Helvetica', 'Arial', 'sans-serif'`;

const { palette } = createTheme();

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#1976d2" },
        secondary: { main: "#00796b" },
        download: palette.augmentColor({ color: { main: "#ffe9c7" } }),
        paperBorder: palette.augmentColor({ color: { main: "#9e9e9e" } }),
        textArea: palette.augmentColor({ color: { main: "#000000" } }),
        textAreaBorder: palette.augmentColor({ color: { main: "#0000003b" } }),
        linkasdf: palette.augmentColor({ color: { main: "#0040ff" } }),
        inputBackground: palette.augmentColor({ color: { main: "#00000010" } }),
        background: { default: "#fff" },
        text: { primary: "#212121" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#90caf9" },
        secondary: { main: "#80cbc4" },
        download: palette.augmentColor({ color: { main: "#8c2a61" } }),
        paperBorder: palette.augmentColor({ color: { main: "#424242" } }),
        textArea: palette.augmentColor({ color: { main: "#ffffff" } }),
        textAreaBorder: palette.augmentColor({ color: { main: "#ffffff3b" } }),
        linkasdf: palette.augmentColor({ color: { main: "#9bc0fa" } }),
        inputBackground: palette.augmentColor({ color: { main: "#ffffff29" } }),
        background: { default: "#151520" },
        text: { primary: "#ffffff" },
      },
    },
  },
});

export function createCustomMuiTheme(direction?: "rtl" | "ltr") {
  return createTheme({
    ...theme,
    direction, // Both here and <body dir="rtl">
    transitions: {
      create: () => "none", // disable all transitions
    },
    typography: {
      fontFamily: FONT_FAMILY,
    },
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            border: `1px solid ${theme.vars?.palette.paperBorder.main}`,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "0.9rem",
          },
        },
      },
      MuiToggleButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "0.9rem",
          },
        },
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: "0.9rem",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            WebkitFontSmoothing: "auto",
            "@media (min-width: 1200px)": {
              fontSize: 18,
            },
          },
          body: {
            lineHeight: 1.63,
          },
          textarea: {
            backgroundColor: "transparent",
            color: theme.vars?.palette.textArea.main,
            border: `1px solid ${theme.vars?.palette.textAreaBorder.main}`,
            padding: "8px",
            fontSize: "1rem",
            fontFamily: FONT_FAMILY,
          },
          a: {
            color: theme.vars?.palette.linkasdf.main,
            textDecoration: "none",
          },
          pre: {
            backgroundColor: theme.vars?.palette.inputBackground.main,
            lineHeight: 1.2,
            fontSize: "0.9rem",
            paddingTop: "8px",
            paddingBottom: "8px",
            code: {
              backgroundColor: "transparent",
            },
          },
          code: {
            backgroundColor: theme.vars?.palette.inputBackground.main,
          },
          button: {
            fontFamily: FONT_FAMILY,
          },
          input: {
            '&[type="range"]': {
              verticalAlign: "middle",
              appearance: "none",
              backgroundColor: theme.vars?.palette.inputBackground.main,
            },
          },
          ".MuiButtonBase-root": {
            display: "none",
          },
        },
      },
    },
  });
}
