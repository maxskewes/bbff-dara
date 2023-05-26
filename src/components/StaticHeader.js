import { Box, Icon, Image } from '@chakra-ui/react';
import React from 'react';
import MotionBirdBox from './MotionBirdBox';

const StaticHeader = () => {
  return (
    <Box
      sx={{
        bgGradient: 'radial(#0000c9, #00024a)',
        
      }}
    >
      <Image
        src='/images/static-header-nobg.svg'
        alt='Site Header'
        sx={{ width: '100vw', height: 'auto' }}
      />
    </Box>
  );
};

export default StaticHeader;
