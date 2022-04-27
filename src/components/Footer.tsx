import tw from 'twin.macro';
import styled from 'styled-components';
import ReadySection from 'components/ReadySection';
import { Logo } from 'assets/icons';
import LinkText from 'components/LinkText';

const StyledFooter = styled.footer`
  ${tw`bg-violet-500`}
  padding: 48px 0;
  
  .footer {
    ${tw`text-white`}
    display: grid;
    row-gap: 56px;
    max-width: 1120px;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 40px;
    
    &--flex-end {
      align-items: flex-end;
    }
  }
  .logo {
    color: white;
    grid-column: 2 / span 3;
    &__text {
      margin-left: 4px;
    }
    path {
      fill: currentColor;
    }
  }
  .sitemap {
    grid-column: span 3;
    &__title {
      ${tw`text-violet-300`}
    }
    &__menu {
      ${tw`text-white`}
      margin-top: 8px;
      > a {
        color: inherit;
      }
    }
  }
  .copyright {
    ${tw`text-violet-300`}
    grid-column: 2 / span 3;
  }
  .terms {
    grid-column: span 3;
    &__item {
      margin-right: 24px;
    }
  }
  .language {
    display: flex;
    column-gap: 8px;
    grid-column: span 2;
    padding-left: 24px;
    background:url("/assets/icons/ic_global.svg") no-repeat 0 50%;
    &__item {
      ${tw`text-violet-300`}
      cursor:pointer;
    }
    &--selected {
      ${tw`text-white`}
    }
  }
  .sns {
    display: flex;
    column-gap: 20px;
    grid-column: span 2;
    align-self: flex-end;
    li {
      width: 32px;
      height: 32px;
    }
    a {
      overflow: hidden;
      display: inline-block;
      width: 100%;
      height: 100%;
      font-size: 0;
      background-size: contain;
    }
    &__git a {
      background-image: url("/assets/images/ic_footer_github.svg");
    }
    &__youtube a {
      background-image: url("/assets/images/ic_footer_youtube.svg");
    }
    &__facebook a {
      background-image: url("/assets/images/ic_footer_facebook.svg");
    }
  }
`;

const Footer = () => {
    const SiteMapData = [
        {
            title: 'Products',
            menuList: [
                { text: 'Asset Inventory', href: '/' },
                { text: 'Cost Analysis', href: '/' },
                { text: 'Alert Manager', href: '/' },
                { text: 'IAM', href: '/' },
            ],
        },
        {
            title: 'Support',
            menuList: [
                { text: 'Pricing', href: '/' },
                { text: 'FAQ', href: '/' },
                { text: 'Contact Us', href: '/' },
                { text: 'Documentation', href: '/' },
                { text: 'Community', href: '/' },
            ],
        },
    ];

    const SiteMapList = SiteMapData.map(
        (item, index) => (
            <div className={`sitemap sitemap-${index + 1}`} key={index}>
                <div className="sitemap__title">{item.title}</div>
                <ul className="sitemap__list">
                    {item.menuList.map(
                        (menu, index) => (
                            <li key={index} className="sitemap__menu">
                                <LinkText href={menu.href}>{menu.text}</LinkText>
                            </li>
                        ),
                    )}
                </ul>
            </div>
        ),
    );

    return (
        <>
            <ReadySection />
            <StyledFooter>
                <div className="footer">
                    <div className="grid">
                        <div className="logo">
                            <Logo />
                            <span className="logo__text">presents</span>
                        </div>
                        {SiteMapList}
                    </div>
                    <div className="grid grid--flex-end">
                        <div className="copyright">© 2022 Megazone Cloud Inc.</div>
                        <div className="terms">
                            <span className="terms__item">Service Terms</span>
                            <span className="terms__item">Privacy Policy</span>
                        </div>
                        <ul className="language">
                            <li className="language__item language--selected">English</li>
                            <li className="language__item">한국어</li>
                        </ul>
                        <ul className="sns">
                            <li className="sns__git"><a href="/">Git</a></li>
                            <li className="sns__youtube"><a href="/">Youtube</a></li>
                            <li className="sns__facebook"><a href="/">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </StyledFooter>
        </>
    );
};

export default Footer;
