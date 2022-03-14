module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
