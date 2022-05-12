import styled from 'styled-components';
import React from 'react';

type ContentLayoutProps = {
    children: React.ReactNode;
};

const StyledContentLayout = styled.div`
    flex-grow: 1;
`;

const ContentLayout = ({ children }: ContentLayoutProps) => (
    <StyledContentLayout>
        {children}
    </StyledContentLayout>
);

export default ContentLayout;
