const ROUTE = Object.freeze({
    HOME: '/',
    PRODUCTS:
        {
            INDEX: '/products',
            ASSET_INVENTORY: '/products/assetInventory',
            COST_EXPLORER: '/products/costExplorer',
            ALERT_MANAGER: '/products/alertManager',
            IAM: '/products/IAM',
        },
    PRICING: '/pricing',
    CONTACT: '/contact',
    TALKTOSALES: '/talktosales',
    DOCS: 'https://spaceone.org/docs/',
    COMMUNITY: 'https://github.com/spaceone-dev/feedback/discussions',

} as const);

export default ROUTE;
