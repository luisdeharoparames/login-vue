/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      inter: [
        "Inter",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    fontSize: {
      xxs: ".625rem", //10px
      xs: ".75rem", //12px
      sm: ".8125rem", //13px
      base: ".875rem", //14px
      lg: "1rem", //16px
      xl: "1.125rem", // 18px
      "2xl": "1.3125rem", // 21px
      "3xl": "1.5rem", // 24px
      "4xl": "1.875rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: "#FFF",
      line: "rgba(58, 87, 108, 0.15)",
      "grayish-black": "rgba(13, 22, 31, 0.33)",
      neutral: {
        10: "#f7faff",
        25: "#f5f7fa",
        50: "#eef1f5",
        100: "#dff1fc",
        200: "#bcddf8",
        300: "#8dbcee",
        400: "#5c7fbf",
        500: "#4973d3",
        600: "#3c57c0",
        700: "#30419d",
        800: "#222c71",
        900: "#131b48",
      },
      inform: {
        50: "#e7f7ff",
        100: "#b9e4f9",
        200: "#8dd2f3",
        300: "#4fb5e9",
        400: "#2796dc",
        500: "#0e75cc",
        600: "#0057b8",
        700: "#0042ae",
        800: "#02339f",
        900: "#062a8f",
      },
      confirm: {
        50: "#e2edc8",
        100: "#cde1a0",
        200: "#bad579",
        300: "#a9cc58",
        400: "#94c337",
        500: "#58ad23",
        600: "#429f28",
        700: "#218b3c",
        800: "#1a7a38",
        900: "#146935",
      },
      warning: {
        50: "#fff9e2",
        100: "#ffefb6",
        200: "#ffe487",
        300: "#ffdb57",
        400: "#ffd132",
        500: "#ffc911",
        600: "#ffba0b",
        700: "#fa0",
        800: "#f48a03",
        900: "#fd7205",
      },
      danger: {
        50: "#ffebe7",
        100: "#fecdc2",
        200: "#fdb09d",
        300: "#f97c61",
        400: "#f2573c",
        500: "#e83c27",
        600: "#da291c",
        700: "#c71811",
        800: "#b10b07",
        900: "#990300",
      },
      cyan: {
        50: "#E2FAFA",
        100: "#C1F7F8",
        200: "#A1F2F6",
        300: "#6AE3F0",
        400: "#49CCE7",
        500: "#38B0DA",
        600: "#2296CA",
        700: "#147FB5",
        800: "#09699B",
        900: "#005580",
      },
      help: {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
      },
    },
    inset: {
      2: "0.5rem",
      4: "1rem",
      20: "5rem",
      24: "6rem",
      auto: "auto",
      0: "0",
    },
    extend: {
      padding: {
        17: "4.375rem",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
      },
      opacity: {
        33: "0.33",
        90: "0.9",
      },
      borderRadius: {
        xs: ".125rem",
        sm: ".25rem",
        xl: "1.25rem",
        6: "6px",
      },
      borderWidth: {
        3: "3px",
      },
      width: {
        72: "22rem",
        "1/8": "12.5%",
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["responsive", "important", "dark"],
      margin: ["responsive", "important", "dark"],
      padding: ["responsive", "important", "dark"],
      borderWidth: ["responsive", "important", "dark"],
      borderRadius: ["responsive", "important", "dark"],
      borderStyle: ["responsive", "important", "dark"],
      borderColor: ["responsive", "important", "hover", "focus", "dark"],
      backgroundColor: ["responsive", "important", "hover", "focus", "dark"],
      height: ["responsive", "important", "dark"],
      width: ["responsive", "important", "dark"],
      flexWrap: ["responsive", "important"],
      justifyContent: ["responsive", "important", "dark"],
      alignItems: ["responsive", "important", "dark"],
      alignSelf: ["responsive", "important", "dark"],
      textColor: ["responsive", "important", "group-hover", "dark"],
      textAlign: ["responsive", "important", "dark"],
      position: ["responsive", "important", "dark"],
      boxShadow: ["responsive", "hover", "focus", "important", "dark"],
      overflow: ["responsive", "important", "dark"],
      display: ["responsive", "important", "dark"],
      verticalAlign: ["responsive", "important", "dark", "hover", "focus"],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),

    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
      gridColumns: 12,
      gridGutterWidth: "16px",
      generateContainer: true,
    }),
  ],
};
