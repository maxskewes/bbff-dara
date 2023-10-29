import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

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
            sx={{ width: '70%' }}
          />
          <Box
            sx={{
              paddingTop: ['1rem', null, '2rem'],
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textColor: '#8a8a8a',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: ['.5rem', '.75rem', '1rem', null, '1.25rem']
            }}
          >
            <Text>Bridgetown Bluegrass is a not-for-profit music festival.</Text>
            <Text>Only the musicians technicians get paid.</Text>
            <Text>All additional revenue is donated to charity.</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
