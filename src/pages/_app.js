import { ChakraProvider } from '@chakra-ui/react';
import './_app.css';
import theme from '../config/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Della_Respira } from 'next/font/google';
import { motion } from 'framer-motion';
import HeaderSm from '../components/HeaderSm';

const dellaRespira = Della_Respira({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={dellaRespira.className}>
        <motion.header
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Header />
        </motion.header>
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
