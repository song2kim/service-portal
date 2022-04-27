import styled from 'styled-components';
import React from 'react';

type ContentsLayoutProps = {
    children: React.ReactNode;
};

const StyledContentsLayout = styled.div`
  min-height: 100vh;
  padding-top: var(--gnb-height);
  padding-top: 112px;
`;

const ContentsLayout = ({ children }: ContentsLayoutProps) => (
    <StyledContentsLayout>
        {children}
    </StyledContentsLayout>
);

export default ContentsLayout;
