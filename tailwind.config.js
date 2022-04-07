// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const screens = require('./styles/screens');

module.exports = {
    purge: [],
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
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
