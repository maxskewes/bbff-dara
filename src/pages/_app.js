import { ChakraProvider } from '@chakra-ui/react';
import './_app.css';
import theme from '../config/theme';
import HeaderSm from '../components/HeaderSm';
import Footer from '../components/Footer';
import { Della_Respira, Special_Elite } from 'next/font/google';

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
