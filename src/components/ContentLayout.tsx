import styled from 'styled-components';
import React from 'react';

type ContentLayoutProps = {
    children: React.ReactNode;
};

const StyledContentLayout = styled.div`
  //min-height: 100vh;
  padding-top: var(--gnb-height);
  padding-top: 112px;
`;

const ContentLayout = ({ children }: ContentLayoutProps) => (
    <StyledContentLayout>
        {children}
    </StyledContentLayout>
);

export default ContentLayout;
