const STATIC_MAP_SITE = {
    TABS: {
        titles: ['Account Settings', 'User Information']
    },
    HEADER: {
        img_src: 'https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg'
    },
    SIDEMENU_ITEMS: [
        {
            name: 'Home',
            icon: 'home'
        },
        {
            name: 'My Account',
            icon: 'bullhorn'
        },
        {
            name: 'My Company',
            icon: 'building'
        },
        {
            name: 'My Settings',
            icon: 'cog'
        },
        {
            name: 'News',
            icon: 'newspaper'
        },
        {
            name: 'Analitics',
            icon: 'chart-area'
        }
    ],
    COUNTRIES: [
        'Germany',
        'Switzerland',
        'Austria'
    ],
    FORMS: {
        userInformation: {
            firstName: '',
            lastName: '',
            address: '',
            country: ''
        },
        accountSettings: {
            email: '',
            password: ''
        }
    }
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '900px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

export default STATIC_MAP_SITE