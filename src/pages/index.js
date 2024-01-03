import Head from 'next/head';
import { Image, Box, Container, Text, Button } from '@chakra-ui/react';
import MotionBirdBox from '../components/MotionBirdBox';
import { priceobject } from '../config/stripe';

export default function Home() {
  return (

    <>
      <Head>
        <title>Bridgetown Bluegrass</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <main>
        <Box position='relative' width={'100vw'} height={'auto'} minH={300}>
          <Box w={'100%'} h={'100%'} position='absolute' zIndex={-1} backgroundColor={'black'}>
            <Image
              src={'/images/chansel-bg.png'}
              alt='chansel image'
              sx={{ objectFit: 'cover', minWidth: '100%', minH: '100%', opacity: 0.7 }}
            />
          </Box>

          <Box position={'fixed'} axis='both' marginTop={['10%', null, null, '-10%']}>
            <MotionBirdBox />
          </Box>

          <Container
            py={[4, 12]}
            textAlign='center'
            justifyContent='center'
            alignItems='center'
            color='white'
          >

            <Text fontSize={['24px', null, '28px', '32px', '36px']}>
              Bridgetown Bluegrass Folk Festival
            </Text>
            <Image
              pt={1}
              pb={[1, null, 2, 8]}
              m={'auto'}
              alignItems={'center'}
              justifyContent={'center'}
              w={[32, null, 48, null, 80]}
              src={'images/may4-2024.svg'}
              alt='May 24th'
            />
            <Text fontSize={['18px', null, '24px', '28px', '32px']} mb={[1, null, 2]}>
              First Saturday in May
            </Text>
            <Text
              sx={{ textTransform: 'uppercase' }}
              fontSize={['12px', null, '14px', '18px', '20px']}
              fontWeight={600}
            >
              UCC's First Congregational Church <br />
              SW Park and Madison <br />
              Portland, OR
            </Text>
          </Container>
        </Box>
      </main>
    </>
  );
}
