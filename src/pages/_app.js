import { ChakraProvider, Box } from '@chakra-ui/react';
import './_app.css';
import theme from '../config/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Della_Respira } from 'next/font/google';
import MotionBirdBox from '../components/MotionBirdBox';

const dellaRespira = Della_Respira({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={dellaRespira.className}>
        <div style={{ position: 'fixed', margin: '100px' }}>
          <MotionBirdBox />
        </div>
        <header>
          <Header />
        </header>
        <main>
          <Component {...pageProps} position='relative' />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
