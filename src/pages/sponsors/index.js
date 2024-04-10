import React from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../../components/PageContainer';
import { Flex, Box, SimpleGrid } from '@chakra-ui/react';
import PageTextBox from '../../components/PageTextBox';

const Sponsors = () => {
  return (
    <div>
      <PageContainer heading={'Sponsors'}>
        <PageTextBox>
          Our festival is made possible by our generous sponsors. They are what
          enable us to pay musicians a wage worthy of their talent, as well as
          make donations to our supported charities. Please support them in any
          way you can. Click on the logos to be redirected to their website.
        </PageTextBox>

        <Flex
            w={'full'}
            h={'full'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box w={['300px']}>
              <a
                href='https://www.rainierbeer.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src='images/sponsors/R-rainier.png'
                  alt='Rainier Beer logo/link'
                  width='100%'
                />
              </a>
            </Box>
          </Flex>

        <SimpleGrid columns={[1, null, 3]} spacing={10} py={4}>
          <Flex
            w={'full'}
            h={'full'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box w={['300px']}>
              <a
                href='https://www.eartrumpetlabs.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src='images/sponsors/eartrumpet.png'
                  alt='Ear Trumpet Labs logo/link'
                  width='100%'
                />
              </a>
            </Box>
          </Flex>
          <Flex
            w={'full'}
            h={'full'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box w={['300px']}>
              <a
                href='https://audixusa.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src='/images/sponsors/audix.jpeg'
                  alt='Audix Micropthones logo/link'
                  width='100%'
                />
              </a>
            </Box>
          </Flex>
          <Flex
            w={'full'}
            h={'full'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box w={['200px']}>
              <a
                href='https://breakside.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src='/images/sponsors/breakside.png'
                  alt='Breakside Brewery logo/link'
                  width='100%'
                />
              </a>
            </Box>
          </Flex>
        </SimpleGrid>
        <Box w={['100%', null, '600px', '800px', '1000px']} p={[0, 6]}>
          <a
            href='https://oregonbluegrass.org/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src='/images/sponsors/oba.png'
              alt='Oregon Bluegrass Association logo/link'
              width='100%'
            />
          </a>
        </Box>
      </PageContainer>
    </div>
  );
};

export default Sponsors;
