import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles } from 'twin.macro';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" />
            </Head>
            <Component {...pageProps} />
            <GlobalStyles />
        </>
    );
}

export default MyApp;
