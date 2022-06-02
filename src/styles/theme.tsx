const screens = require('@/styles/screens');

const device = {
    desktop: `only screen and (min-width: ${screens.desktop.min}px)`,
    laptop: `only screen and (max-width: ${screens.laptop.max}px)`,
    tablet: `only screen and (max-width: ${screens.tablet.max}px)`,
    mobile: `only screen and (max-width: ${screens.mobile.max}px)`,
};

export default device;
