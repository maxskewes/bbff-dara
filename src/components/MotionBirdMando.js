import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBirdMando = () => {
  return (
    // <motion.div
    //   initial={{ x: 1700, y: -20 }}
    //   animate={{
    //     x: 700,
    //     y: [-40, 20, -40, 20, -40, -20],
    //   }}
    //   transition={{
    //     duration: 5,
    //   }}
    // >
    <Flex flexDirection={'column'} position={'relative'}>
      <motion.img
        style={{ originY: 1 }}
        animate={{ rotateX: 1440 }}
        transition={{
          duration: 5,
        }}
        className='bird-instruments-color'
        src='/images/birds-instruments/bird-mando-wings.svg'
        alt='bird-banjo-wings'
        width={'50px'}
        height={'auto'}
      />

      <Image
        className='bird-instruments-color'
        src='/images/birds-instruments/bird-mando-body.svg'
        alt='bird-banjo-body'
        width={'200px'}
        height={'auto'}
        sx={{ position: 'absolute', top: '100px'}}
      />
      </Flex>
    // </motion.div>
  );
};

export default MotionBirdMando;
