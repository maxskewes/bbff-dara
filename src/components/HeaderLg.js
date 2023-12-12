import { Image, Box } from '@chakra-ui/react';
import React from 'react';
import NavigationBar from '../components/NavigationBar';

const HeaderLg = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        src='/images/static-header-nobg.svg'
        alt='Site Header'
        sx={{ position: 'relative', width: '100vw', height: 'auto' }}
      />
      <NavigationBar />
    </Box>
  );
};

export default HeaderLg;
