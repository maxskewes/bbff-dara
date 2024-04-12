import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Text,
  Image,
  HStack,
  SimpleGrid,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const SponsorFooterBox = ({ link, pic, alt }) => {
    return (
      <Flex
        w={'full'}
        h={'full'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box w={['100px', null, '200px']}>
          <a
            href={`https://www.${link}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`images/sponsors/${pic}`}
              alt={`${alt} Labs logo/link`}
              width='100%'
            />
          </a>
        </Box>
      </Flex>
    );
  };

  return (
    <>
      <Box
        sx={{
          paddingBottom: '150px',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgColor: '#191919',
          bgGradient: 'linear(#111111 20%, #4A1800 90%)',
          minHeight: '100px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            top: ['-28px', '-40px', '-60px', '-80px', '-100px'],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src='/images/portland-grass.svg'
            alt='portland grass'
            sx={{ width: '70%', maxHeight: [140, 180, 200, 220, 260] }}
          />
          <HStack paddingTop={[4, null, 8]} spacing={[6]}>
            <a
              href='https://www.instagram.com/bridgetownbluegrassfest/?hl=en'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Icon
                as={RiInstagramFill}
                w={[9, null, 12, null, 14]}
                h={[9, null, 12, null, 14]}
                color='#006699'
                _hover={{ color: '#0551cd' }}
              />
            </a>

            <a
              href='https://www.facebook.com/bridgetownbluegrassfest/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Icon
                as={FaFacebook}
                w={[8, null, 10, null, 12]}
                h={[8, null, 10, null, 12]}
                color='#006699'
                _hover={{ color: '#0551cd' }}
              />
            </a>
          </HStack>

          <Flex
            pt={[6]}
            w={'full'}
            h={'full'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box w={['100px', null, '200px']}>
              <a
                href='https://rainierbeer.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src='images/sponsors/rainier-retro.svg'
                  alt='Rainier logo/link'
                  width='100%'
                />
              </a>
            </Box>
          </Flex>
          <SimpleGrid
            columns={[2, null, 4]}
            spacing={[6, null, null, 10]}
            py={6}
          >
            <SponsorFooterBox
              link={'eartrumpetlabs.com'}
              pic={'eartrumpet.svg'}
              alt={'Ear Trumpet Labs'}
            />
            <SponsorFooterBox
              link={'audixusa.com'}
              pic={'audix.svg'}
              alt={'Audix Microphones'}
            />
            <SponsorFooterBox
              link={'breakside.com'}
              pic={'breakside.svg'}
              alt={'Breakside Brewing'}
            />
            <SponsorFooterBox
              link={'oregonbluegrass.org'}
              pic={'oba.svg'}
              alt={'Oregon Bluegrass Association'}
            />
            <SponsorFooterBox
              link={'stjosefswinery.com'}
              pic={'st-josefs.svg'}
              alt={"St. Josef's Winery"}
            />
            <SponsorFooterBox
              link={'hopworksbeer.com'}
              pic={'hub.svg'}
              alt={'Hopworks Urban Brewery'}
            />
            <SponsorFooterBox
              link={'stonecirclecider.com'}
              pic={'stone-circle.svg'}
              alt={'Stone Circle Cider'}
            />
            <SponsorFooterBox
              link={'travelmag.com'}
              pic={'travelmag.svg'}
              alt={'Travelmag'}
            />
            <SponsorFooterBox
              link={'sanctuaryhall.com'}
              pic={'sanctuary-hall.svg'}
              alt={'Sanctuary Hall'}
            />{' '}
            <SponsorFooterBox
              link={'firstunitarianportland.org'}
              pic={'church.svg'}
              alt={'First Unitarian Portland'}
            />
          </SimpleGrid>

          <Box
            sx={{
              paddingTop: [4, null, 8],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textColor: '#8a8a8a',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: ['1rem', null, null, null, '1.25rem'],
            }}
          >
            <Text>
              Bridgetown Bluegrass is a not-for-profit music festival.
            </Text>
            <Text>Only the musicians and technicians get paid.</Text>
            <Text>All additional revenue is donated to charity.</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
