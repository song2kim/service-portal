import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { GlobalStyles } from 'twin.macro';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyles />
        </>
    );
}

export default MyApp;
