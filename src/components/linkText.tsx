import tw from 'twin.macro';
import styled from 'styled-components';
import { IcArrowRight } from '../assets/icons';

interface LinkTextProps {
    href: string;
    children: string;
}

const StyledLinkText = styled.a`
  ${tw`inline-flex`}
`;

const StyledText = styled.span`
  ${tw`inline-flex text-violet-400 text-lg hover:(text-violet-400 underline)`}
`;

const StyledSVGWrapper = styled.span`
    ${tw`inline-flex items-center`}
    > svg {
      ${tw`inline-block text-violet-400`}
    }
  
  ${StyledLinkText}:hover & {
    margin-left: 4px;
    transition: margin-left .3s;
  }
`;

const LinkText = ({ href = '/', children = 'link' }: LinkTextProps) => (
    <StyledLinkText href={href}>
        <StyledText>{children}</StyledText>
        <StyledSVGWrapper><IcArrowRight color="#6638B6" /></StyledSVGWrapper>
    </StyledLinkText>
);

export default LinkText;
