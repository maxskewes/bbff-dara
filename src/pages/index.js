import Head from 'next/head';
import { motion } from 'framer-motion';
import { Image, Box, Flex, Show, Text, Hide, Icon } from '@chakra-ui/react';
import MotionBirdBox from '../components/MotionBirdBox';
import EventbriteButton from '../components/EventbriteButton';
import DonateButton from '../components/DonateButton';
import { TbBuildingBridge } from 'react-icons/tb';
import { bandlist } from '../assets/bandlist';

export default function Home() {
  const BandListItem = ({ bandname }) => {
    return (
      <Flex flexDirection={'row'} >
        <Text color={'white'} textTransform={'uppercase'} whiteSpace={'nowrap'} fontWeight={600} letterSpacing={2}>
          &nbsp;{bandname}&nbsp;
        </Text><Flex alignItems={'center'} fontSize={'sm'}>
        <Icon as={TbBuildingBridge} /></Flex>
      </Flex>
    );
  };

  return (
    <>
      <Head>
        <title>Bridgetown Bluegrass</title>
        <meta
          name='description'
          content='bluegrass Portland music festival Bridgetown Folk PDX non-profit nonprofit live ethos program'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box position='relative' width={'100vw'} height={'auto'} minH={300}>
          <Show above='md' zIndex={5}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 0, 0.9],
              }}
              transition={{
                duration: 5,
              }}
            >
              <Flex
                w={'100%'}
                position={'absolute'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                px={[5, null, null, null, 8]}
              >
                <EventbriteButton />
                <DonateButton />
              </Flex>
            </motion.div>
          </Show>

          <Box
            w={'100%'}
            h={'100%'}
            position='absolute'
            zIndex={-1}
            backgroundColor={'black'}
          >
            <Show above='md'>
              <Image
                src={'/images/homepage-background1000.jpg'}
                alt='chansel image'
                sx={{
                  objectFit: 'cover',
                  minWidth: '100%',
                  minH: '100%',
                  opacity: 0.8,
                }}
              />
            </Show>
            <Hide above='md'>
              <Image
                src={'/images/homepage-bg-mobile500.jpg'}
                alt='chansel image'
                sx={{
                  objectFit: 'cover',
                  minWidth: '100%',
                  minH: '100%',
                  opacity: 0.8,
                }}
              />
            </Hide>
          </Box>

          <Box
            position={'fixed'}
            axis='both'
            marginTop={['10%', null, null, '-10%']}
          >
            <MotionBirdBox />
          </Box>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Flex
              pt={[4, null, 8, null, 12]}
              pb={[2, null, null, 4, 4]}
              flexDirection={['column', null, 'row']}
              justifyContent='center'
              alignItems='center'
            >
              <Image
                src='/images/paint-date.svg'
                alt='saturday may 4th'
                height={'100%'}
                width={'100%'}
                minWidth={[240, null, null, 300]}
                maxWidth={['60vw', null, '100px', '460px']}
                mx={[12, null, 2, 8]}
                color={'whiteAlpha.400'}
              />

              <Image
                src='/images/zombie-banjo-picks.svg'
                alt='zombie hand wearing banjo picks'
                height={'100%'}
                maxHeight={'600px'}
                width={'100%'}
                minWidth={300}
                maxWidth={['90vw', null, '30%']}
              />

              <Image
                src='/images/paint-location.svg'
                alt='ucc first congregational church se park and madison'
                height={'100%'}
                width={'100%'}
                minWidth={[240, null, null, 300]}
                maxWidth={['60vw', null, '100px', '460px']}
                mx={[12, null, 2, 8]}
              />
            </Flex>
            <Flex
              flexDirection={'column'}
              color='white'
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
              pb={[20, null, null, null, 28]}
              fontSize={['md', null, null, 'lg', 'xl']}
            >
        
              <Flex flexWrap={'wrap'} justifyContent={'center'}>
                {bandlist.map((band, i) => {
                  return <BandListItem key={i} bandname={band} />;
                })}
              </Flex>
          
            </Flex>
            <Show above='md'>
              <Flex
                color='white'
                flexDirection={'column'}
                alignItems={'center'}
                pb={[20, null, null, null, 28]}
                fontSize={['md', null, null, 'lg', 'xl']}
              >
                <Text>
                  Bridgetown Bluegrass is a not-for-profit music festival.
                </Text>
                <Text>Only the musicians and technicians get paid.</Text>
                <Text>All additional revenue is donated to charity.</Text>
              </Flex>
            </Show>
          </motion.div>
        </Box>
      </main>
    </>
  );
}
