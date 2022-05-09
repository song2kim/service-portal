import tw, { styled } from 'twin.macro';
import { Logo, IcExternal } from 'assets/icons';
import LinkButton from 'components/LinkButton';
import LinkText from 'components/LinkText';
import ROUTE from '../constants/route';

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header {
    ${tw`bg-violet-100`}
    position: relative;
    z-index: 1;
    &__inner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      max-width: 1120px;
      margin: 0 auto;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
  .nav-list {
    display: flex;
    height: 100%;
    margin-left: auto;
    &__item {
      ${tw`text-gray-500`}
      position: relative;
      display: flex;
      align-items: center;
      min-height: 64px;
      padding-right: 16px;
      padding-left: 16px;
      &:hover {
        > a {
          ${tw`text-violet-400`}
          > svg path {
            ${tw`text-violet-500 fill-current`}
          }
        }
        nav {
          display: block;
        }
      }
    }
  }
`;

const StyledIcExternal = styled(IcExternal)`
  margin-left: 4px;
  > path {
    ${tw`text-gray-500 fill-current`}
  }
`;

const StyledSubNavList = styled.nav`
  ${tw`bg-violet-100`}
  display: none;
  position: absolute;
  z-index: 100;
  top: var(--gnb-height);
  left: -16px;
  min-width: 200px;
  box-shadow: 12px 8px 14px 4px rgba(213, 213, 213, 0.35);
  border-radius: 0 0 16px 16px;
  > a {
    ${tw`border-gray-200`}
    display: flex;
    align-items: center;
    height: 52px;
    padding-left: 32px;
    padding-right: 32px;
    border-top-width: 1px;
    &:first-child {
      border-top-width: 0;
    }
    &:hover {
      ${tw`text-violet-400`}
    }
  }
`;

const StyledSubNav = styled.nav`
  ${tw`bg-white`}
  box-shadow: 0 2px 4px 4px rgba(183, 183, 183, 0.25);
  .sub-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;
    
    //display: none;
    &__title {
      ${tw`text-lg text-gray-500`}
    }
    &__list {
      display: flex;
    }
    &__item {
      a {
        ${tw`text-md text-gray-600`}
        display: flex;
        align-items: center;
        height: 48px;
        padding-right: 20px;
        padding-left: 20px;
        &:hover {
          ${tw`text-violet-400`}
        }
      }
    }
  }
`;

function Header() {
    const NavData = [
        {
            text: 'Example',
            href: '/example',
            subNav: [
                { text: 'Font', href: '/example/font' },
                { text: 'LinkButton', href: '/example/linkButton' },
                { text: 'LinkText', href: '/example/linkText' },
            ],
        },
        {
            text: 'Products',
            href: '/',
            subNav: [
                { text: 'Asset Inventory', href: ROUTE.PRODUCT.ASSET_INVENTORY },
                { text: 'Cost Explorer', href: '/products/costExplorer' },
                { text: 'Alert Manager', href: '/products/alertManager' },
                { text: 'IAM', href: '/products/IAM' },
            ],
        },
        { text: 'Pricing', href: '/pricing' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Contact', href: '/contact' },
    ];

    const NavList = NavData.map((item) => (
        <li className="nav-list__item" key={item.href}>
            <a href={item.href}>{item.text}</a>
            <StyledSubNavList>
                {item.subNav?.map((menu) => (
                    <a key={menu.href} href={menu.href}>
                        {menu.text}
                    </a>
                ))}
            </StyledSubNavList>
        </li>
    ));

    const SubNavList = NavData.map((item) => item.subNav?.map((menu) => (
        <li className="sub-nav__item" key={menu.href}>
            <a href={menu.href}>{menu.text}</a>
        </li>
    )));

    return (
        <StyledHeader>
            <div className="header">
                <div className="header__inner">
                    <h1>
                        <a href="/">
                            <Logo />
                        </a>
                    </h1>
                    <StyledNav>
                        <ul className="nav-list">{NavList}</ul>
                        <LinkButton color="violet-400" size="medium" href="/talktosales" tw="mx-4">
                            Talk to Sales
                        </LinkButton>
                        <span className="nav-list__item">
                            <LinkText href="/" tw="text-gray-600">
                                Docs
                                <StyledIcExternal />
                            </LinkText>
                        </span>
                        <span className="nav-list__item">
                            <LinkText href="/" tw="text-gray-600">
                                Community
                                <StyledIcExternal />
                            </LinkText>
                        </span>
                    </StyledNav>
                </div>
            </div>
            <StyledSubNav>
                <div className="sub-nav">
                    <span className="sub-nav__title">Products</span>
                    <ul className="sub-nav__list">{SubNavList}</ul>
                </div>
            </StyledSubNav>
        </StyledHeader>
    );
}

export default Header;
