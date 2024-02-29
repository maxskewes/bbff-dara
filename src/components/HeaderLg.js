import { Image, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import NavigationBar from '../components/NavigationBar';

const HeaderLg = () => {
  return (
    <>
      <Flex width={'100vw'} justifyContent={'center'} maxH={[0, null, 120, 140, 200]}>
      <Image
        src='/images/header-lg-nobg.svg'
        alt='Site Header'
        // sx={{  maxHeight: '200px' }}
      />
      </Flex>
      <NavigationBar />
    </>
  );
};

export default HeaderLg;
