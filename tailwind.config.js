const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    purge: {
        content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./public/**/*.html",
        ],
        safelist: ["primary", "black", "white"].flatMap((variant) => [
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
                hand: ["January Handwriting"],
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
                "25px": "25px",
                "26px": "26px",
                "32px": "32px",
                "34px": "34px",
                "42px": "42px",
                "43px": "43px",
                "46px": "46px",
                "48px": "48px",
            },
            borderRadius: {
                "6pxi": "6px !important",
                "8px": "8px",
                "8pxi": "8px !important",
                "10px": "10px",
                "10pxi": "10px !important",
                "16px": "16px !important",
                "20px": "20px",
                "20pxi": "20pxi",
                "24px": "24px",
                "24pxi": "24px !important",
                "25px": "25px",
                "26px": "26px",
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
                "52px": "52px",
                "56px": "56px",
                "57-6px": "57.6px",
                "65px": "65px",
            },
            spacing: {
                "0-5px": "0.5px",
                "1px": "1px",
                "2px": "2px",
                "3px": "3px",
                "4px": "4px",
                "5px": "5px",
                "6px": "6px",
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
                "19px": "19px",
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
                "31px": "31px",
                "32px": "32px",
                "33px": "33px",
                "34px": "34px",
                "35px": "35px",
                "36px": "36px",
                "37px": "37px",
                "38px": "38px",
                "39px": "39px",
                "40px": "40px",
                "41px": "41px",
                "42px": "42px",
                "43px": "43px",
                "44px": "44px",
                "45px": "45px",
                "46px": "46px",
                "48px": "48px",
                "49px": "49px",
                "50px": "50px",
                "51px": "51px",
                "52px": "52px",
                "53px": "53px",
                "54px": "54px",
                "55px": "55px",
                "56px": "56px",
                "57px": "57px",
                "58px": "58px",
                "59px": "59px",
                "60px": "60px",
                "61px": "61px",
                "62px": "62px",
                "63px": "63px",
                "67px": "67px",
                "68px": "68px",
                "69px": "69px",
                "70px": "70px",
                "72px": "72px",
                "75px": "75px",
                "77px": "77px",
                "80px": "80px",
                "82px": "82px",
                "83px": "83px",
                "84px": "84px",
                "86px": "86px",
                "88px": "88px",
                "90px": "90px",
                "92px": "92px",
                "94px": "94px",
                "96px": "96px",
                "98px": "98px",
                "100px": "100px",
                "103px": "103px",
                "104px": "104px",
                "107px": "107px",
                "110px": "110px",
                "112px": "112px",
                "114px": "114px",
                "119px": "119px",
                "120px": "120px",
                "125px": "125px",
                "134px": "134px",
                "136px": "136px",
                "137px": "137px",
                "140px": "140px",
                "141px": "141px",
                "145px": "145px",
                "148px": "148px",
                "150px": "150px",
                "151px": "151px",
                "159px": "159px",
                "160px": "160px",
                "167px": "167px",
                "170px": "170px",
                "177px": "177px",
                "190px": "190px",
                "200px": "200px",
                "201px": "201px",
                "217px": "217px",
                "220px": "220px",
                "226px": "226px",
                "232px": "232px",
                "240px": "240px",
                "245px": "245px",
                "273px": "273px",
                "274px": "274px",
                "276px": "276px",
                "290px": "290px",
                "300px": "300px",
                "330px": "330px",
                "364px": "364px",
                "400px": "400px",
                "452px": "452px",
                "579px": "579px",
                "685px": "685px",
            },
            width: {
                "32px": "32px",
                "42px": "42px",
                "43px": "43px",
                "44px": "44px",
                "46px": "46px",
                "50px": "50px",
                "60px": "60px",
                "90px": "90px",
                "100px": "100px",
                "106px": "106px",
                "133px": "133px",
                "140px": "140px",
                "160px": "160px",
                "170px": "170px",
                "180px": "180px",
                "182px": "182px",
                "222px": "222px",
                "240px": "240px",
                "260px": "260px",
                "270px": "270px",
                "280px": "280px",
                "286px": "286px",
                "293px": "293px",
                "300px": "300px",
                "308px": "308px",
                "320px": "320px",
                "333px": "333px",
                "335px": "335px",
                "343px": "343px",
                "370px": "370px",
                "380px": "380px",
                "390px": "390px",
                "418px": "418px",
                "520px": "520px",
                "542px": "542px",
                "544px": "544px",
                "548px": "548px",
                "550px": "550px",
                "576px": "576px",
                "579px": "579px",
                "602px": "602px",
                "708px": "708px",
                "740px": "740px",
                "768px": "768px",
                "800px": "800px",
                "1140px": "1140px",
                "1380px": "1380px",
            },
            height: {
                "1px": "1px",
                "6px": "6px",
                "32px": "32px",
                "42px": "42px",
                "43px": "43px",
                "44px": "44px",
                "46px": "46px",
                "50px": "50px",
                "60px": "60px",
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
                "205px": "205px",
                "248px": "248px",
                "320px": "320px",
                "333px": "333px",
                "380px": "380px",
                "352px": "352px",
                "398px": "398px",
                "480px": "480px",
                "489px": "489px",
                "500px": "500px",
                "520px": "520px",
                "542px": "542px",
                "548px": "548px",
                "640px": "640px",
            },
            minWidth: {
                "13px": "13px",
                "42px": "42px",
                "222px": "222px",
                "280px": "280px",
                "300px": "300px",
                "320px": "320px",
                "333px": "333px",
                "343px": "343px",
                "344px": "344px",
                "540px": "540px",
                "549px": "549px",

                "768px": "768px",
                "1140px": "1140px",
                "1380px": "1380px",
            },
            maxWidth: {
                "64px": "64px",
                "168px": "168px",
                "280px": "280px",
                "288px": "288px",
                "290px": "290px",
                "293px": "2893px",
                "300px": "300px",
                "320px": "320px",
                "328px": "328px",
                "333px": "333px",
                "335px": "335px",
                "336px": "336px",
                "341px": "341px",
                "343px": "343px",
                "345px": "345px",
                "375px": "375px",
                "378px": "378px",
                "380px": "380px",
                "418px": "418px",
                "452px": "452px",
                "500px": "500px",
                "520px": "520px",
                "540px": "540px",
                "544px": "544px",
                "545px": "545px",
                "549px": "549px",
                "550px": "550px",
                "602px": "602px",
                "570px": "570px",
                "579px": "579px",
                "760px": "760px",
                "740px": "740px",
                "768px": "768px",
                "914px": "914px",
                "1040px": "1040px",
                "1140px": "1140px",
            },
            minHeight: {
                "6px": "6px",
                "8px": "8px",
            },
            maxHeight: {
                "304px": "304px",
                "320px": "320px",
                "340px": "340px",
                "343px": "343px",
                "408px": "408px",
                "448px": "448px",
                "480px": "480px",
                "554px": "554px",
                "640px": "640px",
                "750px": "750px",
                "772px": "772px",
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
                footer: "#F0F3F8",
                "we-connect-charities-bg-right": "#10143c",
                "looking-for-a-cause": "#F7F9FC",
                "nonprofit-step2": "#2D75F8",
                cream: "#FEF4F0",
                "blue-darker": "#080719",
                "blue-dark": "#0A173C",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};