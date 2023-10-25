import { Box, ChakraProvider } from '@chakra-ui/react';
import './_app.css';
import theme from '../config/theme';
import HeaderSm from '../components/HeaderSm';
import Header from '../components/Header';
import StaticHeader from '../components/StaticHeader';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import NavigationBar from '../components/NavigationBar';
import { Della_Respira, Special_Elite } from 'next/font/google';
import localFont from 'next/font/local'

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
});
const dellaRespira = Della_Respira({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <main className={dellaRespira.className}>
        <HeaderSm />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
