import { Box, ChakraProvider } from '@chakra-ui/react';
import './_app.css';
import theme from '../config/theme';
import HeaderSm from '../components/HeaderSm';
import StaticHeader from '../components/StaticHeader';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import NavigationBar from '../components/NavigationBar';
import { Special_Elite } from 'next/font/google';

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <main className={specialElite.className}>
        <HeaderSm />
        <PageContainer>
          <main className={specialElite.className}>
            <Component {...pageProps} />
          </main>
        </PageContainer>
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
