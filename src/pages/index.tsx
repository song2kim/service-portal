import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
    <>
        <Head>
            <title>Service Portal</title>
            <meta name="description" content="ServicePortal home description" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" />
        </Head>
        <h1>hello ServicePortal home</h1>
    </>
);

export default Home;
