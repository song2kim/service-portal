import tw, { styled, css } from 'twin.macro';
// import styled from 'styled-components';
import { Logo, IcExternal } from 'assets/icons';
import LinkButton from 'components/linkButton';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 1120px;
  height: 64px;
  margin: 0 auto;
  nav {
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    ul {
      display: flex;
      height: 100%;
      margin-left: auto;
    }
  }
`;

const StyledNavItem = styled.a`
  ${tw`text-gray-500`}
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;
  
  &:hover {
    ${tw`text-violet-400`}
  }
`;

const StyledIcExternal = styled(IcExternal)`
  margin-left: 4px;
  path {
    fill: #484848;
    
    ${StyledNavItem}:hover & {
      fill: #6638B6;
    }
  }
`;

const Header = () => (
    <StyledHeader>
        <h1 className="border border-gray-600"><Logo /></h1>
        <nav>
            <ul>
                <li tw="text-violet-500"><StyledNavItem href="/">Products</StyledNavItem></li>
                <li><StyledNavItem href="/">Pricing</StyledNavItem></li>
                <li><StyledNavItem href="/">FAQ</StyledNavItem></li>
                <li><StyledNavItem href="/">Contact</StyledNavItem></li>
            </ul>
                <LinkButton color="violet-400" size="medium" tw="mx-4">Talk to Sales</LinkButton>
            <StyledNavItem href="/">
                Docs
                <StyledIcExternal />
            </StyledNavItem>
            <StyledNavItem href="/">
                Community
                <StyledIcExternal />
            </StyledNavItem>
        </nav>
    </StyledHeader>
);

export default Header;
