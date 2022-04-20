import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles } from 'twin.macro';
import Header from 'components/header';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <GlobalStyles />
        </>
    );
}

export default MyApp;
