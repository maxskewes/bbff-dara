import { ChakraProvider } from '@chakra-ui/react';
import './_app.css';
import theme from '../config/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Della_Respira } from 'next/font/google';
import { motion } from 'framer-motion';

const dellaRespira = Della_Respira({
  subsets: ['latin'],
  weight: ['400'],
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={dellaRespira.className}>
        <Head>
          <title>Bridgetown Bluegrass & Folk Festival</title>
          <meta
            name='Bridgetown Bluegrass & Folk Festival'
            content="Portland, Oregon's very own bluegrass and folk music festival"

            // content='bluegrass Portland music festival Bridgetown Folk PDX non-profit nonprofit live ethos program Never Come Down Cascade Crescendo Alder Street Five Letter Word Hot Damn Scandal Fog Holler The Muddy Souls Chicken $#!T Gamblers Amanda Richards & The Good Long Whiles Alison Self Bitches in the Beehive Siena Christie Blue Flags & Black Grass The Lois and Clark Expedition Jasper Diem One Grass Two Grass Laney Lou & the Bird Dogs Left Coast Country Scratchdog Stringband Warren G. Hardings Quattlebaum Hill Williams Julie and the Wayves Mountain Honey Lillian Sawyer Band High Seagrass Wooden Sleepers The Ramblin Kind Out West Whiskey Deaf Whistlin Rufus The Licklog Disputes TIm Connell Eric Skye Mighty Dreadful Stringband Caitlin Jemma & the Goodness The Hollerbodies Slabtown Rounders'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
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
