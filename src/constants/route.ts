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
    GIT: 'https://github.com/spaceone-dev',
    YOUTUBE: 'https://www.youtube.com/channel/UCJrHbVMOd-zh2U9z35ZpJ0Q',
    FACEBOOK: 'https://www.facebook.com/groups/383290709631703',
    DEMO: 'https://help.spaceone.megazone.com/',
    COMPANY: {
        SEOUL: '',
        TOKYO: '',
        SHANGHAIL: '/',
        HONGKONG: '',
        VIETNAML: '',
        CALIFORNIAL: '',
    },
} as const);

export default ROUTE;
