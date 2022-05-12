import tw, { styled } from 'twin.macro';
import { Logo, IcExternal } from 'assets/icons';
import LinkButton from 'components/LinkButton';
import LinkText from 'components/LinkText';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ROUTE from 'constants/route';
import React, { useEffect } from 'react';

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
    align-items: center;
    &__item {
      ${tw`text-gray-500`}
      position: relative;
      display: flex;
      align-items: center;
      min-height: 64px;
      padding-right: 16px;
      padding-left: 16px;
      &-active {
      //@extend .nav-list__item;
        > a {
          ${tw`text-violet-400`}
          > svg path {
            ${tw`text-violet-500 fill-current`}
          }
        }
      }
    }
    &__item-label {
      cursor: pointer;
      &-active  {
        ${tw`text-violet-400`};
        + nav {
          display: block;
        }
      }
    }
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
    ${tw`border-gray-200`};
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
      ${tw`text-violet-400`};
    }
    &.-active {
      //@extend nav > a;
      ${tw`text-violet-400`};
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
      &-active {
        //@extend .sub-nav__item;
        a {
          ${tw`text-violet-400`}
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

const Header = () => {
    const router = useRouter();

    const NavRoutes = [
        {
            label: 'Products',
            path: ROUTE.PRODUCTS.INDEX,
            subNav: [
                {
                    label: 'Asset Inventory',
                    path: ROUTE.PRODUCTS.ASSET_INVENTORY,
                },
                {
                    label: 'Cost Explorer',
                    path: ROUTE.PRODUCTS.COST_EXPLORER,
                },
                {
                    label: 'Alert Manager',
                    path: ROUTE.PRODUCTS.ALERT_MANAGER,
                },
                {
                    label: 'IAM',
                    path: ROUTE.PRODUCTS.IAM,
                },
            ],
        },
        {
            label: 'Pricing',
            path: ROUTE.PRICING,
        },
        {
            label: 'Contact',
            path: ROUTE.CONTACT,
        },
    ];

    const FirstPathname = (currentPathname: string) => {
        let firstPathname: string[] | string = '';
        firstPathname = currentPathname.split('/');

        return firstPathname[1];
    };

    const ActiveNav = (navPath: string) => {
        let isActive = '';
        if (router.pathname.startsWith(navPath)) isActive = '-active';

        return isActive;
    };

    const [activeNav, setActiveNav] = React.useState<boolean>(false);
    const btnRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const handleClickOutside = (event: React.BaseSyntheticEvent | MouseEvent) => {
            if (!(btnRef.current?.contains(event.target))) setActiveNav((false));
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [btnRef]);

    const NavList = NavRoutes.map((item, index) => (
        <span className={`nav-list__item nav-list__item${ActiveNav(item.path)}`} key={item.path}>
            {
                item.subNav
                    ? (
                        <span
                            role="button"
                            tabIndex={index}
                            className={`nav-list__item-label${activeNav ? '-active' : ''}`}
                            onClick={() => {
                                setActiveNav(!activeNav);
                            }}
                            onKeyDown={() => {
                                setActiveNav(!activeNav);
                            }}
                            ref={btnRef}
                        >
                            {item.label}
                        </span>
                    )
                    : <Link href={item.path}>{item.label}</Link>
            }
            {item.subNav
                && (
                    <StyledSubNavList>
                        {item.subNav?.map((menu) => (
                            <Link href={menu.path}>
                                <a className={`${ActiveNav(menu.path)}`} key={menu.path} href={menu.path}>
                                    {menu.label}
                                </a>
                            </Link>
                        ))}
                    </StyledSubNavList>
                )}
        </span>
    ));

    const SubNavList = NavRoutes.map((item) => item.subNav?.map((menu) => (
        <li className={`sub-nav__item sub-nav__item${ActiveNav(menu.path)}`} key={menu.path}>
            <Link href={menu.path}>{menu.label}</Link>
        </li>
    )));

    return (
        <StyledHeader>
            <div className="header">
                <div className="header__inner">
                    <h1>
                        <Link href={ROUTE.HOME} passHref>
                            <a href={ROUTE.HOME}>
                                <Logo />
                            </a>
                        </Link>
                    </h1>
                    <StyledNav>
                        <div className="nav-list">
                            {NavList}
                            <span>
                                <LinkButton color="violet-400" size="medium" href={ROUTE.TALKTOSALES} tw="mx-4">
                                    Talk to Sales
                                </LinkButton>
                            </span>
                            <span className="nav-list__item">
                                <LinkText href={ROUTE.DOCS} tw="text-gray-600" target="_blank">
                                    Docs
                                    <StyledIcExternal />
                                </LinkText>
                            </span>
                            <span className="nav-list__item">
                                <LinkText href={ROUTE.COMMUNITY} tw="text-gray-600" target="_blank">
                                    Community
                                    <StyledIcExternal />
                                </LinkText>
                            </span>
                        </div>
                    </StyledNav>
                </div>
            </div>
            {
                FirstPathname(router.pathname) === FirstPathname(ROUTE.PRODUCTS.INDEX)
                && (
                    <StyledSubNav>
                        <div className="sub-nav">
                            <span className="sub-nav__title">Products</span>
                            <ul className="sub-nav__list">{SubNavList}</ul>
                        </div>
                    </StyledSubNav>
                )
            }
        </StyledHeader>
    );
};

export default Header;
