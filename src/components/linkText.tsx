import tw from 'twin.macro';
import styled from 'styled-components';
import { IcArrowRight } from 'assets/icons';
import { ReactNode } from 'react';

interface LinkTextProps {
    href: string;
    children: ReactNode;
}

const StyledLinkText = styled.a`
  ${tw`inline-flex items-center`}
  > svg {
    transition: margin-left .25s;
    path {
      ${tw`text-violet-400 fill-current`}
    }
  }
  .text {
    ${tw`inline-flex text-violet-400 text-lg hover:(text-violet-400 underline)`}
  }
  &:hover {
    > svg {
       margin-left: 4px;
      transition: margin-left .25s;
    }
  }
`;

const LinkText = ({ href = '/', children = 'link' }: LinkTextProps) => (
    <StyledLinkText href={href}>
        <span className="text">{children}</span>
        <IcArrowRight />
    </StyledLinkText>
);

export default LinkText;
