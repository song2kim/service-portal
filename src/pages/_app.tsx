import Head from 'next/head';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles } from 'twin.macro';
import AppLayout from 'components/AppLayout';

function App({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <GlobalStyles />
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    );
}

export default App;
