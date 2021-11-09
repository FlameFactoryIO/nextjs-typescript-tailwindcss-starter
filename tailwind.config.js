const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    mode: "jit",
    purge: {
        content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./public/**/*.html",
        ],
        safelist: [
            ...["primary", "black", "white", "green"].flatMap((variant) => [
                `hover:text-${variant}-200`,
                `text-${variant}-500`,
                `bg-${variant}-500`,
                `active:bg-${variant}-500`,
                `active:bg-${variant}-600`,
                `checked:bg-${variant}-200`,
                `checked:bg-${variant}-500`,
                `focus:bg-${variant}-500`,
                `hover:bg-${variant}-500`,
                `ring-${variant}-100`,
                `focus:ring-${variant}-50`,
            ]),
        ],
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
                hand: ["January Handwriting"],
            },
            fontSize: {},
            borderRadius: {
                "6px": "6px",
                "6pxi": "6px !important",
                "8px": "8px",
                "8pxi": "8px !important",
                "10px": "10px",
                "10pxi": "10px !important",
                "16px": "16px",
                "16pxi": "16px !important",
                "19px": "19px",
                "20px": "20px",
                "20pxi": "20pxi",
                "24px": "24px",
                "24pxi": "24px !important",
                "25px": "25px",
                "26px": "26px",
                "30px": "30px",
                "34px": "34px",
                "40px": "40px",
                "50px": "50px",
            },
            borderWidth: {
                "1px": "1px",
                "2px": "2px",
            },
            lineHeight: {
                128: "1.56rem",
                "13px": "13px",
                "14px": "14px",
                "14-4px": "14.4px",
                "15-6px": "15.6px",
                "16px": "16px",
                "16-9px": "16.9px",
                "17px": "17px",
                "18px": "18px",
                "18-2px": "18.2px",
                "19px": "19px",
                "19-5px": "19.5px",
                "20px": "20px",
                "20-8px": "20.8px",
                "21px": "21px",
                "21-6px": "21.6px",
                "22px": "22px",
                "22-5px": "22.5px",
                "23px": "23px",
                "23-4px": "23.4px",
                "24px": "24px",
                "25px": "25px",
                "26px": "26px",
                "27px": "27px",
                "28-5px": "28.5px",
                "28-8px": "28.8px",
                "30px": "30px",
                "31-2px": "31.2px",
                "32-2px": "32.2px",
                "33px": "33px",
                "33-6px": "33.6px",
                "35-5px": "35.5px",
                "38px": "38px",
                "40-8px": "40.8px",
                "41px": "41px",
                "51-6px": "51.6px",
                "52px": "52px",
                "56px": "56px",
                "57-6px": "57.6px",
                "65px": "65px",
            },
            boxShadow: {
                "0-6-24": "0 6px 24px rgba(0, 0, 0, 0.12)",
                "2-5-15": "2px 5px 15px rgba(0, 0, 0, 0.28)",
                "0-2-5": "0px 2px 5px rgba(0, 0, 0, 0.25)",
                "4-10-24-8": "4px 10px 24px 8px rgba(0, 0, 0, 0.35)",
                "0-3-16": "0px 3px 16px rgba(0, 0, 0, 0.06)",
                "0-5-15": "0px 5px 15px rgba(0, 0, 0, 0.10)",
                "0-6-24_18": "0px 6px 24px rgba(0, 0, 0, 0.18)"
            },
            spacing: {},
            width: {},
            height: {
                "1539px": "1539px",
            },
            minWidth: {},
            maxWidth: {},
            minHeight: {},
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
                black: {
                    DEFAULT: "#000000",
                    50: "#737373",
                    100: "#666666",
                    200: "#4D4D4D",
                    300: "#333333",
                    400: "#1A1A1A",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#FFFFFF",
                    400: "#FFFFFF",
                    500: "#FFFFFF",
                    600: "#E6E6E6",
                    700: "#CCCCCC",
                    800: "#B3B3B3",
                    900: "#999999",
                },
                secondary: defaultTheme.colors.black,
                footer: "#F0F3F8",
                "we-connect-charities-bg-right": "#10143c",
                "looking-for-a-cause": "#F7F9FC",
                "nonprofit-step2": "#2D75F8",
                cream: "#FEF4F0",
                "blue-darker": "#080719",
                "blue-dark": "#0A173C",
                "form-contact": "#FFFFFF",
                blue: "#091023",
                "yellow-border": "#FBBC1B",
                "red-select-border": "#E8430033",
                "secondary-gray-1": "#DAE0E9",
                "secondary-gray-2": "#D3D9E1",
                "secondary-gray-3": "#A1AAAF",
                "secondary-gray-4": "#E5E9EF",
                "secondary-gray-5": "#7C7C7C",
                "search-border": "#E84300",
                input: "#D3D9E1",
                "nonprofit-logo": "#E3E4E580",
                "input-border": "#C6CACC",
                "secondary-green-1": "#38C058",
                "secondary-green-2": "#4abf51",
                // gray, red, green son nombres de colores reservados, usar otro nombre
            },
            backgroundImage: {
                "login-email": "url('/images/login/icon-email.svg')",
                "login-password": "url('/images/login/icon-password.svg')",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
        },
    },
};

const range = (start, end, step = 1) =>
    Array.from({ length: (end - start) / step + 1 }, (_, i) => i + start);

range(6, 50).forEach((i) => {
    module.exports.theme.extend.fontSize[`${i}px`] = `${i}px`;
});
range(1, 1000).forEach((i) => {
    module.exports.theme.extend.spacing[`${i}px`] = `${i}px`
});
range(1, 1380).forEach((i) => {
    module.exports.theme.extend.width[`${i}px`] = `${i}px`;
    module.exports.theme.extend.minWidth[`${i}px`] = `${i}px`;
    module.exports.theme.extend.maxWidth[`${i}px`] = `${i}px`;
});
range(1, 1000).forEach((i) => {
    module.exports.theme.extend.height[`${i}px`] = `${i}px`;
    module.exports.theme.extend.minHeight[`${i}px`] = `${i}px`;
    module.exports.theme.extend.maxHeight[`${i}px`] = `${i}px`;
});