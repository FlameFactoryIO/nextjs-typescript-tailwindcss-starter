const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./public/**/*.html",
    ],
    safelist: ["primary", "secondary"].flatMap((variant) => [
      `bg-${variant}-500`,
      `active:bg-${variant}-600`,
      `ring-${variant}-100`,
      `focus:ring-${variant}-50`,
    ]),
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      t: "768px",
      d: "1380px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        hand: ["Dancing Script"],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "26px": "26px",
        "32px": "32px",
        "34px": "34px",
        "43px": "43px",
        "46px": "46px",
        "48px": "48px",
      },
      borderRadius: {
        "8px": "8px",
        "10px": "10px",
        "10pxi": "10px !important",
        "16px": "16px !important",
        "24px": "24px",
        "24pxi": "24px !important",
        "26px": "26px",
      },
      lineHeight: {
        128: "1.56rem",
        "13px": "13px",
        "14-4px": "14.4px",
        "16px": "16px",
        "16-9px": "16.9px",
        "17px": "17px",
        "18px": "18px",
        "18-2px": "18.2px",
        "19-5px": "19.5px",
        "20px": "20px",
        "20-8px": "20.8px",
        "21px": "21px",
        "21-6px": "21.6px",
        "22-5px": "22.5px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28-5px": "28.5px",
        "28-8px": "28.8px",
        "30px": "30px",
        "31-2px": "31.2px",
        "38px": "38px",
        "41px": "41px",
        "51-6px": "51.6px",
        "56px": "56px",
        "57-6px": "57.6px",
        "65px": "65px",
      },
      spacing: Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      width:Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      height: Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      minWidth: Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      maxWidth: Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      minHeight: Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      maxHeight: Array.from({length: 1500}).map(v => ({[`${v}px`]: `${v}px`})),
      flex: Array.from({length: 1500}).map(v => ({[v]: v})),
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
        "your-opportunity": "#FEF4F0",
        footer: "#F0F3F8",
        "your-opportunity-card-top": "#0A173C",
        "your-opportunity-card-bottom": "#080719",
        "we-connect-charities-bg-left": "#0A173C",
        "we-connect-charities-bg-right": "#10143c",
        "looking-for-a-cause": "#F7F9FC",
        "nonprofit-step2": "#2D75F8",
        "nonprofit-questions": "#091023",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
