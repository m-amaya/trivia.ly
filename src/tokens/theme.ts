import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    blue: [
      "#ebfaff",
      "#d7f2fb",
      "#a9e3f9",
      "#7ad4f7",
      "#5bc8f6",
      "#4cc0f5",
      "#43bdf6",
      "#37a6dc",
      "#2893c4",
      "#0080ad"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Inter Variable', sans-serif"
  },
  primaryColor: "blue"
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {},
  dark: {}
});
