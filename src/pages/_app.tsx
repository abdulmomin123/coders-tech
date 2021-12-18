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

  @media only screen and (max-width: 96.25em) {
    padding: 3rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>Shopnik | Furniture store</title>
        <meta
          name="description"
          content="Shopnik is a furniture store. You can shop world class furniture at Shopnik."
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
