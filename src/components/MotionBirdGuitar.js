import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdGuitar = () => {
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
    <Flex flexDirection={'column'} position={'relative'}>
      <motion.img
        style={{ originY: 0.9 }}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/birds-instruments/bird-guitar-wings.svg'
        alt='bird-guitar-wings'
        width={'120px'}
        height={'auto'}
      />
      <Image
        className='bird-instruments-color'
        src='/images/birds-instruments/bird-guitar-body.svg'
        alt='bird-guitar-body'
        width={'100px'}
        height={'auto'}
        sx={{ position: 'absolute', top: '39px', left: '6px'}}
      />
      </Flex>
    // </motion.div>
  );
};

export default MotionBirdGuitar;
