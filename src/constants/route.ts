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
        SEOUL: 'https://www.google.com/maps/dir/Seoul,+Nonhyeon-ro+85-gil,+%EB%A9%94%EA%B0%80%EC%A1%B4%EB%B9%8C%EB%94%A9,+%EB%A9%94%EA%B0%80%EC%A1%B4%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C/data=!3m1!5s0x60188ca42e1df2c5:0xf9d5804bd9e36647!4m8!4m7!1m0!1m5!1m1!1s0x357ca1567124f385:0xa411d346f9163a6c!2m2!1d127.0342741!2d37.4982296',
        TOKYO: 'https://www.google.com/maps/dir/WeWork+%E3%82%A2%E3%82%A4%E3%82%B9%E3%83%90%E3%83%BC%E3%82%B0+%E6%97%A5%E6%9C%AC+%E3%80%92150-0001+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D%EF%BC%96%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%98+%E3%82%B8+%E3%82%A2%E3%82%A4%E3%82%B9%E3%83%90%E3%83%BC%E3%82%B0+1F/@35.6663762,139.7042606,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188d74a015fe2d:0x8483879597545cbe!2m2!1d139.7042606!2d35.6663762',
        SHANGHAIL: 'https://www.google.com/maps/dir/WeWork+(Yanping+Lu),+135+%E5%BB%B6%E5%B9%B3%E8%B7%AF%E6%9B%B9%E5%AE%B6%E6%B8%A1+Jing\'An,+Shanghai,+%EC%A4%91%EA%B5%AD+200042/@31.2312785,121.4370661,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x35b26fef38452317:0xdd92daf0792a2bc1!2m2!1d121.4392548!2d31.2312785',
        HONGKONG: 'https://www.google.com/maps/dir/WeWork+Lee+Garden+One+46%2FF,+Lee+Garden+One+33+Hysan+Ave+Causeway+Bay,+Hong+Kong/@22.2784388,114.1847145,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x340401950dcad0bf:0x3e2d09888a08fb94!2m2!1d114.1847145!2d22.2784388',
        VIETNAML: 'https://www.google.com/maps/dir/Lotte+Center+H%C3%A0+N%E1%BB%99i+54+P.+Li%E1%BB%85u+Giai+Ng%E1%BB%8Dc+Kh%C3%A1nh+Ba+%C4%90%C3%ACnh,+H%C3%A0+N%E1%BB%99i+117000,+Vi%E1%BB%87t+Nam/@21.0318761,105.8123032,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135ab6cf59cc7e1:0xe98382655f28598e!2m2!1d105.8123032!2d21.0318761',
        CALIFORNIAL: 'https://www.google.com/maps/dir/Spaces+-+California,+San+Jose+-+Spaces+San+Jose+-+Santana+Row+Plaza+West+3031+Tisch+Way+%23110+San+Jose,+CA+95128,+United+States/@37.317537,-121.9476266,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fcadf57871f6b:0x74d3caea4de9be67!2m2!1d-121.9476266!2d37.317537',
    },
} as const);

export default ROUTE;
