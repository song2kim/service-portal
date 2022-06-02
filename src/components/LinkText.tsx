import tw from 'twin.macro';
import styled from 'styled-components';
import { ReactNode } from 'react';
import Link from 'next/link';
import ROUTE from '@/constants/route';

interface LinkTextProps {
    href: string;
    children: ReactNode;
    target?: string;
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
  &:hover {
    > svg {
       margin-left: 4px;
      transition: margin-left .25s;
    }
  }
`;

const LinkText = ({
    href = ROUTE.HOME,
    children = 'link',
    target = '_self',
    ...props
}: LinkTextProps) => (
    <Link href={href} passHref>
        <StyledLinkText {...props} target={target}>
            {children}
        </StyledLinkText>
    </Link>
);

export default LinkText;
