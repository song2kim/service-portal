import tw, { styled } from 'twin.macro';
// import styled from 'styled-components';
import { Logo, IcExternal } from 'assets/icons';
import LinkButton from 'components/linkButton';

const StyledHeader = styled.header`
  ${tw`bg-violet-100`}
  .inner {
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    max-width: 1120px;
    margin: 0 auto;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
  ul {
    display: flex;
    height: 100%;
    margin-left: auto;
    li {
      position: relative;
      &:hover {
        nav {
          display: block;
        }
      }
    }
  }
  .nav-item {
    ${tw`text-gray-500`}
    display: flex;
    align-items: center;
    min-height: 64px;
    padding-right: 16px;
    padding-left: 16px;
    &:hover {
      ${tw`text-violet-400`}
      > svg path {
        ${tw`text-violet-500 fill-current`}
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

const StyledLinkButton = styled(LinkButton)`
  ${tw`mx-4`}
`;

const StylednavItemsGroup = styled.nav`
  ${tw`bg-violet-100`}
  display: none;
  position: absolute;
  z-index: 100;
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
  box-shadow: 0 2px 4px 4px rgba(183, 183, 183, 0.25);
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;
  }
  .nav-title {
    ${tw`text-lg text-gray-500`}
  }
  .sub-nav-list {
    display: flex;
    .sub-nav-item {
      ${tw`text-md`}
      a {
        ${tw`text-gray-600`}
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

const Header = () => (
    <>
        <StyledHeader>
            <div className="inner">
                <h1>
                    <a href="/">
                        <Logo />
                    </a>
                </h1>
                <StyledNav>
                    <ul>
                        <li>
                            <a className="nav-item" href="/example">Example</a>
                            <StylednavItemsGroup>
                                <a href="/example/font">Font</a>
                                <a href="/example/linkButton">LinkButton</a>
                                <a href="/example/linkText">LinkText</a>
                            </StylednavItemsGroup>
                        </li>
                        <li>
                            <a className="nav-item" href="/">Products</a>
                            <StylednavItemsGroup>
                                <a href="/product/assetInventory">Asset Inventory</a>
                                <a href="/product/costExplorer">CostExplorer</a>
                                <a href="/product/alertManager">AlertManager</a>
                                <a href="/product/IAM">IAM</a>
                            </StylednavItemsGroup>
                        </li>
                        <li><a className="nav-item" href="/">Pricing</a></li>
                        <li><a className="nav-item" href="/">FAQ</a></li>
                        <li><a className="nav-item" href="/">Contact</a></li>
                    </ul>
                    <StyledLinkButton color="violet-400" size="medium">Talk to Sales</StyledLinkButton>
                    <a className="nav-item" href="/">
                        Docs
                        <StyledIcExternal />
                    </a>
                    <a className="nav-item" href="/">
                        Community
                        <StyledIcExternal />
                    </a>
                </StyledNav>
            </div>
        </StyledHeader>
        {/* <StyledSubNav> */}
        {/*    <div className="inner"> */}
        {/*        <span className="nav-title">Product</span> */}
        {/*        <ul className="sub-nav-list"> */}
        {/*            <li className="sub-nav-item"><a href="/product/assetInventory">Asset Inventory</a></li> */}
        {/*            <li className="sub-nav-item"><a href="/product/costExplorer">CostExplorer</a></li> */}
        {/*            <li className="sub-nav-item"><a href="/product/alertManager">AlertManager</a></li> */}
        {/*            <li className="sub-nav-item"><a href="/product/IAM">IAM</a></li> */}
        {/*        </ul> */}
        {/*    </div> */}
        {/* </StyledSubNav> */}
    </>
);

export default Header;
