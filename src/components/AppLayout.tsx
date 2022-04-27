import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ContentsLayout from 'components/ContentsLayout';

type AppLayoutProps = {
    children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            <Header />
            <ContentsLayout>
                {children}
            </ContentsLayout>
            <Footer />
        </>
    );
}

export default AppLayout;
