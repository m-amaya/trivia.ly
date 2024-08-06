import {
  Button,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme
} from "@mantine/core";

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    blue: [
      "#ccfcff",
      "#9ff6ff",
      "#5cecff",
      "#13d9fd",
      "#00bce3",
      "#0095bf",
      "#04769a",
      "#0e607d",
      "#104f69",
      "#043448"
    ],
    ocean: [
      "#cefffd",
      "#a4fdfb",
      "#65fbfa",
      "#1feef1",
      "#03c6cb",
      "#06a7b4",
      "#0c8592",
      "#146b76",
      "#155864",
      "#073a45"
    ],
    orange: [
      "#ffe6d4",
      "#ffc9a8",
      "#ffa371",
      "#ff7138",
      "#fe4b11",
      "#ef3107",
      "#c62008",
      "#9d1c0f",
      "#7e1a10",
      "#440906"
    ],
    red: [
      "#ffdde2",
      "#ffc0ca",
      "#ff94a4",
      "#ff5771",
      "#ff2344",
      "#ff193c",
      "#d70021",
      "#b1031d",
      "#920a1f",
      "#50000c"
    ],
    turquoise: [
      "#c3fff6",
      "#87ffef",
      "#43ffe6",
      "#0bedd0",
      "#00d7bd",
      "#00ae9d",
      "#008a7f",
      "#026d66",
      "#085954",
      "#003736"
    ],
    yellow: [
      "#fffec1",
      "#fff986",
      "#ffed41",
      "#ffdc0d",
      "#ffcd00",
      "#d19600",
      "#a66b02",
      "#89530a",
      "#74440f",
      "#442304"
    ]
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Lexend Variable', sans-serif"
  },
  primaryColor: "turquoise",
  other: {
    blue: {
      white: "#ebffff"
    },
    ocean: {
      white: "##ecfffe"
    },
    orange: {
      white: "#fff4ed"
    },
    red: {
      white: "#fff0f2"
    },
    turquoise: {
      white: "#eefffb"
    },
    yellow: {
      white: "#fffee7"
    }
  },
  components: {
    Button: Button.extend({
      styles: {
        label: {
          color: "var(--mantine-button-color)"
        },
        root: {
          "--button-bg": "var(--mantine-button-bg)",
          "--button-hover": "var(--mantine-button-hover)",
          transition: "background-color 200ms"
        }
      }
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-border-radius": `${theme.defaultRadius}px`
  },
  light: {
    "--mantine-button-bg": theme.colors.turquoise[3],
    "--mantine-button-color": theme.colors.turquoise[9],
    "--mantine-button-hover": theme.colors.turquoise[1]
  },
  dark: {}
});
