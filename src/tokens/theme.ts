import {
  Button,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  Menu,
  mergeMantineTheme
} from "@mantine/core";
import chroma from "chroma-js";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    pink: [
      "#fef1f8",
      "#fee5f2",
      "#ffcae7",
      "#ff9fd2",
      "#ff63b2",
      "#ff479c",
      "#f0126e",
      "#d10553",
      "#ad0745",
      "#8f0c3d"
    ],
    violet: [
      "#f4f3ff",
      "#ebe9fe",
      "#d9d7fd",
      "#bdb6fc",
      "#9c8df8",
      "#7b5ff3",
      "#693dea",
      "#5a2bd6",
      "#4b23b4",
      "#412098"
    ],
    yellow: [
      "#fdfee8",
      "#fcffc2",
      "#fdff89",
      "#fffb37",
      "#fdef12",
      "#ecd406",
      "#cca702",
      "#a37805",
      "#865e0d",
      "#724d11"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Lexend Variable', sans-serif"
  },
  primaryColor: "violet",
  other: {
    pink: {
      black: "#58001f"
    },
    violet: {
      black: "#241164"
    },
    yellow: {
      black: "#432905"
    }
  },
  components: {
    Button: Button.extend({
      styles: {
        root: {
          "--button-bg": "var(--mantine-button-bg)",
          "--button-hover": "var(--mantine-button-hover)",
          "--button-hover-color": "var(--mantine-button-hover-color)",
          transition: "all 200ms"
        }
      }
    }),
    Menu: Menu.extend({
      styles: (theme) => ({
        divider: {
          borderColor: chroma(theme.colors.violet[1]).alpha(0.2).css()
        },
        dropdown: {
          "--menu-item-color": theme.white,
          "--menu-item-hover": chroma(theme.other.violet.black)
            .brighten(0.8)
            .css(),
          "--popover-border-color": chroma(theme.colors.violet[1])
            .alpha(0.2)
            .css(),
          backgroundColor: chroma(theme.other.violet.black).brighten(0.4).css()
        },
        itemLabel: {
          fontSize: 16
        }
      })
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-border-radius": `${theme.defaultRadius}px`,
    "--mantine-button-bg": theme.colors.violet[6],
    "--mantine-button-color": theme.white,
    "--mantine-button-hover": theme.colors.yellow[5],
    "--mantine-button-hover-color": theme.other.violet.black,
    "--mantine-color-violet-black": theme.other.violet.black,
    "--text-color": theme.white
  },
  light: {},
  dark: {
    "--mantine-color-body": theme.other.violet.black,
    "--mantine-color-dimmed": chroma(theme.colors.violet[1]).darken(1).css()
  }
});
