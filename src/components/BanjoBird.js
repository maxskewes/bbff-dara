import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const BanjoBird = () => {
  return (
    // <motion.div
    //   initial={{ x: 2000, y: 40 }}
    //   animate={{
    //     x: 500,
    //     y: [20, -40, 20, -40, 20, -20],
    //   }}
    //   transition={{
    //     duration: 5,
    //   }}
    // >
    <Box position={'relative'} sx={{ width: 'auto'}}>
      <motion.img
        style={{ originY: 0.9 }}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/birds-instruments/banjo-wings.png'
        alt='bird-guitar-wings'
        width={'80px'}
        height={'auto'}
      />
      <img
        className='bird-instruments-color'
        src='/images/birds-instruments/banjo-bird.png'
        alt='bird-guitar-body'
        width={'160px'}
        height={'auto'}
        sx={{ position: 'absolute', top: '39px', left: '6px'}}
      />
      </Box>
    // </motion.div>
  );
};

export default BanjoBird;
