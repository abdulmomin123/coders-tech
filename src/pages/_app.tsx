import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import CartProvider from '../contexts/Cart';
import CurrentProductsProvider from '../contexts/currentProduct';
import NotificationProvider from '../contexts/Notification';
import UserProvider from '../contexts/User';
import { GlobalStyles } from '../styles/globalStyles';

const ContentArea = styled.main`
  max-width: 150rem;
  margin: 0 auto;
  padding: 3rem 0;

  @media only screen and (max-width: 96.25em) {
    padding: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 2rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <NotificationProvider>
        <UserProvider>
          <CurrentProductsProvider>
            <Head>
              <title>Shopnik | Home</title>
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

            {/* Notification */}
            <Notification />
          </CurrentProductsProvider>
        </UserProvider>
      </NotificationProvider>
    </CartProvider>
  );
}

export default MyApp;
