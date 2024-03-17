import { Box, Text, Image, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
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
                color='#8a8a8a'
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
                color='#8a8a8a'
              />
            </a>
          </HStack>
          <Box
            sx={{
              paddingTop: [4, null, 8],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textColor: '#8a8a8a',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: ['.5rem', '.75rem', '1rem', null, '1.25rem'],
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
