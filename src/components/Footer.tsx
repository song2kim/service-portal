import tw from 'twin.macro';
import styled from 'styled-components';
import { IcExternal, Logo } from '@/assets/icons';
import LinkText from '@/components/LinkText';
import ROUTE from '@/constants/route';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

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
    &__text2 {
      ${tw`text-violet-200 text-sm`};
      margin-top: 8px;
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
    ${tw`text-violet-200 text-sm`}
    grid-column: 2 / span 3;
  }
  .terms {
    ${tw`text-violet-100 text-sm`}
    grid-column: span 3;
    &__item {
      margin-right: 12px;
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
  
  @media (max-width: 1439px) {
    .footer {
      padding: 0 24px;  
    }
  }
  
  @media (max-width: 1023px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
    .logo {
      grid-column: 1 / span 1;
    }
    .sitemap,
    .copyright,
    .terms,
    .language,
    .sns {
      grid-column: span 1;
    }
  }
  @media (max-width: 767px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 40px;
    }
    .logo {
      grid-column: 1 / span 4;
    }
    .sitemap,
    .copyright,
    .terms,
    .language,
    .sns {
      grid-column: span 4;
    }
  }
`;

interface MenuList {
    text: string;
    href: string;
    externalLink?: boolean;
}

interface SiteMapDataType {
    title: string;
    menuList: MenuList[]
}

const Footer = () => {
    const router = useRouter();

    const SiteMapData: SiteMapDataType[] = [
        {
            title: 'Products',
            menuList: [
                { text: 'Asset Inventory', href: ROUTE.PRODUCTS.ASSET_INVENTORY },
                { text: 'Cost Analysis', href: ROUTE.PRODUCTS.COST_EXPLORER },
                { text: 'Alert Manager', href: ROUTE.PRODUCTS.ALERT_MANAGER },
                { text: 'IAM', href: ROUTE.PRODUCTS.IAM },
            ],
        },
        {
            title: 'Support',
            menuList: [
                { text: 'Pricing', href: ROUTE.PRICING },
                { text: 'Contact', href: ROUTE.CONTACT },
                { text: 'Documentation', href: ROUTE.DOCS, externalLink: true },
                { text: 'Community', href: ROUTE.COMMUNITY, externalLink: true },
            ],
        },
    ];

    const SiteMapList = SiteMapData.map(
        (item) => (
            <div className="sitemap" key={item.title}>
                <div className="sitemap__title">{item.title}</div>
                <ul className="sitemap__list">
                    {item.menuList.map(
                        (menu) => (
                            <li className="sitemap__menu" key={menu.text}>
                                {menu.externalLink
                                    ? (
                                        <LinkText href={menu.href} target="_blank">
                                            {menu.text}
                                            <IcExternal />
                                        </LinkText>
                                    ) : (
                                        <LinkText href={menu.href}>
                                            {menu.text}
                                        </LinkText>
                                    )}
                            </li>
                        ),
                    )}
                </ul>
            </div>
        ),
    );

    const LanguageData = [
        {
            language: 'English',
            locale: 'en',
        },
        {
            language: '한국어',
            locale: 'ko',
        },
    ];

    return (
        <StyledFooter>
            <div className="footer">
                <div className="grid">
                    <div className="logo">
                        <Logo />
                        <span className="logo__text">presents</span>
                        <p className="logo__text2">© MEGAZONE CLOUD Corp.</p>
                    </div>
                    {SiteMapList}
                </div>
                <div className="grid grid--flex-end">
                    <div className="copyright">
                        Copyright 2022
                        <br />
                        © MEGAZONE CLOUD Corp.
                        <br />
                        All Right Reserved.
                    </div>
                    <div className="terms">
                        <span className="terms__item">Terms of Service</span>
                        <span className="terms__item">Privacy Policy</span>
                    </div>
                    <ul className="language">
                        {LanguageData.map((item) => (
                            <li
                                key={item.language}
                                role="presentation"
                                className={`language__item${item.locale === router.locale ? '--selected' : ''}`}
                            >
                                <Link href={router.route} locale={item.locale}>{item.language}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="sns">
                        <li className="sns__git">
                            <Link href={ROUTE.GIT}>Git</Link>
                        </li>
                        <li className="sns__youtube">
                            <Link href={ROUTE.YOUTUBE}>Youtube</Link>
                        </li>
                        <li className="sns__facebook">
                            <Link href={ROUTE.FACEBOOK}>Facebook</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
