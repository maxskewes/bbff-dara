import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FiddlePNG = () => {
  return (
    // <motion.div
    //   initial={{ x: 1800, y: 40 }}
    //   animate={{
    //     x: 120,
    //     y: [20, -40, 20, -40, 20, -20],
    //   }}
    //   transition={{
    //     duration: 5,
    //   }}
    <Box flexDirection={'column'} position={'relative'}>
      <motion.img
        style={{ originY: -4}}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/new-birds/fiddle-wing.png'
        alt='bird-fiddle-wings'
        width={'100%'}
        height={'auto'}
      />
      <Image
        className='bird-instruments-color'
        src='/images/new-birds/fiddle-body.png'
        alt='bird-fiddle-body'
        width={'100%'}
        height={'auto'}
        sx={{ position: 'absolute', top: '48px' }}
      />
    </Box>
    // </motion.div>
  );
};

export default FiddlePNG;
