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
    screens: {
      sm:"1px",
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
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        26: "26px",
        32: "32px",
        43: "43px",
        48: "48px",
      },
      borderRadius: {
        "10px": "10px",
        "10pxi": "10px !important",
        "24px": "24px",
        "24pxi": "24px !important",
      },
      lineHeight: {
        "14-4px": "14.4px",
        "18px": "18px",
        "18-2px": "18.2px",
        "20px": "20px",
        "21px": "21px",
        "22-5px": "22.5px",
        "24px": "24px",
        "26px": "26px",
        "30px": "30px",
        "31-2px": "31.2px",
        "38px": "38px",
        "56px": "56px",
        "57-6px": "57.6px",
        "65px": "65px",
      },
      spacing: {
        "5px": "5px",
        "9px": "9px",
        "10px": "10px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "20px": "20px",
        "21px": "21px",
        "24px": "24px",
        "25px": "25px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
        "36px": "36px",
        "40px": "40px",
        "41px": "41px",
        "48px": "48px",
        "52px": "52px",
        "54px": "54px",
        "59px": "59px",
        "62px": "62px",
        "75px": "75px",
        "83px": "83px",
        "92px": "92px",
        "100px": "100px",
        "120px": "120px",
      },
      width: {
        "160px": "160px",
        "240px": "240px",
        "280px": "280px",
        "300px": "300px",
        "320px": "320px",
        "550px": "550px",
        "708px": "708px",
        "768px":"768px",
        "1140px": "1140px",
        "1380":"1380",
      },
      height: {
        37: "37px",
        160: "160px",
        170: "170px",
        190: "190px",
        243: "243px",
        290: "290px",
        450: "450px",
      },
      minWidth: {
        300: "300px",
      },
      maxWidth: {
        300: "300px",
        "760px": "760px",
        "740px": "740px",
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
        "your-opportunity": "#FEF4F0",
        footer: "#F0F3F8",
        "your-opportunity-card-top": "#0A173C",
        "your-opportunity-card-bottom": "#080719",
        "we-connect-charities-bg-left": "#0A173C",
        "we-connect-charities-bg-right": "#10143c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
