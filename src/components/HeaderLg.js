import { Image, Box } from '@chakra-ui/react';
import React from 'react';
import NavigationBar from '../components/NavigationBar'
import MotionBirdBox from './MotionBirdBox';

const StaticHeader = () => {
  return (
<Box sx={{position: 'relative'}}>
      <Image
        src='/images/static-header-nobg.svg'
        alt='Site Header'
        sx={{ position: 'relative', width: '100vw', height: 'auto' }}
      />
      <Box sx={{position: 'absolute', left: 0, top:0, }}>
<MotionBirdBox />
</Box>
      <NavigationBar />
</Box>
  );
};

export default StaticHeader;
