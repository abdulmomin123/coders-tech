import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CartProvider from '../contexts/Cart';
import { GlobalStyles } from '../styles/globalStyles';

const ContentArea = styled.main`
  max-width: 150rem;
  margin: 0 auto;
  padding: 3rem 0;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>Coders Tech | Shop for Programmers</title>
        <meta
          name="description"
          content="Shop for coding techs and equipments. Built for programmers to fulfill their tech needs, all in one place."
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Global styles */}
      <GlobalStyles />

      {/* Page content centered */}
      <ContentArea>
        <Component {...pageProps} />
      </ContentArea>

      {/* Shopping cart */}
      <Cart />

      {/* Footer */}
      <Footer />
    </CartProvider>
  );
}

export default MyApp;
