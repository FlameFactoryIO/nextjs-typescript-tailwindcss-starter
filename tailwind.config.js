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
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
        "34px": "34px",
        "35px": "35px",
        "36px": "36px",
        "38px": "38px",
        "39px": "39px",
        "40px": "40px",
        "41px": "41px",
        "42px": "42px",
        "44px": "44px",
        "45px": "45px",
        "48px": "48px",
        "50px": "50px",
        "51px": "51px",
        "52px": "52px",
        "54px": "54px",
        "55px": "55px",
        "57px": "57px",
        "59px": "59px",
        "62px": "62px",
        "67px": "67px",
        "75px": "75px",
        "77px": "77px",
        "80px": "80px",
        "82px": "82px",
        "83px": "83px",
        "84px": "84px",
        "86px": "86px",
        "90px": "90px",
        "92px": "92px",
        "98px": "98px",
        "100px": "100px",
        "107px": "107px",
        "120px": "120px",
        "151px": "151px",
        "200px": "200px",
        "245px": "245px",
        "276px": "276px",
        "330px": "330px",
      },
      width: {
        "32px": "32px",
        "43px": "43px",
        "50px": "50px",
        "60px": "60px",
        "90px": "90px",
        "100px": "100px",
        "106px": "106px",
        "133px": "133px",
        "140px": "140px",
        "160px": "160px",
        "182px": "182px",
        "240px": "240px",
        "260px": "260px",
        "280px": "280px",
        "286px": "286px",
        "300px": "300px",
        "320px": "320px",
        "335px": "335px",
        "370px": "370px",
        "380px": "380px",
        "390px": "390px",
        "520px": "520px",
        "542px": "542px",
        "550px": "550px",
        "576px": "576px",
        "708px": "708px",
        "740px": "740px",
        "768px": "768px",
        "800px": "800px",
        "1140px": "1140px",
        "1380px": "1380px",
      },
      height: {
        "32px": "32px",
        "43px": "43px",
        "46px": "46px",
        "50px": "50px",
        "70px": "70px",
        "104px": "104px",
        "106px": "106px",
        "133px": "133px",
        "138px": "138px",
        "140px": "140px",
        "144px": "144px",
        "160px": "160px",
        "180px": "180px",
        "182px": "182px",
        "183px": "183px",
        "248px": "248px",
        "320px": "320px",
        "333px": "333px",
        "380px": "380px",
        "352px": "352px",
        "489px": "489px",
        "520px": "520px",
        "542px": "542px",
        "640px": "640px",
      },
      minWidth: {
        "13px": "13px",
        "42px": "42px",
        "280px": "280px",
        "300px": "300px",
        "320px": "320px",
        "768px": "768px",
        "1140px": "1140px",
        "1380px": "1380px",
      },
      maxWidth: {
        "64px": "64px",
        "280px": "280px",
        "300px": "300px",
        "320px": "320px",
        "343px": "343px",
        "520px": "520px",
        "760px": "760px",
        "740px": "740px",
        "768px": "768px",
        "1140px": "1140px",
      },
      minHeight: {
        "8px": "8px",
      },
      maxHeight: {},
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
