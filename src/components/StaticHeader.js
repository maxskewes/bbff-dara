import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import MotionBirdBox from './MotionBirdBox';

const StaticHeader = () => {
  return (
    <>
<Image src='/images/static-header.svg' alt="Site Header" sx={{ width: '100vw', height: 'auto'}} />
    </>
  );
};

export default StaticHeader;
