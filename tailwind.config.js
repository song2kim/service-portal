// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const screens = require('./src/styles/screens');

module.exports = {
    content: [],
    theme: {
        fontFamily: {
            sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
            serif: ['Work Sans', ...defaultTheme.fontFamily.serif],
        },
        screens: {
            desktop: { min: `${screens.desktop.min}px` },
            laptop: { min: `${screens.laptop.min}px`, max: `${screens.laptop.max}px` },
            tablet: { min: `${screens.tablet.min}px`, max: `${screens.tablet.max}px` },
            mobile: { max: `${screens.mobile.max}px` },
        },
        colors: {
            primary: '#6638B6',
            violet: {
                100: '#F8F8FC',
                200: '#EBEAF6',
                300: '#6638B6',
                400: '#3C2C84',
            },
            gray: {
                100: '#F6F6F6',
                200: '#D8D8D8',
                300: '#A3A3A3',
                400: '#86868B',
                500: '#484848',
                600: '#1D1D1F',
            },
            white: '#FFFFFF',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
