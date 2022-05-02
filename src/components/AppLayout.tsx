import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ContentLayout from 'components/ContentLayout';

type AppLayoutProps = {
    children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            <Header />
            <ContentLayout>
                {children}
            </ContentLayout>
            <Footer />
        </>
    );
}

export default AppLayout;
