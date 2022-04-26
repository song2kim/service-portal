import tw from 'twin.macro';
import styled from 'styled-components';
import { IcArrowRight } from 'assets/icons';
import { ReactNode } from 'react';

interface LinkTextProps {
    href: string;
    children: ReactNode;
}

const StyledLinkText = styled.a`
  ${tw`inline-flex items-center text-violet-400`}
  &:hover {
    ${tw`text-violet-400`}
  }
  > svg {
    transition: margin-left .25s;
    path {
      ${tw`fill-current`}
      color: inherit;
    }
  }
  .text {
    ${tw`inline-flex text-lg hover:underline`}
    color: inherit;
  }
  &:hover {
    > svg {
       margin-left: 4px;
      transition: margin-left .25s;
    }
  }
`;

const LinkText = ({ href = '/', children = 'link', ...props }: LinkTextProps) => (
    <StyledLinkText href={href} {...props}>
        <span className="text">{children}</span>
        <IcArrowRight />
    </StyledLinkText>
);

export default LinkText;
