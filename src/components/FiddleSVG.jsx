import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FiddleSVG = () => {
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
    <Flex flexDirection={'column'} position={'relative'}>
      <motion.img
        style={{ originY: 0.85 }}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/new-birds/fiddle-wing.svg'
        alt='bird-fiddle-wings'
        width={'120px'}
        height={'auto'}
      />
      <Image
        className='bird-instruments-color'
        src='/images/new-birds/fiddle-body.svg'
        alt='bird-fiddle-body'
        width={'120px'}
        height={'auto'}
        sx={{ position: 'absolute', top: '48px' }}
      />
    </Flex>
    // </motion.div>
  );
};

export default FiddleSVG;
