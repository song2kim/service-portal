// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    purge: [],
    theme: {
        fontFamily: {
            sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
            serif: ['Work Sans', ...defaultTheme.fontFamily.serif],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
