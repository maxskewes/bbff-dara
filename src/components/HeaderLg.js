import { Image, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import NavigationBar from '../components/NavigationBar';

const HeaderLg = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Flex width={'100vw'} justifyContent={'center'}>
      <Image
        src='/images/static-header-nobg.svg'
        alt='Site Header'
        sx={{ position: 'relative', width: '100vw', maxWidth: '1000px', height: 'auto' }}
      />
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default HeaderLg;
