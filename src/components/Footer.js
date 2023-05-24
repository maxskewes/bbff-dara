import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: ['20px', null, '30px', '50px'],
          paddingBottom: '50px',
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Text>Bridgetown Bluegrass</Text>
          <Text>is a not-for-profit music festival.</Text>
          <Text>Only the musicians and technicians get paid.</Text>
        </Box>
        <Image
          src='/images/portland-grass.svg'
          alt='portland grass'
          sx={{ width: '70%', position: 'relative' }}
        />
      </Box>
    </>
  );
};

export default Footer;
