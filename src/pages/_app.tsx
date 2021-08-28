import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coders Tech | Shop for Programmers</title>
        <meta
          name="description"
          content="Shop for coding techs and equipments. Built for programmers to fulfill their tech needs, all in one place."
        />
      </Head>
      {/* Global styles */}
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
