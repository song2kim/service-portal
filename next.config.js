const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: { styledComponents: true },
    fs: 'empty',
    module: 'empty',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    experimental: {
        outputStandalone: true,
    },
    async redirects() {
        return [
            {
                source: '/products',
                destination: '/products/assetInventory',
                permanent: true,
            },
        ];
    },
    i18n,
};

module.exports = nextConfig;
