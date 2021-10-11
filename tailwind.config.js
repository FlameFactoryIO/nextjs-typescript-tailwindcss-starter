const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        hand: ["Dancing Script"],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        26: "26px",
        32: "32px",
        43: "43px",
        48: "48px",
      },
      lineHeight: {
        128: "1.56rem",
        "18px": "18px",
        "21px": "21px",
        "24px": "24px",
        "26px": "26px",
        "38px": "38",
        "56px": "56",
      },
      spacing: {
        "5px": "5px",
        "10px": "10px",
        "12px": "12px",
        "15px": "15px",
        "18px": "18px",
        "24px": "24px",
        "25px": "25px",
        "28px": "28px",
        "30px": "30px",
        "36px": "36px",
        "40px": "40px",
        "48px": "48px",
        "92px": "92px",
      },
      width: {
        300: "300px",
      },
      minWidth: {
        300: "300px",
      },
      maxWidth: {
        300: "300px",
      },
      colors: {
        primary: {
          DEFAULT: "#E84300",
          50: "#FFDDCF",
          100: "#FFCAB5",
          200: "#FFA682",
          300: "#FF824F",
          400: "#FF5E1C",
          500: "#E84300",
          600: "#B53400",
          700: "#822600",
          800: "#4F1700",
          900: "#1C0800",
        },
        secondary: defaultTheme.colors.blue,
        footer: "#F0F3F8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
