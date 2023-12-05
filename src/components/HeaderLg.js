import { Image } from '@chakra-ui/react';
import React from 'react';
import NavigationBar from '../components/NavigationBar'

const StaticHeader = () => {
  return (
<>
      <Image
        src='/images/static-header-nobg.svg'
        alt='Site Header'
        sx={{ width: '100vw', height: 'auto' }}
      />
      <NavigationBar />
</>
  );
};

export default StaticHeader;
