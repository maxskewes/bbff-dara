import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Image,
  Box,
  Flex,
  Show,
  Text,
  Hide,
  Icon,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
} from '@chakra-ui/react';
import MotionBirdBox from '../components/MotionBirdBox';
import EventbriteButton from '../components/EventbriteButton';
import DonateButton from '../components/DonateButton';
import { TbBuildingBridge } from 'react-icons/tb';
import { bandlist } from '../assets/bandlist';
import PromoVideoModal from '../components/PromoVideoModal';
import ReactPlayer from 'react-player/lazy';

export default function Home() {
  const BandListItem = ({ bandname }) => {
    return (
      <Flex flexDirection={'row'}>
        <Text
          color={'white'}
          textTransform={'uppercase'}
          whiteSpace={'nowrap'}
          fontWeight={600}
          letterSpacing={2}
        >
          &nbsp;{bandname}&nbsp;
        </Text>
        <Flex alignItems={'center'} fontSize={'sm'}>
          <Icon as={TbBuildingBridge} />
        </Flex>
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
          {/* <Show above='md' zIndex={5}>
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
          </Show> */}

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
            <Box
              width={'full'}
              pt={[4, null, 8, null, 12]}
              pb={[2, null, null, 4, 4]}
              px={[4]}
            >
              {/*large display */}
              <Show above='md'>
                <Grid
                  templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)']}
                  spacing={[4]}
                >
                  <GridItem
                    colSpan={1}
                    py={[0, null, null, 2, 6]}
                    px={[2, null, null, 4]}
                    pb={[4, null, 0]}
                  >
                    <ReactPlayer
                      url='https://www.youtube.com/watch?v=TLzTBULRAME'
                      playing
                      controls
                      width={'auto'}
                    />
                  </GridItem>

                  <GridItem colSpan={1}>
                    <Image
                      src='/images/zombie-banjo-picks.svg'
                      alt='zombie hand wearing banjo picks'
                    />
                  </GridItem>

                  <GridItem
                    colSpan={1}
                    pt={[0, null, null, 2, null, 6]}
                    display={'flex'}
                    justifyContent={'center'}
                  >
                    <VStack>
                      <EventbriteButton />
                      <DonateButton />
                      <Image
                        src='/images/paint-all.svg'
                        alt='Saturday May 4th First Congregational Church 1126 SW Park'
                        pt={[4]}
                        width={['200px', null, '280px', null]}
                      />
                    </VStack>
                  </GridItem>
                </Grid>
              </Show>

              {/*mobile display */}
              <Hide above='md'>
                <Flex
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <VStack w={'full'}>
                    <HStack>
                      <EventbriteButton width={'100%'}/>
                      <DonateButton width={'100%'}/>
                    </HStack>
                    <Image
                      src='/images/paint-all.svg'
                      alt='Saturday May 4th First Congregational Church 1126 SW Park'
                      pt={[4]}
                      width={['200px', '300px']}
                    />
                  </VStack>

                  <Image
                    src='/images/zombie-banjo-picks.svg'
                    alt='zombie hand wearing banjo picks'
                  />

                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=TLzTBULRAME'
                    playing
                    controls
                    width={'auto'}
                  />
                </Flex>
              </Hide>

              <Flex
                flexDirection={'column'}
                color='white'
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                pb={8}
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
            </Box>
          </motion.div>
        </Box>
      </main>
    </>
  );
}
