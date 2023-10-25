import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import MotionBirdBox from './MotionBirdBox';

const Header = () => {
  const BridgeBox = () => {
    return (
      <Box
        sx={{
          paddingTop: '2rem',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          className='header-text-color'
          src='/images/bbff23-words.svg'
          alt='bbff header'
          zIndex={2}
          sx={{ position: 'relative', width: '50vw', margin: '-100px 0 0' }}
        />
        <Image
          className='bridge-color'
          src='/images/bridge.svg'
          alt='hawthorne-bridge'
          zIndex={1}
          sx={{ position: 'absolute', width: '50vw', margin: '-100px 0 0' }}
        />
      </Box>
    );
  };

  return (
    <Box backgroundColor='#242424' marginTop='2rem'>
      <MotionBirdBox />
      <BridgeBox />
    </Box>
  );
};

export default Header;
