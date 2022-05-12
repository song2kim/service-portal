import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ContentLayout from 'components/ContentLayout';
import styled from 'styled-components';

type AppLayoutProps = {
    children: React.ReactNode;
};

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function AppLayout({ children }: AppLayoutProps) {
    return (
        <StyledAppLayout>
            <Header />
            <ContentLayout>
                {children}
            </ContentLayout>
            <Footer />
        </StyledAppLayout>
    );
}

export default AppLayout;
